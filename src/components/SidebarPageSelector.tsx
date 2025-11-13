"use client";
import Link from "next/link";
//サイドバーのページセレクター
import { useEffect, useState } from "react";

type Page = {
  id: string;
  title: string;
  href: string;
};

const STORAGE_KEY = "sidebar.visiblePages";

export default function SidebarPageSelector({ pages }: { pages: Page[] }) {
  const [visibleIds, setVisibleIds] = useState<string[]>(
    pages.map((p) => p.id),
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      // pages のIDリストと stored が一致するかチェック
      const pageIds = pages.map((p) => p.id);
      if (
        stored &&
        Array.isArray(stored) &&
        stored.length === pageIds.length &&
        stored.every((id: string) => pageIds.includes(id))
      ) {
        setVisibleIds(stored);
      } else {
        // 古いデータの場合はリセット
        localStorage.removeItem(STORAGE_KEY);
        setVisibleIds(pageIds);
      }
    } catch {
      // ignore localStorage errors (e.g., private mode)
    }
  }, [pages]);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(visibleIds));
      } catch {
        // ignore localStorage errors (e.g., private mode)
      }
    }
  }, [visibleIds, mounted]);

  const toggle = (id: string) => {
    setVisibleIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-black/5 dark:bg-[#0b0b0b] dark:border-white/5 p-4">
      <nav className="mb-6">
        <ul className="flex flex-col gap-2">
          {pages
            .filter((p) => visibleIds.includes(p.id))
            .map((p) => (
              <li key={p.id}>
                <Link
                  href={p.href}
                  className="block rounded px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/2"
                >
                  {p.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
}

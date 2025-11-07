"use client";
//サイドバーのページセレクター
import { useEffect, useState } from "react";
import Link from "next/link";

type Page = {
  id: string;
  title: string;
  href: string;
};

const STORAGE_KEY = "sidebar.visiblePages";

export default function SidebarPageSelector({ pages }: { pages: Page[] }) {
  const [visibleIds, setVisibleIds] = useState<string[]>(() =>
    typeof window === "undefined"
      ? pages.map((p) => p.id)
      : JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") ?? pages.map((p) => p.id)
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(visibleIds));
    } catch {
      // ignore localStorage errors (e.g., private mode)
    }
  }, [visibleIds]);

  const toggle = (id: string) => {
    setVisibleIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
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

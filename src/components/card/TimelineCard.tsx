"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { TimelineEntry } from "../Timeline";

export default function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <article className="rounded-md bg-white p-4 shadow-sm dark:bg-zinc-900">
      {/* 上部：日付 */}
      <time
        className="block font-bold text-base md:text-lg text-blue-700 dark:text-blue-300 mb-4 tracking-wide"
        style={{ letterSpacing: "0.04em" }}
      >
        {entry.date}
      </time>

      {/* メインコンテンツ：画像 + テキスト */}
      <div className="flex items-start gap-4">
        {entry.image ? (
          <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              sizes="(max-width: 640px) 100vw, 200px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-20 w-32 flex-shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-800" />
        )}

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {entry.href ? (
              <Link href={entry.href} className="hover:underline">
                {entry.title}
              </Link>
            ) : (
              entry.title
            )}
          </h3>

          {entry.description ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
              {entry.description}
            </p>
          ) : null}
          {/* 詳細ページへのボタン */}
          {entry.href ? (
            <div className="mt-3">
              <Link href={entry.href} className="inline-block">
                <button
                  type="button"
                  className={clsx(
                    "rounded-md px-3 py-1 text-sm",
                    "inline-flex items-center",
                    "transition-colors",
                    entry.href
                      ? "bg-zinc-800 text-white hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600"
                      : "bg-zinc-100 text-zinc-700",
                  )}
                >
                  この経験の具体的なエピソードを見る
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

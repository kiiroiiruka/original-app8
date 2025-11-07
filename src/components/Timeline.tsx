"use client";

import clsx from "clsx";
import { forwardRef, useImperativeHandle, useRef } from "react";
import TimelineCard from "./card/TimelineCard";

export type TimelineEntry = {
  id: string;
  title: string;
  date: string; // 表示用の日付文字列
  description?: string;
  image?: string; // public/ 以下のパスが望ましい
  href?: string; // 外部または内部リンク先
  period?: "elementary-junior" | "highschool" | "university"; // 期間（色分け用）
};

export type TimelineHandle = {
  scrollToPeriod: (period: string) => void;
};

const periodColors = {
  "elementary-junior": "border-blue-400 dark:border-blue-500",
  highschool: "border-green-400 dark:border-green-500",
  university: "border-purple-400 dark:border-purple-500",
};

const Timeline = forwardRef<TimelineHandle, { entries: TimelineEntry[] }>(
  ({ entries }, ref) => {
    const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

    useImperativeHandle(ref, () => ({
      scrollToPeriod: (period: string) => {
        const firstEntry = entries.find((e) => e.period === period);
        if (firstEntry) {
          const element = itemRefs.current.get(firstEntry.id);
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
    }));

    if (!entries || entries.length === 0) return null;

    return (
      <ol className="relative border-l border-zinc-200 dark:border-zinc-700">
        {/*並べる*/}
        {entries.map((e) => {
          const borderColor = e.period
            ? periodColors[e.period]
            : "border-zinc-200 dark:border-zinc-700";

          // 入学イベントかどうかを判定（ID が entrance- で始まる）
          const isEntranceEvent = e.id.startsWith("entrance-");

          return (
            <li
              key={e.id}
              ref={(el) => {
                if (el) itemRefs.current.set(e.id, el);
                else itemRefs.current.delete(e.id);
              }}
              className={clsx(
                "mb-10 ml-6 border-l-4 pl-4 -ml-0.5",
                borderColor,
              )}
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-black dark:ring-black">
                <span className="block h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-50" />
              </span>

              {isEntranceEvent ? (
                /* 入学イベント：1行のシンプル表示 */
                <p className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <time className="text-zinc-600 dark:text-zinc-400">
                    {e.date}
                  </time>
                  {" — "}
                  <span>{e.title}</span>
                </p>
              ) : (
                /* 通常のイベント：カード表示 */
                <TimelineCard entry={e} />
              )}
            </li>
          );
        })}
      </ol>
    );
  },
);

Timeline.displayName = "Timeline";

export default Timeline;

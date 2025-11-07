"use client";

import { useRef } from "react";
import Timeline, { type TimelineHandle } from "../../components/Timeline";
import { ACHIEVEMENTS } from "../../constants/portfolio";

export default function AchievementsPage() {
  const timelineRef = useRef<TimelineHandle>(null);

  const handlePeriodClick = (period: string) => {
    timelineRef.current?.scrollToPeriod(period);
  };

  return (
    <section className="mx-auto py-12 px-6">
      <h1 className="mb-6 text-2xl font-semibold">今までの実績</h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        時系列で並べたプロジェクトの一覧です。下にスクロールして詳細を確認できます。
      </p>

      {/* 期間ボタン */}
      <div className="mb-6 flex gap-3">
        <button
          type="button"
          onClick={() => handlePeriodClick("elementary-junior")}
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          小6〜中学
        </button>
        <button
          type="button"
          onClick={() => handlePeriodClick("highschool")}
          className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
        >
          高校
        </button>
        <button
          type="button"
          onClick={() => handlePeriodClick("university")}
          className="rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
        >
          大学
        </button>
      </div>

      <div className="max-w-3xl">
        <Timeline ref={timelineRef} entries={ACHIEVEMENTS} />
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

export const metadata = {
  title: "今までの実績 — サイト",
  description: "これまでの実績をまとめたページのサンプルです。",
};

export default function AchievementsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

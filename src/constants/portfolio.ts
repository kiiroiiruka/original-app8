import type { TimelineEntry } from "../components/Timeline";

export const ACHIEVEMENTS: TimelineEntry[] = [
  {
    id: "a1",
    title: "Personal Portfolio v1",
    date: "2024-06",
    description: `初期バージョンの個人ポートフォリオ。Next.js と Tailwind を使用。

主なポイント:
- レスポンシブ対応
- パフォーマンス最適化
- アクセシビリティ改善`,
    image: "/next.svg",
    href: "/achievements/personal-portfolio-v1",
    period: "university",
  },
  {
    id: "a2",
    title: "Hackathon Project",
    date: "2023-11",
    description:
      "チームで参加したハッカソンのプロジェクト。フロント実装を担当。",
    image: "/vercel.svg",
    href: "/achievements/hackathon-project",
    period: "university",
  },
  {
    id: "entrance-university",
    title: "東京電機大学 入学",
    date: "2023-04",
    description: "東京電機大学に入学。情報工学を本格的に学ぶ新たなステージへ。",
    period: "university",
  },
  {
    id: "a3",
    title: "高校文化祭Webサイト",
    date: "2020-09",
    description: "文化祭用の案内サイトを制作。HTML/CSS/JS で実装。",
    image: "/next.svg",
    href: "/achievements/highschool-festival",
    period: "highschool",
  },
  {
    id: "entrance-highschool",
    title: "新座総合技術高等学校 入学",
    date: "2020-04",
  },
  {
    id: "a4",
    title: "CLI Tool (utility)",
    date: "2018-08",
    description: "開発プロセスを改善するために作ったコマンドラインツール。",
    image: "/next.svg",
    href: "/achievements/cli-tool",
    period: "elementary-junior",
  },
  {
    id: "entrance-junior",
    title: "土合中学校 入学",
    date: "2012-04",
  },
];

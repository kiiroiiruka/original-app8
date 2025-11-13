import { SITE_METADATA } from "../../constants/site";

export const metadata = {
  ...SITE_METADATA,
  title: "インターンで得た経験",
  description: "インターンシップでの実務経験と学び",
};

export default function Internship() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
        インターンで得た経験
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
          インターンシップでの実務経験と実践的な学びが記載されます。
        </p>
        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg">
          <p className="text-zinc-600 dark:text-zinc-400">
            コンテンツ作成中...
          </p>
        </div>
      </div>
    </div>
  );
}

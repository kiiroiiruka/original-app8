import { SITE_METADATA } from "../../constants/site";

export const metadata = {
  ...SITE_METADATA,
  title: "その他、挑戦や失敗経験",
  description: "挑戦から生まれた失敗と教訓たち",
};

export default function Challenges() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
        その他、挑戦や失敗経験
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
          様々な挑戦から生まれた失敗と、そこから得られた貴重な教訓が記載されます。
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

import { SITE_METADATA } from "../../constants/site";

export const metadata = {
  ...SITE_METADATA,
  title: "ゲーム公開で得た経験",
  description: "ゲーム開発と公開を通じて学んだことたち",
};

export default function Game() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
        ゲーム公開で得た経験
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
          ゲーム開発と公開プロセスを通じて得た貴重な経験と学びが記載されます。
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

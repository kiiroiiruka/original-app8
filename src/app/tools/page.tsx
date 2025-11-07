export const metadata = {
  title: "このサイトに使用したツール — サイト",
  description: "このサイトや制作に使用したツールの一覧（サンプル）。",
};

export default function ToolsPage() {
  return (
    <section className="prose mx-auto py-12 px-6">
      <h1 className="text-2xl font-semibold">このサイトに使用したツール</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">使用した言語、フレームワーク、ツール類（例: Next.js, Tailwind CSS など）をここに記載します（サンプル）。</p>
    </section>
  );
}

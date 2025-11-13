import { SITE_METADATA } from "../../constants/site";
import musicData from "../../data/music.json";

export const metadata = {
  ...SITE_METADATA,
  title: musicData.title,
  description: musicData.description,
};

export default function Music() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
        {musicData.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        {musicData.description}
      </p>

      <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <p className="text-zinc-700 dark:text-zinc-300">{musicData.content}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          制作物一覧
        </h2>
        <div className="space-y-4">
          {musicData.works.map((work) => (
            <div
              key={work.name}
              className="border border-zinc-300 dark:border-zinc-700 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
                {work.name}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                {work.description}
              </p>
              <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <span>ジャンル: {work.genre}</span>
                <span>{work.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

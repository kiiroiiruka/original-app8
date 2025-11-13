import { SITE_METADATA } from "../../constants/site";
import challengesData from "../../data/challenges.json";

export const metadata = {
  ...SITE_METADATA,
  title: challengesData.title,
  description: challengesData.description,
};

export default function Challenges() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
        {challengesData.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        {challengesData.description}
      </p>

      <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <p className="text-zinc-700 dark:text-zinc-300">
          {challengesData.content}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          挑戦・失敗経験
        </h2>
        <div className="space-y-4">
          {challengesData.challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="border border-orange-300 dark:border-orange-700 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10"
            >
              <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
                {challenge.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                {challenge.description}
              </p>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded border-l-4 border-green-500">
                <p className="font-semibold text-sm text-green-700 dark:text-green-400 mb-1">
                  学んだこと
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  {challenge.lesson}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
                {challenge.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

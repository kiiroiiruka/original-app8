import { SITE_METADATA } from "../../constants/site";
import gameData from "../../data/game.json";

export const metadata = {
  ...SITE_METADATA,
  title: gameData.title,
  description: gameData.description,
};

export default function Game() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
        {gameData.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        {gameData.description}
      </p>

      <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <p className="text-zinc-700 dark:text-zinc-300">{gameData.content}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          プロジェクト一覧
        </h2>
        <div className="space-y-4">
          {gameData.projects.map((project) => (
            <div
              key={project.name}
              className="border border-zinc-300 dark:border-zinc-700 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                {project.description}
              </p>
              <div className="flex gap-2 mb-2">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {project.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

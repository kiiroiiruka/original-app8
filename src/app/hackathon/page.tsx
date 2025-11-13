import { SITE_METADATA } from "../../constants/site";
import hackathonData from "../../data/hackathon.json";

export const metadata = {
  ...SITE_METADATA,
  title: hackathonData.title,
  description: hackathonData.description,
};

export default function Hackathon() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
        {hackathonData.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        {hackathonData.description}
      </p>

      <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <p className="text-zinc-700 dark:text-zinc-300">
          {hackathonData.content}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          参加ハッカソン
        </h2>
        <div className="space-y-4">
          {hackathonData.hackathons.map((hackathon) => (
            <div
              key={`${hackathon.name}-${hackathon.date}`}
              className="border border-zinc-300 dark:border-zinc-700 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
                {hackathon.name}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                {hackathon.description}
              </p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                  役割: {hackathon.role}
                </p>
              </div>
              <div className="flex gap-2 mb-2">
                {(hackathon.technology || []).map((tech) => (
                  <span
                    key={`${hackathon.name}-${tech}`}
                    className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {hackathon.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

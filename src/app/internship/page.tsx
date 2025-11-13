import { SITE_METADATA } from "../../constants/site";
import internshipData from "../../data/internship.json";

export const metadata = {
  ...SITE_METADATA,
  title: internshipData.title,
  description: internshipData.description,
};

export default function Internship() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
        {internshipData.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        {internshipData.description}
      </p>

      <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <p className="text-zinc-700 dark:text-zinc-300">
          {internshipData.content}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          インターンシップ経歴
        </h2>
        <div className="space-y-4">
          {internshipData.internships.map((internship) => (
            <div
              key={`${internship.company}-${internship.period}`}
              className="border-l-4 border-purple-500 pl-4"
            >
              <h3 className="font-semibold text-lg text-black dark:text-white">
                {internship.company}
              </h3>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                {internship.position}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                {internship.description}
              </p>
              <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <span>{internship.period}</span>
                <span>{internship.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

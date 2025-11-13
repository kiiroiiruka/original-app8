import Image from "next/image";
import { SITE_METADATA } from "../../constants/site";
import profileData from "../../data/profile.json";

export const metadata = {
  ...SITE_METADATA,
  title: "自己PR",
  description: "自己紹介と経歴",
};

export default function Journey() {
  return (
    <div className="p-8 max-w-4xl">
      {/* プロフィールセクション */}
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        {/* プロフィール画像 */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-700">
            <Image
              src={profileData.profileImage}
              alt={profileData.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* プロフィール情報 */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
            {profileData.name}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">
            {profileData.title}
          </p>

          <div className="mb-4 space-y-2">
            <div>
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                出身大学
              </p>
              <p className="text-lg text-black dark:text-white">
                {profileData.university}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                学部
              </p>
              <p className="text-lg text-black dark:text-white">
                {profileData.department}
              </p>
            </div>
          </div>

          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            {profileData.bio}
          </p>
        </div>
      </div>

      {/* 志望動機セクション */}
      <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          志望動機
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {profileData.motivation}
        </p>
      </div>

      {/* スキルセクション */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
          技術スキル
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Frontend
            </h3>
            <ul className="space-y-2">
              {profileData.skills.frontend.map((skill) => (
                <li
                  key={skill.name}
                  className="flex justify-between items-center p-2 bg-zinc-100 dark:bg-zinc-800 rounded"
                >
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {skill.experience}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Backend
            </h3>
            <ul className="space-y-2">
              {profileData.skills.backend.map((skill) => (
                <li
                  key={skill.name}
                  className="flex justify-between items-center p-2 bg-zinc-100 dark:bg-zinc-800 rounded"
                >
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                    {skill.experience}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Other
            </h3>
            <ul className="space-y-2">
              {profileData.skills.other.map((skill) => (
                <li
                  key={skill.name}
                  className="flex justify-between items-center p-2 bg-zinc-100 dark:bg-zinc-800 rounded"
                >
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                    {skill.experience}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 経歴セクション */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          経歴
        </h2>
        <div className="space-y-4">
          {profileData.experience.map((exp) => (
            <div
              key={exp.title}
              className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4"
            >
              <h3 className="font-semibold text-black dark:text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {exp.date}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import episodes from "../../../data/episodes.json";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;
  const entry = episodes.find((e) => e.slug === slug);
  if (!entry) return { title: "Not found" };
  return {
    title: `${entry.title} — 今までの実績`,
    description: entry.summary || "",
  };
}

export default function EpisodePage({ params }: Params) {
  const slug = params.slug;
  const entry = episodes.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <main className="mx-auto max-w-3xl py-12 px-6">
        <h1 className="text-2xl font-semibold">見つかりません</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          指定されたエピソードは存在しません。
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl py-12 px-6">
      <h1 className="text-2xl font-semibold">{entry.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{entry.date}</p>
      <div className="mt-4 text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
        {entry.content}
      </div>

      {entry.images && entry.images.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {entry.images.map((img: string) => (
            <div
              key={img}
              className="relative h-48 w-full overflow-hidden rounded-md"
            >
              <Image
                src={img}
                alt={entry.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

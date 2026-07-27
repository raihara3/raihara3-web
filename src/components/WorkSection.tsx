import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

/**
 * The three areas of work shown as photo + heading + description cards.
 * TODO: replace the placeholder images under /public/work with real photos,
 * and adjust the copy as needed.
 */
const works = [
  {
    label: "Design",
    title: "デザイン",
    description:
      "グラフィックデザインやクリエイティブディレクション、UI/UX の設計も行います。見る人使う人にとって心地よい体験を形にします。最近では Figma MCP を活用したスピーディーな開発フロー作りのため、Figma の運用ルールも策定しています。",
    image: "/work/design-ui.jpg",
  },
  {
    label: "Engineering",
    title: "エンジニアリング",
    description:
      "主に React / Next.js / TypeScript を用いたフロントエンド開発をしています。Three.js を用いた WebXR 開発や、ライブラリの実装、機械学習を用いたアプリ開発も。最近ではバックエンドや Unity など遊びながら少しずつ幅を広げています。",
    image: "/work/engineering-code.jpg",
  },
  {
    label: "Project Management",
    title: "プロジェクトマネジメント",
    description:
      "要件整理から設計などプロジェクトの牽引をしています。〜7人ほどのチームマネジメント経験があり、幅広い経験があるからこその柔軟な提案や進行が可能です。ユーザーとなる方の声を聞きながらモノづくりをするのを好みます。",
    image: "/work/pm-notes.jpg",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeader title="WORK" subtitle="手がけていること" />

        <Reveal className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {works.map((work) => (
            <div key={work.title} className="flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-line">
                {work.image && (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                )}
              </div>

              <p className="mt-4 font-[family-name:var(--font-saira)] text-xs font-medium tracking-[0.12em] text-ink-sub">
                {work.label}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-noto)] text-xl font-medium text-ink">
                {work.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-noto)] text-sm leading-[1.9] text-ink-sub">
                {work.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

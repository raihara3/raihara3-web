import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

/**
 * Skills grouped into a few domains rather than a flat tag cloud, so the depth
 * of each area reads clearly. English domain name on the left, tags on the right.
 */
const domains = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Three.js", "TensorFlow.js"],
  },
  {
    name: "Design & Product",
    skills: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Graphic Design",
      "Creative Direction",
      "PM",
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      "Ruby on Rails",
      "Redis",
      "Nginx",
      "Amazon S3",
      "Amazon Lambda",
      "Amazon DynamoDB",
    ],
  },
  {
    name: "Other",
    skills: ["WebXR", "Blender", "Unity"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <SectionHeader title="SKILLS" subtitle="できること" />

        <p className="mt-8 text-center font-[family-name:var(--font-saira)] text-lg font-medium text-ink">
          Frontend Engineer / PM / Design
        </p>

        <p className="mx-auto mt-5 max-w-[680px] text-center font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink-sub">
          デザイナー視点でのUI/UX設計から、React/Next.js/Three.jsを用いたフロントエンド実装までワンストップで手掛けます。
          <br className="hidden md:block" />
          開発進行やプロジェクトの牽引まで柔軟に対応し、アイデアを最短で形にします。
        </p>

        <Reveal className="mt-14 border-b border-line">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[240px_1fr] md:gap-8"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-[family-name:var(--font-saira)] text-xl font-medium text-ink">
                  {domain.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-surface px-3 py-1 font-[family-name:var(--font-saira)] text-[13px] text-ink-sub"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

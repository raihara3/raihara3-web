export default function AboutSection() {
  const skills = [
    "Web Development",
    "Graphic Design",
    "Direction",
    "WebXR",
    "TypeScript",
    "React",
    "Next.js",
    "Three.js",
    "Ruby on Rails",
    "Photoshop",
    "Illustrator",
    "Figma",
    "Blender",
    "Unity",
    "8th Wall",
    "WordPress",
    "Shopify",
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          About
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">raihara3</h3>
          <p className="text-xl text-blue-400 mb-4">
            Frontend Engineer / WebXR Engineer
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            グラフィックデザイナーからフロントエンドエンジニアへ転向。
            <br />
            Webサービス・WebARの開発をして遊んでいます。
          </p>
        </div>

        <div>
          {/* <h4 className="text-lg font-semibold text-white mb-4 text-center">
            Skills
          </h4> */}
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700 transition-colors"
              >
                #{skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

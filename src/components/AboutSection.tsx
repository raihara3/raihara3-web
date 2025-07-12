export default function AboutSection() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
    'WebXR', 'Three.js', 'WebGL', 'A-Frame',
    'Photoshop', 'Figma', 'Illustrator', 'After Effects',
    'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Docker'
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About</h2>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">raihara3</h3>
          <p className="text-xl text-blue-400 mb-4">Frontend Engineer / WebXR Engineer</p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            元グラフィックデザイナーから転身したフロントエンドエンジニアです。
            デザインの知見を活かしたUI/UX設計と、WebXRを用いた次世代ウェブ体験の構築を得意としています。
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 text-center">Skills</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700 hover:border-blue-500 transition-colors"
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
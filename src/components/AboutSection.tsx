import Image from "next/image";

const skills = [
  "React",
  "TypeScript",
  "Three.js",
  "TensorFlow.js",
  "PM",
  "Graphic Design",
  "Creative Direction",
  "Figma",
  "Photoshop",
  "Illustrator",
  "Ruby on Rails",
  "Redis",
  "Nginx",
  "Blender",
  "Unity",
  "Amazon S3",
  "Amazon Lambda",
  "Amazon DynamoDB",
];

const snsLinks = [
  {
    name: "X",
    url: "https://x.com/raihara3",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/raihara3",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/raihara3",
    icon: (
      <svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="profile" className="py-12">
      <div className="max-w-[1150px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[25px] items-center">
          <div className="bg-[var(--black)] px-[15px] flex items-center justify-center">
            <h2 className="font-[family-name:var(--font-saira)] font-semibold text-[26px] text-white text-center leading-normal">
              Profile
            </h2>
          </div>

          <p className="font-[family-name:var(--font-saira)] text-base text-[var(--black)] text-center">
            作りたいモノを作るのに必要な技術で遊んでいます
          </p>

          <div className="bg-white shadow-[2px_2px_5px_0px_rgba(0,0,0,0.2)] overflow-hidden w-full max-w-[540px]">
            <div className="bg-[var(--black)] px-[23px] py-[9px] flex items-center">
              <span className="font-[family-name:var(--font-saira)] font-semibold text-[26px] text-white leading-normal">
                @raihara3
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start">
              <div className="flex flex-col gap-5 items-center p-5 w-full sm:w-auto">
                <div className="relative w-[118px] h-[118px] border border-[var(--black)]">
                  <Image
                    src="/logo.png"
                    alt="raihara3"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-[10px] items-center justify-center">
                  {snsLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--black)] hover:opacity-70 transition-opacity"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white flex-1 flex flex-col gap-[10px] px-[10px] py-3 min-w-0">
                <div className="flex flex-col items-start w-full">
                  <span className="font-[family-name:var(--font-saira)] font-semibold text-[20px] text-black leading-normal">
                    Job
                  </span>
                  <span className="font-[family-name:var(--font-saira)] font-normal text-sm text-[var(--black)] leading-normal">
                    Frontend Engineer / WebXR Engineer
                  </span>
                </div>

                <div className="flex flex-col items-start w-full">
                  <span className="font-[family-name:var(--font-saira)] font-semibold text-[20px] text-black leading-normal">
                    Skill
                  </span>
                  <div className="flex flex-wrap gap-x-[10px] items-start text-sm text-[var(--black)] w-full">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-[family-name:var(--font-saira)] font-normal leading-normal"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

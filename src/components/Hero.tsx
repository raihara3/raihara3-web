import Image from "next/image";
import Starfield from "./Starfield";
import { socials } from "@/lib/socials";

export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* Dark banner with the tasteful starfield. */}
      <div className="relative h-[300px] overflow-hidden bg-hero md:h-[440px]">
        <Starfield />
      </div>

      {/* Profile content, with the avatar straddling the banner edge. */}
      <div className="relative z-10 mx-auto max-w-[680px] px-5 text-center">
        <div className="-mt-[70px] flex justify-center md:-mt-[88px]">
          <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full border-[6px] border-bg bg-bg shadow-[0_8px_30px_rgba(12,14,18,0.18)] md:h-[176px] md:w-[176px]">
            {/* TODO: replace /profile.jpg with the real portrait photo. */}
            <Image
              src="/profile.jpg"
              alt="raihara3 (Ryu Aihara)"
              fill
              sizes="176px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <h1 className="font-[family-name:var(--font-saira)] text-[clamp(44px,7vw,80px)] font-semibold leading-[0.95] tracking-[-0.01em] text-ink">
            raihara3
          </h1>
          <span
            className="h-2.5 w-2.5 rounded-full bg-orange"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 font-[family-name:var(--font-saira)] text-base font-medium tracking-[0.02em] text-ink-sub">
          Ryu Aihara
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          {socials.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-orange hover:text-orange"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[520px] font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink-sub">
          フロントエンド・WebXR・3D を軸に、作りたいモノを作るのに必要な技術で遊んでいます。
        </p>
      </div>
    </section>
  );
}

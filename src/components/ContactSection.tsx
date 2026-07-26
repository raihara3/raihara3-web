import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { socials } from "@/lib/socials";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="mx-auto max-w-[680px] px-5 md:px-8">
        <SectionHeader title="CONTACT" subtitle="お問い合わせ" />

        <p className="mt-8 text-center font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink-sub">
          お仕事のご相談やご連絡は、以下の SNS からお気軽にどうぞ。
        </p>

        <Reveal className="mt-12 flex flex-col gap-3">
          {socials.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-line bg-surface px-6 py-5 transition-all duration-200 hover:border-orange hover:shadow-[0_12px_36px_rgba(20,20,20,0.08)]"
            >
              <span className="flex items-center gap-4">
                <Icon className="h-5 w-5 text-ink transition-colors duration-200 group-hover:text-orange" />
                <span className="font-[family-name:var(--font-saira)] text-lg font-medium text-ink">
                  {name}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-ink-sub transition-colors duration-200 group-hover:text-orange" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

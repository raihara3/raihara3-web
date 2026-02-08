import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-[95%] h-[200px] md:h-[483px] m-auto mt-[2.5%]">
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(7.15% 0%, 100% 0%, 100% 80.3%, 92.63% 100%, 0% 100%, 0% 18.8%)",
        }}
      >
        <Image src="/kv-bg.jpg" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-12 flex items-center">
        <h1 className="font-[family-name:var(--font-saira)] font-semibold text-2xl md:text-[40px] text-white whitespace-nowrap leading-normal z-10">
          {"raihara3's Launch Station"}
        </h1>

        <div className="block absolute right-0 top-0 xl:right-12 xl:top-[74px] w-[50%] h-[100%] xl:w-[397px] xl:h-[397px] floating">
          <Image
            src="/panel.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

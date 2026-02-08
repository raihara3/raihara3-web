export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-50">
      <div className="relative w-[200px] h-[40px] md:w-[345px] md:h-[65px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 276 65"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 0H276V66H30.8L0 34.3562V0Z" fill="#FF4800" />
        </svg>
        <span className="absolute top-1/2 right-6 -translate-y-1/2 font-[family-name:var(--font-saira)] font-semibold text-base md:text-[30px] text-[var(--black)] whitespace-nowrap">
          raihara3.xyz
        </span>
      </div>
    </header>
  );
}

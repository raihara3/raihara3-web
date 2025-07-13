export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          お仕事のご依頼やコラボレーションについてお気軽にお声がけください。
        </p>

        <div className="flex justify-center">
          <a
            href="https://x.com/raihara3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 button-primary text-lg px-8 py-3"
            style={{ background: "#000000" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
            raihara3
          </a>
        </div>
      </div>
    </section>
  );
}

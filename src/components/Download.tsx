import Reveal from "./Reveal";
import DownloadButton from "./DownloadButton";

export default function Download() {
  return (
    <section id="download" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-rose/10 via-white to-premium/10 border-t border-ink/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[320px] glow-rose pointer-events-none opacity-50" />
      <div className="mx-auto max-w-2xl px-6 text-center relative">
        <Reveal>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
          Ton histoire commence ici
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
          Dis-le une fois,{" "}
            <span className="font-serif text-accent">
              et avance.
            </span>
          </h2>
          <p className="text-ink/60 mb-10 max-w-md mx-auto">
          Télécharge KayConfesser et rejoins une communauté qui écoute
          sans juger — sous une identité qui reste toujours la tienne.
          </p>

          <DownloadButton />
        </Reveal>
      </div>
    </section>
  );
}

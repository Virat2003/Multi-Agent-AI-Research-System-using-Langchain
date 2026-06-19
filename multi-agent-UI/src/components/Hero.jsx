import { useEffect, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">

      {/* Eyebrow */}
      <div
        className={`
          flex items-center gap-2 mb-6
          transition-all duration-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "0ms" }}
      >
        <span className="inline-block w-5 h-[1.5px] bg-orange-500" />
        <p className="font-mono text-orange-500 text-xs tracking-[0.22em] uppercase">
          Multi-Agent AI System
        </p>
      </div>

      {/* Headline */}
      <div
        className={`
          mb-7
          transition-all duration-600
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        style={{ transitionDelay: "100ms" }}
      >
        <h1 className="text-5xl md:text-[4.5rem] font-extrabold leading-[1.08] tracking-tight text-white">
          Four agents.
        </h1>
        {/* Stroke / outlined text — the signature headline treatment */}
        <h1
          className="text-5xl md:text-[4.5rem] font-extrabold leading-[1.08] tracking-tight"
          style={{
            WebkitTextStroke: "2px #f97316",
            color: "transparent",
          }}
        >
          One answer.
        </h1>
      </div>

      {/* Body */}
      <p
        className={`
          max-w-xl text-slate-400 text-base leading-[1.85]
          transition-all duration-600
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        style={{ transitionDelay: "200ms" }}
      >
        Enter a topic. A search agent finds sources, a scraping agent reads them,
        a writer composes a structured report, and a critic reviews it —
        all sequential, all automated.
      </p>

      {/* Decorative rule */}
      <div
        className={`
          mt-12 flex items-center gap-4
          transition-all duration-600
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{ transitionDelay: "350ms" }}
      >
        <div className="h-[1px] w-16 bg-slate-800" />
        <span className="font-mono text-[10px] text-slate-700 tracking-[0.2em] uppercase">
          Powered by LangChain agents
        </span>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

    </section>
  );
}

export default Hero;

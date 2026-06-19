import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full h-16
        flex items-center
        border-b border-slate-800/60
        transition-all duration-300
        ${scrolled
          ? "bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-slate-950"
        }
      `}
    >
      <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Animated hex */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <polygon
                points="18,2 33,10 33,26 18,34 3,26 3,10"
                fill="#f97316"
                className="transition-all duration-300"
              />
              <polygon
                points="18,8 28,13.5 28,24.5 18,30 8,24.5 8,13.5"
                fill="#0a0f1e"
              />
              <polygon
                points="18,13 23,16 23,22 18,25 13,22 13,16"
                fill="#f97316"
                opacity="0.7"
              />
            </svg>
          </div>

          <span className="text-lg font-bold tracking-wide text-white">
            Research<span className="text-orange-500">OS</span>
          </span>
        </div>

        {/* Right side tag */}
        <span className="hidden sm:block font-mono text-xs text-slate-600 tracking-widest uppercase">
          Multi-Agent AI System
        </span>

      </div>
    </nav>
  );
}

export default Navbar;

import { Search, Globe, PenTool, Brain, Check } from "lucide-react";

const stages = [
  { id: "search", label: "Search",  Icon: Search  },
  { id: "scrape", label: "Scrape",  Icon: Globe   },
  { id: "write",  label: "Write",   Icon: PenTool },
  { id: "critic", label: "Critic",  Icon: Brain   },
];

/* Rotating dashed ring — CSS keyframe injected once */
const RING_STYLE = `
  @keyframes spin-ring {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .spin-ring {
    animation: spin-ring 2s linear infinite;
    transform-origin: center;
  }
  @keyframes shimmer-line {
    0%   { stroke-dashoffset: 100; }
    100% { stroke-dashoffset: -100; }
  }
  .shimmer-dash {
    animation: shimmer-line 1.4s linear infinite;
  }
`;

function Pipeline({ currentStage }) {
  const activeIndex = stages.findIndex((s) => s.id === currentStage);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <style>{RING_STYLE}</style>

      <div className="flex items-center">
        {stages.map((stage, index) => {
          const { Icon } = stage;
          const completed = activeIndex >= 0 && index < activeIndex;
          const active    = index === activeIndex;
          const isLast    = index === stages.length - 1;

          return (
            <div key={stage.id} className="flex items-center flex-1 last:flex-none">

              {/* Node */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-14 h-14">

                  {/* Active: rotating dashed outer ring (SVG) */}
                  {active && (
                    <svg
                      viewBox="0 0 56 56"
                      className="absolute inset-0 w-full h-full spin-ring"
                    >
                      <circle
                        cx="28" cy="28" r="26"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                        strokeLinecap="round"
                        opacity="0.7"
                      />
                    </svg>
                  )}

                  {/* Completed: solid orange ring */}
                  {completed && (
                    <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full">
                      <circle cx="28" cy="28" r="26" fill="none" stroke="#f97316" strokeWidth="1.5" />
                    </svg>
                  )}

                  {/* Inner circle */}
                  <div
                    className={`
                      absolute inset-[6px] rounded-full
                      flex items-center justify-center
                      transition-all duration-400
                      ${completed
                        ? "bg-orange-500"
                        : active
                        ? "bg-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                        : "bg-slate-900 border border-slate-800"
                      }
                    `}
                  >
                    {completed ? (
                      <Check size={18} className="text-black font-bold" strokeWidth={3} />
                    ) : (
                      <Icon
                        size={18}
                        className={active ? "text-orange-500" : "text-slate-600"}
                        strokeWidth={active ? 2.5 : 1.5}
                      />
                    )}
                  </div>
                </div>

                {/* Label */}
                <span
                  className={`
                    font-mono text-[11px] tracking-[0.14em] uppercase
                    transition-colors duration-300
                    ${active     ? "text-orange-500"
                    : completed  ? "text-slate-300"
                                 : "text-slate-700"}
                  `}
                >
                  {stage.label}
                </span>
              </div>

              {/* Connector */}
              {!isLast && (
                <div className="flex-1 mx-3 -mt-5 h-[2px] relative overflow-hidden">
                  {/* Base track */}
                  <div className="absolute inset-0 bg-slate-800" />
                  {/* Filled (completed) */}
                  {completed && (
                    <div className="absolute inset-0 bg-orange-500" />
                  )}
                  {/* Shimmer (active — traveling right) */}
                  {active && (
                    <svg
                      className="absolute inset-0 w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0" y1="1" x2="100%" y2="1"
                        stroke="#f97316"
                        strokeWidth="2"
                        strokeDasharray="30 70"
                        className="shimmer-dash"
                      />
                    </svg>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pipeline;

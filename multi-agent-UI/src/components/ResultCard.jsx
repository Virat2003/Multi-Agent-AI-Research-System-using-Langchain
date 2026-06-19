import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

const APPEAR_STYLE = `
  @keyframes card-in {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .card-appear {
    animation: card-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
`;

function ResultCard({ title, badge, badgeColor, accentColor, icon, content, delay = 0 }) {
  const [copied, setCopied]   = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {}
  };

  if (!content) return null;

  return (
    <>
      <style>{APPEAR_STYLE}</style>
      <div
        className={`
          max-w-5xl mx-auto px-6 pb-5
          ${visible ? "card-appear" : "opacity-0"}
        `}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-7 py-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              {/* Left accent rule */}
              <div
                className="w-[3px] h-5 rounded-full"
                style={{ background: accentColor }}
              />
              <span className="text-white font-semibold text-base">{title}</span>
              <span className="text-slate-600 text-lg">{icon}</span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full font-mono text-[11px] tracking-widest uppercase border"
                style={{ color: badgeColor, borderColor: `${badgeColor}33`, background: `${badgeColor}10` }}
              >
                {badge}
              </span>

              <button
                onClick={handleCopy}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-slate-800 transition-all duration-150"
                title="Copy to clipboard"
              >
                {copied
                  ? <Check size={14} className="text-green-400" />
                  : <Copy size={14} />
                }
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-7 py-6">
            <p className="text-slate-300 text-sm leading-[1.9] whitespace-pre-wrap">
              {content}
            </p>
          </div>

          {/* Footer rule */}
          <div
            className="h-[2px] w-full"
            style={{ background: `linear-gradient(to right, ${accentColor}40, transparent)` }}
          />
        </div>
      </div>
    </>
  );
}

export default ResultCard;

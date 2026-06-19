import { useEffect, useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

function useTypewriter(text, speed = 28) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) { setDisplayed(""); return; }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

function AgentStatus({ message, loading }) {
  const typed = useTypewriter(message, 22);

  if (!message) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 pb-2">
      <div
        className={`
          flex items-center gap-3
          pl-4 py-3
          border-l-2 transition-colors duration-300
          ${loading ? "border-orange-500" : "border-green-500"}
        `}
      >
        {loading ? (
          <Loader2 size={15} className="animate-spin text-orange-500 shrink-0" />
        ) : (
          <CheckCircle size={15} className="text-green-500 shrink-0" />
        )}

        <span
          className={`
            font-mono text-sm tracking-wide
            ${loading ? "text-slate-300" : "text-green-400"}
          `}
        >
          {typed}
          {/* blinking cursor while typing */}
          {typed.length < message.length && (
            <span className="animate-pulse">▋</span>
          )}
        </span>
      </div>
    </div>
  );
}

export default AgentStatus;

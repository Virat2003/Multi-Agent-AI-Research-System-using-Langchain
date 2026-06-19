import { Search, ArrowRight, Loader2 } from "lucide-react";

function SearchBox({ topic, setTopic, handleResearch, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading && topic.trim()) {
      handleResearch();
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 mb-2">

      <div className="relative flex items-center gap-3">

        {/* Input */}
        <div className="relative flex-1 group">
          {/* Glow ring on focus-within */}
          <div className="
            absolute -inset-[1px] rounded-xl
            bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0
            group-focus-within:from-orange-500/30 group-focus-within:via-orange-400/20 group-focus-within:to-orange-500/30
            transition-all duration-300 rounded-xl pointer-events-none
          " />

          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-orange-500 transition-colors duration-200 pointer-events-none"
          />

          <input
            type="text"
            placeholder="Enter a research topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="
              w-full h-14 pl-11 pr-4
              bg-slate-900/80 border border-slate-800
              rounded-xl text-white text-sm
              placeholder:text-slate-600
              focus:outline-none focus:border-orange-500/70
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200
            "
          />
        </div>

        {/* Button */}
        <button
          onClick={handleResearch}
          disabled={!topic.trim() || loading}
          className="
            h-14 px-6 rounded-xl flex items-center gap-2.5
            font-semibold text-sm tracking-wide whitespace-nowrap
            transition-all duration-200
            bg-orange-500 text-black hover:bg-orange-400 active:scale-95
            disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed disabled:scale-100
          "
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Running</span>
            </>
          ) : (
            <>
              <span>Run Research</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

      </div>

      {/* Keyboard hint */}
      {!loading && topic.trim() && (
        <p className="mt-2.5 ml-1 font-mono text-[10px] text-slate-700 tracking-wider">
          PRESS ENTER TO RUN
        </p>
      )}

    </section>
  );
}

export default SearchBox;

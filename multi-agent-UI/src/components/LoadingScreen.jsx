/* LoadingScreen is intentionally minimal —
   the Pipeline + AgentStatus already show live progress.
   This provides a subtle ambient atmosphere during the API call. */

const PULSE_STYLE = `
  @keyframes dot-bounce {
    0%, 80%, 100% { transform: translateY(0);   opacity: 0.3; }
    40%            { transform: translateY(-6px); opacity: 1;   }
  }
`;

function LoadingScreen() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      <style>{PULSE_STYLE}</style>

      <div className="
        flex items-center justify-center gap-2
        py-10 rounded-xl
        border border-slate-800/60
        bg-slate-900/30
      ">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500"
            style={{
              animation: `dot-bounce 1.4s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;

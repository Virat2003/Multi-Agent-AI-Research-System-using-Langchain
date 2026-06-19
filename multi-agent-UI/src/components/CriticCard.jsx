import ResultCard from "./ResultCard";

function CriticCard({ feedback }) {
  return (
    <ResultCard
      title="Critic Feedback"
      badge="Critique"
      badgeColor="#f97316"
      accentColor="#f97316"
      icon="🧠"
      content={feedback}
      delay={200}
    />
  );
}

export default CriticCard;

import ResultCard from "./ResultCard";

function ReportCard({ report }) {
  return (
    <ResultCard
      title="Research Report"
      badge="Report"
      badgeColor="#34d399"
      accentColor="#34d399"
      icon="📄"
      content={report}
      delay={0}
    />
  );
}

export default ReportCard;

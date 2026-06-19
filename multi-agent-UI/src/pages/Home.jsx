import { useState } from "react";

import Navbar        from "../components/Navbar";
import Hero          from "../components/Hero";
import SearchBox     from "../components/SearchBox";
import Pipeline      from "../components/Pipeline";
import AgentStatus   from "../components/AgentStatus";
import ReportCard    from "../components/ReportCard";
import CriticCard    from "../components/CriticCard";
import LoadingScreen from "../components/LoadingScreen";
import Footer        from "../components/Footer";
import API           from "../services/api";

function Home() {
  const [topic,        setTopic]        = useState("");
  const [loading,      setLoading]      = useState(false);
  const [currentStage, setCurrentStage] = useState("");
  const [status,       setStatus]       = useState("");
  const [report,       setReport]       = useState("");
  const [feedback,     setFeedback]     = useState("");

  const handleResearch = async () => {
    if (!topic.trim()) return;

    try {
      setLoading(true);
      setReport("");
      setFeedback("");

      setCurrentStage("search");
      setStatus("Search Agent is scanning the web...");
      await new Promise(r => setTimeout(r, 1000));

      setCurrentStage("scrape");
      setStatus("Scraper Agent is reading sources...");
      await new Promise(r => setTimeout(r, 1000));

      setCurrentStage("write");
      setStatus("Writer Agent is drafting report...");

      const response = await API.post("/research", { topic });

      setCurrentStage("critic");
      setStatus("Critic Agent reviewing report...");
      await new Promise(r => setTimeout(r, 1000));

      setReport(response.data.report);
      setFeedback(response.data.feedback);
      setStatus("Research completed");

    } catch (error) {
      console.error(error);
      setStatus("Something went wrong — check the console.");
    } finally {
      setLoading(false);
      setCurrentStage("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Navbar />

      <main>
        <Hero />

        <SearchBox
          topic={topic}
          setTopic={setTopic}
          loading={loading}
          handleResearch={handleResearch}
        />

        <Pipeline currentStage={currentStage} />

        <AgentStatus message={status} loading={loading} />

        {loading && <LoadingScreen />}

        <ReportCard  report={report}     />
        <CriticCard  feedback={feedback} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;

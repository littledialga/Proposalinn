import { useState } from "react";
import OpeningSurprise from "@/components/OpeningSurprise";
import InteractiveQuestions from "@/components/InteractiveQuestions";
import RomanticQuotes from "@/components/RomanticQuotes";
import JourneyTimeline from "@/components/JourneyTimeline";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import SuspensePage from "@/components/SuspensePage";
import ProposalPage from "@/components/ProposalPage";
import CelebrationPage from "@/components/CelebrationPage";
import MusicPlayer from "@/components/MusicPlayer";

type Stage = 
  | "opening"
  | "questions"
  | "quotes"
  | "timeline"
  | "reasons"
  | "suspense"
  | "proposal"
  | "celebration";

export default function Home() {
  const [currentStage, setCurrentStage] = useState<Stage>("opening");

  const goToNextStage = (nextStage: Stage) => {
    setCurrentStage(nextStage);
  };

  const handleProposalAnswer = () => {
    setCurrentStage("celebration");
  };

  return (
    <div className="min-h-screen" data-testid="home-page">
      <MusicPlayer />
      
      {currentStage === "opening" && (
        <OpeningSurprise onComplete={() => goToNextStage("questions")} />
      )}
      
      {currentStage === "questions" && (
        <InteractiveQuestions onComplete={() => goToNextStage("quotes")} />
      )}
      
      {currentStage === "quotes" && (
        <RomanticQuotes onComplete={() => goToNextStage("timeline")} />
      )}
      
      {currentStage === "timeline" && (
        <JourneyTimeline onComplete={() => goToNextStage("reasons")} />
      )}
      
      {currentStage === "reasons" && (
        <ReasonsILoveYou onComplete={() => goToNextStage("suspense")} />
      )}
      
      {currentStage === "suspense" && (
        <SuspensePage onComplete={() => goToNextStage("proposal")} />
      )}
      
      {currentStage === "proposal" && (
        <ProposalPage onAnswer={handleProposalAnswer} />
      )}
      
      {currentStage === "celebration" && (
        <CelebrationPage />
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { Heart, Sparkles, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConfettiEffect from "./ConfettiEffect";
import FloatingHearts from "./FloatingHearts";

interface ProposalPageProps {
  onAnswer: (answer: "yes" | "absolutely") => void;
}

export default function ProposalPage({ onAnswer }: ProposalPageProps) {
  const [showProposal, setShowProposal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const proposalTimer = setTimeout(() => setShowProposal(true), 800);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 2000);

    return () => {
      clearTimeout(proposalTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  const handleAnswer = (answer: "yes" | "absolutely") => {
    setAnswered(true);
    setShowCelebration(true);
    setTimeout(() => {
      onAnswer(answer);
    }, 3000);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush p-6 relative overflow-hidden"
      data-testid="proposal-page"
    >
      <FloatingHearts count={20} />
      
      {showCelebration && <ConfettiEffect active={true} count={100} />}

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-400 animate-float-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,

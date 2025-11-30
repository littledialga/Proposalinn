import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

interface SuspensePageProps {
  onComplete: () => void;
}

const suspenseTexts = [
  "I have something to ask you...",
  "The most important question...",
  "Are you ready?",
];

export default function SuspensePage({ onComplete }: SuspensePageProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [heartCount, setHeartCount] = useState(5);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentTextIndex >= suspenseTexts.length) {
      setTimeout(() => onComplete(), 1500);
      return;
    }

    const currentText = suspenseTexts[currentTextIndex];
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setHeartCount((prev) => Math.min(prev + 5, 25));
          setCurrentTextIndex((prev) => prev + 1);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex, onComplete]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 relative overflow-hidden"
      data-testid="suspense-page"
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <FloatingHearts count={heartCount} />

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-400/30 animate-float-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: Math.random() * 15 + 8,
              height: Math.random() * 15 + 8,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <Heart 
            className="w-16 h-16 text-romantic-pink fill-romantic-pink animate-heart-beat"
            style={{ filter: "drop-shadow(0 0 20px rgba(255, 182, 193, 0.6))" }}
          />
        </div>

        <div className="min-h-[120px] flex items-center justify-center">
          <h1 
            className="text-3xl md:text-5xl font-serif text-white leading-relaxed"
            style={{ 
              textShadow: "0 0 30px rgba(255, 182, 193, 0.5), 0 0 60px rgba(183, 110, 121, 0.3)",
            }}
          >
            {displayedText}
            <span 
              className={`inline-block w-1 h-10 ml-1 bg-romantic-pink align-middle ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.1s" }}
            />
          </h1>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {suspenseTexts.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index < currentTextIndex
                  ? "bg-romantic-pink scale-100"
                  : index === currentTextIndex
                  ? "bg-romantic-pink/70 animate-pulse scale-125"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

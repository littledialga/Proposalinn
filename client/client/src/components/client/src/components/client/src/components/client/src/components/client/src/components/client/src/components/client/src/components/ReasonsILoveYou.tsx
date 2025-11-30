import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReasonsILoveYouProps {
  onComplete: () => void;
}

const reasons = [
  "Your beautiful smile that lights up my world",
  "The way you laugh at my silly jokes",
  "How you make me want to be a better person",
  "Your kindness and compassion for others",
  "The warmth of your embrace",
  "Every adventure we share together",
  "Your strength and determination",
  "The way you know me better than anyone",
  "How you make ordinary moments extraordinary",
  "Simply because you are YOU",
];

export default function ReasonsILoveYou({ onComplete }: ReasonsILoveYouProps) {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
  const [allRevealed, setAllRevealed] = useState(false);

  useEffect(() => {
    const revealReasons = () => {
      reasons.forEach((_, index) => {
        setTimeout(() => {
          setVisibleReasons((prev) => [...prev, index]);
          if (index === reasons.length - 1) {
            setTimeout(() => setAllRevealed(true), 800);
          }
        }, index * 400);
      });
    };

    const startTimer = setTimeout(revealReasons, 500);
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush p-6 relative overflow-hidden"
      data-testid="reasons-i-love-you"
    >
      <div className="max-w-2xl mx-auto text-center z-10">
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-serif text-rose-gold">
              Reasons I Love You
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-rose-gold/60 font-sans">And so many more...</p>
        </div>

        <div className="space-y-4 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                visibleReasons.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-romantic-pink/10">
                <Heart
                  className={`w-5 h-5 flex-shrink-0 ${
                    visibleReasons.includes(index)
                      ? "text-romantic-pink fill-romantic-pink animate-bounce-in"
                      : "text-romantic-pink/30"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
                <p
                  className={`text-lg font-sans text-rose-gold text-left transition-all duration-500 ${
                    visibleReasons.includes(index)
                      ? "animate-glow-text"
                      : ""
                  }`}
                >
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        {allRevealed && (
          <div className="animate-bounce-in">
            <Button
              onClick={onComplete}
              className="bg-gradient-to-r from-romantic-pink to-rose-gold text-white px-8 py-6 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              data-testid="button-continue-reasons"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              There's Something More...
              <Heart className="w-5 h-5 ml-2 fill-current" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

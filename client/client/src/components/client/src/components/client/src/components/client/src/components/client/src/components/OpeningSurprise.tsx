import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OpeningSurpriseProps {
  onComplete: () => void;
}

export default function OpeningSurprise({ onComplete }: OpeningSurpriseProps) {
  const [showBoo, setShowBoo] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const booTimer = setTimeout(() => setShowBoo(true), 500);
    const heartsTimer = setTimeout(() => setShowHearts(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(booTimer);
      clearTimeout(heartsTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const burstingHearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30) * (Math.PI / 180),
    delay: i * 0.1,
    size: Math.random() * 20 + 15,
  }));

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush relative overflow-hidden"
      data-testid="opening-surprise"
    >
      {showHearts && burstingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce-in"
          style={{
            left: `calc(50% + ${Math.cos(heart.angle) * 120}px)`,
            top: `calc(50% + ${Math.sin(heart.angle) * 120}px)`,
            animationDelay: `${heart.delay}s`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Heart
            className="text-romantic-pink fill-romantic-pink"
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}

      <div className="text-center z-10">
        {showBoo && (
          <div className="animate-pop-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-wiggle" />
              <span className="text-6xl md:text-8xl font-script text-rose-gold animate-wiggle">
                BOO!
              </span>
              <Sparkles className="w-8 h-8 text-yellow-400 animate-wiggle" />
            </div>
            <p className="text-2xl md:text-3xl text-rose-gold/80 font-sans mt-4 animate-fade-in-up">
              I have a surprise for you...
            </p>
          </div>
        )}

        {showButton && (
          <div className="mt-12 animate-bounce-in">
            <Button
              onClick={onComplete}
              className="bg-gradient-to-r from-romantic-pink to-rose-gold text-white px-10 py-6 text-xl rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              data-testid="button-start-journey"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Are you ready?
              <Heart className="w-5 h-5 ml-2 fill-current" />
            </Button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-romantic-pink/20 to-transparent" />
    </div>
  );
}

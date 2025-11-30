import { useState, useEffect } from "react";
import { Heart, Sparkles, PartyPopper, Star } from "lucide-react";
import ConfettiEffect from "./ConfettiEffect";
import FloatingHearts from "./FloatingHearts";

export default function CelebrationPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush p-6 relative overflow-hidden"
      data-testid="celebration-page"
    >
      <FloatingHearts count={30} />
      <ConfettiEffect active={true} count={80} />

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-400 animate-float-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: Math.random() * 24 + 12,
              height: Math.random() * 24 + 12,
              filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.9))",
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-yellow-300 fill-yellow-300 animate-float-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: Math.random() * 16 + 8,
              height: Math.random() * 16 + 8,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <PartyPopper className="w-16 h-16 text-yellow-500 animate-wiggle" />
        </div>

        {showMessage && (
          <div className="animate-bounce-in">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-romantic text-rose-gold animate-glow-text mb-6"
              style={{ 
                textShadow: "0 0 40px rgba(183, 110, 121, 0.4), 0 0 80px rgba(255, 182, 193, 0.3)",
              }}
            >
              SHE SAID YES!
            </h1>

            <div className="flex justify-center gap-4 my-8">
              {Array.from({ length: 7 }).map((_, i) => (
                <Heart
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 text-romantic-pink fill-romantic-pink animate-heart-beat"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    filter: "drop-shadow(0 0 10px rgba(255, 182, 193, 0.8))",
                  }}
                />
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-serif text-rose-gold/90 mb-8 animate-fade-in-up">
              The beginning of forever starts now...
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-romantic-pink/20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-xl md:text-2xl font-serif text-rose-gold leading-relaxed">
                Thank you for making me the happiest person in the world. 
                I promise to love you, cherish you, and make you smile 
                every single day for the rest of our lives.
              </p>
              <div className="flex justify-center mt-6">
                <Heart className="w-10 h-10 text-romantic-pink fill-romantic-pink animate-heart-beat" />
              </div>
              <p className="text-2xl font-romantic text-rose-gold mt-4">
                Forever Yours
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <PartyPopper className="w-16 h-16 text-yellow-500 animate-wiggle" style={{ transform: "scaleX(-1)" }} />
        </div>
      </div>
    </div>
  );
}

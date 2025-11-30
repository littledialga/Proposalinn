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

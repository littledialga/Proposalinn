import { useState, useEffect, useCallback } from "react";
import { Heart } from "lucide-react";

interface HeartParticle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

export default function FloatingHearts({ count = 15, className = "" }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  const generateHearts = useCallback(() => {
    const newHearts: HeartParticle[] = [];
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 20 + 12,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }
    setHearts(newHearts);
  }, [count]);

  useEffect(() => {
    generateHearts();
  }, [generateHearts]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      data-testid="floating-hearts-container"
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            animation: `float-up ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
        >
          <Heart
            className="text-romantic-pink fill-romantic-pink"
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
}

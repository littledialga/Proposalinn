import { useState, useEffect } from "react";
import { Sparkles as SparkleIcon } from "lucide-react";

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface SparklesProps {
  count?: number;
  className?: string;
}

export default function Sparkles({ count = 20, className = "" }: SparklesProps) {
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);

  useEffect(() => {
    const newSparkles: SparkleParticle[] = [];
    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 8,
        delay: Math.random() * 3,
      });
    }
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      data-testid="sparkles-container"
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-float-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <SparkleIcon
            className="text-yellow-300"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              filter: "drop-shadow(0 0 4px rgba(255, 215, 0, 0.8))",
            }}
          />
        </div>
      ))}
    </div>
  );
}

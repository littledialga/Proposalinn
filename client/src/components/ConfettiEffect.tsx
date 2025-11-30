import { useState, useEffect } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  shape: "square" | "circle" | "heart";
}

interface ConfettiEffectProps {
  active?: boolean;
  count?: number;
}

const confettiColors = [
  "#FFB6C1",
  "#FFC0CB", 
  "#B76E79",
  "#E6B8A2",
  "#FFD700",
  "#FFF8DC",
  "#FF69B4",
];

export default function ConfettiEffect({ active = true, count = 50 }: ConfettiEffectProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) return;

    const pieces: ConfettiPiece[] = [];
    const shapes: ("square" | "circle" | "heart")[] = ["square", "circle", "heart"];
    
    for (let i = 0; i < count; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
        size: Math.random() * 10 + 6,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setConfetti(pieces);
  }, [active, count]);

  if (!active) return null;

  const renderShape = (piece: ConfettiPiece) => {
    if (piece.shape === "heart") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill={piece.color}

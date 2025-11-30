import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "./FloatingHearts";

interface RomanticQuotesProps {
  onComplete: () => void;
}

const quotes = [
  "Every love story is beautiful, but ours is my favorite.",
  "You are my today and all of my tomorrows.",
  "With you, forever doesn't feel long enough.",
  "In you, I've found the love of my life and my closest, truest friend.",
  "I fell in love with you because of all the little things you don't even realize you do.",
];

export default function RomanticQuotes({ onComplete }: RomanticQuotesProps) {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush p-6 relative overflow-hidden"

import { useState } from "react";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface InteractiveQuestionsProps {
  onComplete: () => void;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Are you ready for a surprise?",
    options: ["Yes, I'm excited!", "More than ready!"],
  },
  {
    id: 2,
    text: "Do you know how much I love you?",
    options: ["To the moon and back?", "More than words can say!"],
  },
  {
    id: 3,
    text: "What makes us perfect together?",
    options: ["Everything!", "Our love story!"],
  },
  {
    id: 4,
    text: "Will you spend forever with me?",
    options: ["Always and forever!", "Every single day!"],
  },
];

export default function InteractiveQuestions({ onComplete }: InteractiveQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showSparkles, setShowSparkles] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowSparkles(true);
    
    setTimeout(() => {
      setShowSparkles(false);
      setSelectedAnswer(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onComplete();
      }
    }, 1500);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush p-6 relative overflow-hidden"
      data-testid="interactive-questions"
    >
      <div className="w-full max-w-md mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          {questions.map((_, index) => (
            <Heart
              key={index}
              className={`w-6 h-6 transition-all duration-500 ${
                index <= currentQuestion
                  ? "text-romantic-pink fill-romantic-pink scale-110"
                  : "text-romantic-pink/30"
              }`}
            />
          ))}
        </div>
        <div className="h-2 bg-romantic-pink/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-romantic-pink to-rose-gold transition-all duration-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-romantic-pink/20">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-10 h-10 text-rose-gold fill-rose-gold animate-heart-beat" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-rose-gold mb-8">
                {questions[currentQuestion].text}
              </h2>
              
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                    className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${
                      selectedAnswer === option
                        ? "bg-gradient-to-r from-romantic-pink to-rose-gold text-white scale-105 shadow-lg"
                        : "bg-romantic-warm text-rose-gold border-2 border-romantic-pink/30 hover:border-romantic-pink hover:bg-romantic-pink/10"
                    }`}
                    data-testid={`button-answer-${index}`}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 20 }).map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-yellow-400 animate-float-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
              }}
            />
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center gap-2 text-rose-gold/60">
        <span className="text-sm font-sans">Question {currentQuestion + 1} of {questions.length}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

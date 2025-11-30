import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
}

interface JourneyTimelineProps {
  onComplete: () => void;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "It all started with a smile...",
    description: "The moment I first saw you, my heart knew something special was about to begin.",
  },
  {
    id: 2,
    title: "You became my world...",
    description: "Every day with you became a new adventure, a new reason to fall in love all over again.",
  },
  {
    id: 3,
    title: "Every moment feels perfect...",
    description: "Whether we're laughing together or just sitting in comfortable silence, I am home.",
  },
  {
    id: 4,
    title: "Our love grows stronger...",
    description: "Through every challenge and joy, our bond has only deepened and flourished.",
  },
  {
    id: 5,
    title: "And now, a new chapter awaits...",
    description: "The best is yet to come, and I want to write every page with you.",
  },
];

export default function JourneyTimeline({ onComplete }: JourneyTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id") || "0");
            setVisibleItems((prev) => {
              if (!prev.includes(id)) {
                return [...prev, id];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = containerRef.current?.querySelectorAll("[data-id]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-romantic-warm via-romantic-cream to-romantic-blush py-16 px-6 relative overflow-hidden"
      ref={containerRef}
      data-testid="journey-timeline"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-rose-gold mb-4 animate-fade-in-up">
            Our Journey Together
          </h1>
          <div className="flex justify-center">
            <Heart className="w-8 h-8 text-romantic-pink fill-romantic-pink animate-heart-beat" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-romantic-pink via-rose-gold to-romantic-pink transform -translate-x-1/2" />

          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`relative mb-16 transition-all duration-700 ${
                visibleItems.includes(item.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Heart
                  className={`w-6 h-6 ${
                    visibleItems.includes(item.id)
                      ? "text-rose-gold fill-rose-gold animate-bounce-in"
                      : "text-romantic-pink/40"
                  }`}
                />
              </div>

              <div
                className={`${
                  index % 2 === 0
                    ? "ml-auto pl-10 md:pl-0 md:mr-[55%] md:pr-12 text-right"
                    : "mr-auto pr-10 md:pr-0 md:ml-[55%] md:pl-12 text-left"
                }`}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-romantic-pink/10">
                  <h3 className="text-xl md:text-2xl font-serif text-rose-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-rose-gold/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={onComplete}
            className="bg-gradient-to-r from-romantic-pink to-rose-gold text-white px-8 py-6 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-testid="button-continue-timeline"
          >
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Continue
            <Heart className="w-5 h-5 ml-2 fill-current" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/02/15/audio_7e58e6e5dc.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction");
      });
    }
    setIsPlaying(!isPlaying);
    setShowPrompt(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="music-player">
      {showPrompt && !isPlaying && (
        <div className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-bounce-in whitespace-nowrap">
          <p className="text-sm text-rose-gold flex items-center gap-2">
            <Music className="w-4 h-4" />
            Click for romantic music
          </p>
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white/90 transform rotate-45" />
        </div>
      )}
      
      <Button
        onClick={toggleMusic}
        variant="ghost"
        size="icon"
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isPlaying 
            ? "bg-gradient-to-r from-romantic-pink to-rose-gold text-white animate-pulse-glow" 
            : "bg-white/80 text-rose-gold hover:bg-romantic-pink/20"
        }`}
        data-testid="button-toggle-music"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}

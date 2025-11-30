import MusicPlayer from "../MusicPlayer";

export default function MusicPlayerExample() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-romantic-warm to-romantic-cream rounded-lg flex items-center justify-center">
      <p className="text-rose-gold font-serif">Music player in bottom right corner</p>
      <MusicPlayer />
    </div>
  );
}

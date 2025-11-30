import Sparkles from "../Sparkles";

export default function SparklesExample() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-rose-gold/20 to-romantic-pink/30 overflow-hidden rounded-lg">
      <Sparkles count={15} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-rose-gold font-serif text-xl">Magical sparkles everywhere...</p>
      </div>
    </div>
  );
}

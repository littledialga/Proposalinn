import FloatingHearts from "../FloatingHearts";

export default function FloatingHeartsExample() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-romantic-warm to-romantic-cream overflow-hidden rounded-lg">
      <FloatingHearts count={10} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-rose-gold font-serif text-xl">Watch the hearts float up...</p>
      </div>
    </div>
  );
}

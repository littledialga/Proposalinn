import ConfettiEffect from "../ConfettiEffect";

export default function ConfettiEffectExample() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-romantic-warm to-romantic-cream overflow-hidden rounded-lg">
      <ConfettiEffect active={true} count={30} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-rose-gold font-serif text-xl">Celebration time!</p>
      </div>
    </div>
  );
}

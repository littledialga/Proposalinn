import OpeningSurprise from "../OpeningSurprise";

export default function OpeningSurpriseExample() {
  return (
    <div className="w-full h-[500px] overflow-hidden rounded-lg">
      <OpeningSurprise onComplete={() => console.log("Journey started!")} />
    </div>
  );
}

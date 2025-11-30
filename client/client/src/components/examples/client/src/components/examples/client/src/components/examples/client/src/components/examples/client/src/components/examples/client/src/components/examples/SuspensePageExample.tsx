import SuspensePage from "../SuspensePage";

export default function SuspensePageExample() {
  return (
    <div className="w-full h-[500px] overflow-hidden rounded-lg">
      <SuspensePage onComplete={() => console.log("Suspense completed!")} />
    </div>
  );
}

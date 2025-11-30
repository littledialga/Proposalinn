import JourneyTimeline from "../JourneyTimeline";

export default function JourneyTimelineExample() {
  return (
    <div className="w-full h-[700px] overflow-auto rounded-lg">
      <JourneyTimeline onComplete={() => console.log("Timeline completed!")} />
    </div>
  );
}

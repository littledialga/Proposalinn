import ReasonsILoveYou from "../ReasonsILoveYou";

export default function ReasonsILoveYouExample() {
  return (
    <div className="w-full h-[700px] overflow-auto rounded-lg">
      <ReasonsILoveYou onComplete={() => console.log("Reasons section completed!")} />
    </div>
  );
}

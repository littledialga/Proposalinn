import RomanticQuotes from "../RomanticQuotes";

export default function RomanticQuotesExample() {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-lg">
      <RomanticQuotes onComplete={() => console.log("Quotes section completed!")} />
    </div>
  );
}

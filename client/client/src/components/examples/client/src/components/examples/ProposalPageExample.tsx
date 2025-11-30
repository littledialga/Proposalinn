import ProposalPage from "../ProposalPage";

export default function ProposalPageExample() {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-lg">
      <ProposalPage onAnswer={(answer) => console.log(`Answer: ${answer}!`)} />
    </div>
  );
}

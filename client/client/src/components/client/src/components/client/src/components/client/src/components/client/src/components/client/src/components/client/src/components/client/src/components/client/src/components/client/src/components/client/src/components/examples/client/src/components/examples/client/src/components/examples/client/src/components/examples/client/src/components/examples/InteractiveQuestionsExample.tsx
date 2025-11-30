import InteractiveQuestions from "../InteractiveQuestions";

export default function InteractiveQuestionsExample() {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-lg">
      <InteractiveQuestions onComplete={() => console.log("Questions completed!")} />
    </div>
  );
}

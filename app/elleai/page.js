import Evaluate from "@/components/Evaluate";
import ElleAICriteria from "@/components/ElleAICriteria";
import ElleAIHowItWorks from "@/components/ElleAIHowItWorks";

export const metadata = {
  title: "ElleAI: Submit Your Pitch Deck",
  description:
    "Upload your pitch deck for a fast, structured AI evaluation on Market Potential, Social Sentiment and Inclusive Impact.",
};

export default function ElleAIPage() {
  return (
    <>
      <Evaluate />
      <ElleAICriteria />
      <ElleAIHowItWorks />
    </>
  );
}

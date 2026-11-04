import TitleBlock from "@/components/TitleBlock";
import Opportunity from "@/components/Opportunity";
import Cards from "@/components/Cards";
import EvaluateCTA from "@/components/EvaluateCTA";
import Roadmap from "@/components/Roadmap";
import GetInvolved from "@/components/GetInvolved";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <TitleBlock />
      <Opportunity />
      <Cards />
      <EvaluateCTA />
      <Roadmap />
      <GetInvolved />
      <FAQ />
    </>
  );
}

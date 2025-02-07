"use client";
import { Carousel, Card } from "../../components/homepage/ui/apple-cards-carousel";
import smt_small from "../../assets/images/projects/Smart Extract/Smt_small.png";
import Glove from "../../assets/images/homepage/Glove.jpg"
import M_Translate from "../../assets/images/homepage/M translate.jpg"
import DummyContent from "./Projects/DummyContent";
import Forkliftcard from "./Projects/Forklift"
import Forklift from "../../assets/images/homepage/Forklift1.png"
import DrawingComparison from "./Projects/DrawingComparison";
import InvoiceInformationRetrieval from "./Projects/InvoiceInformationRetrieval";
import MNA from "./Projects/M&A";
import FinancialBot from "./Projects/FinancialBot";
import ClauseLens from "../../assets/images/projects/MNA/ClauseLens_Small.jpg"
import Fin_small from "../../assets/images/projects/Finallytics/Fin_small.png"
import CrimpCrossSection from "./Projects/CrimpCrossSection";
import quali from "../../assets/images/projects/CrimpCrossSection/crimp_small.png"


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full pt-8 pb-20 bg-black flex flex-col items-center text-center">
  <h2 className="text-xl md:text-5xl font-poppins font-light text-white">
    Motherson Cognitive Agents
  </h2>
  <Carousel items={cards} />
</div>

  );
}


const data = [
  {
    category: "",
    title: "Extract Edge",
    src: smt_small, // Direct reference to imported image
    content: <InvoiceInformationRetrieval />,
  },
  {
    category: "",
    title: "Fintech Frontier",
    src: Fin_small, // Direct reference to imported image
    content: <FinancialBot/>,
  },
  {
    category: "",
    title: "Legal Lens",
    src: ClauseLens, // Direct reference to imported image
    content: <MNA />,
  },
  {
    category: "",
    title: "Sketch Sense",
    src: Glove, // Direct reference to imported image
    content: <DrawingComparison/>,
  },
  {
    category: "",
    title: "Translate Titan",
    src: M_Translate, // Direct reference to imported image
    content: <DummyContent />,
  },
  {
    category: "",
    title: "QualiSure",
    src: quali, // Direct reference to imported image
    content: <CrimpCrossSection/>
  },
  {
    category: "",
    title: "Forklift",
    src: Forklift, // Direct reference to imported image
    content: <Forkliftcard/>
  },
];

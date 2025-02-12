"use client";
import { Carousel, Card } from "../../components/homepage/ui/apple-cards-carousel";
import smt_small from "../../assets/images/projects/Smart Extract/Smt_small.png";
import DrawingComparison from "./Projects/DrawingComparison";
import InvoiceInformationRetrieval from "./Projects/InvoiceInformationRetrieval";
import MNA from "./Projects/M&A";
//import FinancialBot from "./Projects/FinancialBot";
import ClauseLens from "../../assets/images/projects/MNA/ClauseLens_Small.png"
//import Fin_small from "../../assets/images/projects/Finallytics/Fin_small.png"
import CrimpCrossSection from "./Projects/CrimpCrossSection";
import quali from "../../assets/images/projects/CrimpCrossSection/crimp_small.png"
import GloveDetection from "./Projects/GloveDetection";
import DS from "./Projects/DataScience";
import Dwg from "../../assets/images/projects/DrawingComparison/Dwg_sm.png"
import Glove from "../../assets/images/projects/Glove Detection/Glove_sm.png"
import Raw from "../../assets/images/projects/Raw Material/Raw_sm.png"
//import Forkliftcard from "./Projects/Forklift"
// import M_Translate from "../../assets/images/homepage/M translate.jpg"
// import DummyContent from "./Projects/DummyContent";
//import Glove from "../../assets/images/homepage/Glove.jpg"
// import Forklift from "../../assets/images/homepage/Forklift1.png"


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full pt-8 pb-20 bg-black flex flex-col items-center text-center">
  <h2 className="text-xl md:text-5xl font-poppins font-light text-white">
    Motherson Intelligence
  </h2>
  <Carousel items={cards} />
</div>

  );
}


const data = [
  {
    category: "",
    title: "SketchSense",
    src: Dwg, // Direct reference to imported image
    content: <DrawingComparison/>,
  },
  {
    category: "",
    title: "QualiSure",
    src: quali, // Direct reference to imported image
    content: <CrimpCrossSection/>
  },
  {
    category: "",
    title: "GloveGuardian",
    src: Glove, // Direct reference to imported image
    content: <GloveDetection/>
  },
  {
    category: "",
    title: "ProfitPulse",
    src: Raw, // Direct reference to imported image
    content: <DS/>
  },
  {
    category: "",
    title: "ExtractEdge",
    src: smt_small, // Direct reference to imported image
    content: <InvoiceInformationRetrieval />,
  },
  {
    category: "",
    title: "LegalLens",
    src: ClauseLens, // Direct reference to imported image
    content: <MNA />,
  },
  // {
  //   category: "",
  //   title: "BudgetBeacon",
  //   src: Fin_small, // Direct reference to imported image
  //   content: <FinancialBot/>,
  // },
  // {
  //   category: "",
  //   title: "Translate Titan",
  //   src: M_Translate, // Direct reference to imported image
  //   content: <DummyContent />,
  // },
];

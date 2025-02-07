import Lottie from "lottie-react";
import animationData from "../../../assets/animations/financial-animation.json"; // Update path to your Lottie JSON file

const FinancialBot = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-center">
      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 mx-auto ">
        <Lottie animationData={animationData} loop autoplay />
      </div>

      {/* Description */}
      <p className="text-neutral-600 font-poppins text-base md:text-lg max-w-3xl mx-auto mb-6">
        An advanced GenAI-driven solution tailored for in-depth financial analysis, enabling data-driven decision-making with enhanced accuracy and efficiency.
      </p>

      {/* Button */}
      <button
        onClick={() => window.open("http://10.245.146.250:8790/", "_blank")}
        className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 transition-all"
      >
        Visit FinAIlytics
      </button>
    </div>
  );
};

export default FinancialBot;

import Lottie from "lottie-react";
import animationData from "../../../assets/animations/clause-animation.json"; // Update path to your Lottie JSON file

const MNA = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-center">
      {/* Lottie Animation */}
      <div className="w-full md:w-1/3 mx-auto">
        <Lottie animationData={animationData} loop autoplay />
      </div>

      {/* Description */}
      <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
        A cutting-edge GenAI-powered platform designed for comprehensive legal contract analysis, ensuring precision, compliance, and actionable insights.
      </p>

      {/* Button */}
      <button
        onClick={() => window.open("http://10.245.146.250:8789/", "_blank")}
        className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 transition-all"
      >
        Visit ClauseLens AI
      </button>
    </div>
  );
};

export default MNA;

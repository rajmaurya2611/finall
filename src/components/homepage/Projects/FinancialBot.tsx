import Lottie from "lottie-react";
import animationData from "../../../assets/animations/financial-animation.json"; 
import Button from "../Button"; // Update path to your Lottie JSON file

const  FinancialBot = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-left">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        AI-Powered Financial Analysis – Finance Bot
      </h2>

      {/* Purpose */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Purpose</h3>
      <p className="text-neutral-800 text-base md:text-lg max-w-6xl mb-6">
        Financial teams often struggle to efficiently extract and analyze detailed financial insights from large datasets, requiring complex manual processes or SQL knowledge. 
        Our AI-powered Finance Bot leverages natural language processing (NLP) to enable users to input simple queries, automatically generating SQL to fetch relevant financial data. 
        This provides a seamless experience for non-technical users.
      </p>

      {/* Expected Benefits */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Benefits</h3>
      <ul className="text-neutral-700 text-lg text-left max-w-6xl space-y-2">
        <li><strong>Time Efficiency:</strong> Faster financial data analysis.</li>
        <li><strong>Accuracy:</strong> Precise insights with minimal errors.</li>
        <li><strong>Cost Savings:</strong> Reduced manual effort and errors.</li>
        <li><strong>Informed Decision-Making:</strong> Data-driven insights for better decisions.</li>
        <li><strong>User Accessibility:</strong> Easy for non-technical users.</li>
      </ul>

      {/* Key Use Cases */}
      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Key Use Cases</h3>
      <ul className="text-neutral-800 text-lg text-left max-w-6xl space-y-2">
        <li><strong>Monthly and YTD Comparison:</strong> Compare monthly and year-to-date data.</li>
        <li><strong>Budget vs Actual Analysis:</strong> Analyze budget versus actual performance.</li>
        <li><strong>Category Breakdown:</strong> Break down financial categories for insights.</li>
        <li><strong>Spending Optimization:</strong> Identify opportunities to reduce spending.</li>
        <li><strong>Custom Reporting:</strong> Generate tailored financial reports.</li>
      </ul>

      {/* Button */}
      <div className="flex justify-center items-center mt-6">
        <Button text="Visit Finance Bot" link="http://10.245.146.250:8790/" />
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-1/3 mx-auto mt-20">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default  FinancialBot;


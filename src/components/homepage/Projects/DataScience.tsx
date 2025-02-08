import Lottie from "lottie-react";
import animationData from "../../../assets/animations/raw-animation.json"; 
import Button from "../Button"; // Update path to your Lottie JSON file

const DS = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-left">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Raw Material Consumption - Analyzing Opportunity Loss for SMP Germany's Finished Goods
      </h2>

      {/* Description */}
      <p className="text-neutral-800 text-base md:text-lg max-w-6xl mb-6">
        The Raw Material Consumption project is designed to track and analyze the opportunity loss for SMP Germany's finished goods. By comparing the invoice rate of items sold to customers against their actual manufacturing cost, the project provides insights into profitability at customer, finished goods family, and part levels. This enables data-driven decision-making to optimize pricing, cost structures, and revenue generation strategies.
      </p>

      {/* Expected Benefits */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Benefits</h3>
      <ul className="text-neutral-800 text-lg text-left max-w-6xl space-y-2">
        <li><strong>Profitability Insights:</strong> Identify products or customer segments contributing to opportunity loss and optimize pricing strategies accordingly.</li>
        <li><strong>Cost Optimization:</strong> Detect high-cost raw materials or production inefficiencies impacting opportunity loss and help improve cost management.</li>
        <li><strong>Performance Tracking:</strong> Track financial performance at customer, finished goods family, and part levels, and assess the effectiveness of sales strategies.</li>
      </ul>

      {/* Key Use Cases */}
      <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Key Use Cases</h3>
      <ul className="text-neutral-800 text-lg text-left max-w-6xl space-y-2">
        <li><strong>Identifying Loss-Making Products or Customers:</strong> Detect items consistently sold at a loss and assess customer-specific pricing to prevent margin erosion.</li>
        <li><strong>Monitoring Revenue Trends:</strong> Track total invoice value over different periods and evaluate how price fluctuations impact revenue generation.</li>
        <li><strong>Optimizing Pricing Strategy:</strong> Compare invoice rates to actual manufacturing costs to adjust pricing policies and implement dynamic pricing based on cost trends and market conditions.</li>
        <li><strong>Customer & Sales Performance Analysis:</strong> Assess which customers contribute the most to opportunity loss and fine-tune sales strategies to maximize profitability.</li>
      </ul>

      {/* Button */}
      <div className="flex justify-center items-center mt-6">
        <Button text="Visit Raw Material Consumption" link="https://analytics.ai.motherson.com/dashboard" />
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-1/3 mx-auto mt-12">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default DS;

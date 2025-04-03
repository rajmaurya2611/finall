import Button from "../Button";

const DS = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-left">

      {/* Button */}
      <div className="flex justify-center items-center mb-6">
        <Button text="Visit ProfitPulse" link="http://10.245.146.250:8795/" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Profit Pulse Dashboard
      </h2>

      {/* Description */}
      <p className="text-neutral-800 text-base md:text-lg max-w-6xl mb-6">
        Our Prototype Profit Pulse Dashboard is designed to provide key insights into financial efficiency, helping businesses make data-driven decisions. This dashboard presents a structured analysis of critical performance indicators across various dimensions such as plants, customers, programs, FG (Finished Goods) family, and parts.
      </p>

      {/* Features */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Features</h3>
      <ul className="text-neutral-800 text-lg text-left max-w-6xl space-y-2">
        <li><strong>Holistic Financial Analysis:</strong> Enables businesses to track revenue, raw material percentage, contribution amount, and benchmark gap effectively.</li>
        <li><strong>Operational Efficiency Insights:</strong> Identifies cost drivers across raw materials, labor, and overhead, assisting in cost control.</li>
        <li><strong>Benchmarking & Performance Tracking:</strong> Enables users to choose their benchmark percentage and highlights gaps between contribution amount and benchmark gap for strategic adjustments.</li>
        <li><strong>Multi-Dimensional Drill-Downs:</strong> Provides granular insights by plant, customer, program, FG family, and part, allowing targeted decision-making.</li>
        <li><strong>Data-Driven Decision Making:</strong> Supports leadership in identifying cost-saving opportunities and optimizing profitability.</li>
      </ul>

      {/* Optional: Lottie Animation Placeholder (if you want to re-enable later) */}
      {/* <div className="w-full md:w-1/3 mx-auto mt-12">
        <Lottie animationData={animationData} loop autoplay />
      </div> */}
    </div>
  );
};

export default DS;

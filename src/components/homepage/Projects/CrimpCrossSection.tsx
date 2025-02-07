import DwgIn from "../../../../src/assets/images/homepage/DwgIn.jpg"

const CrimpCrossSection = () => {
    return (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-center">
        {/* Image */}
        <img
          src= {DwgIn} // Replace with your actual image URL
          alt="Drawing Comparison"
          className="w-full md:w-1/2 h-auto mx-auto object-contain mb-6"
        />
  
        {/* Description */}
        <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
        QualiSure is an AI-powered defect detection system designed for precise crimp cross-section analysis. It automates quality inspection, identifies defects in crimped connections, and ensures reliable electrical performance with high accuracy
        </p>
  
        {/* Button */}
        <button
    onClick={() => window.open("http://10.245.146.250:5004/", "_blank")}
    className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 transition-all"
  >
    Visit QualiSure
  </button>
      </div>
    );
  };

  export default CrimpCrossSection;
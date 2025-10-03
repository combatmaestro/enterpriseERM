import React from "react";

const CompanySection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-white via-white to-[#02C2EC]/10 mx-auto">
      <div className="text-center text-textPrimary md:text-3xl text-2xl font-bold mb-6">
        More than 25,000 teams use
      </div>
      <div className="flex justify-center flex-wrap md:gap-10 gap-5 text-gray-500 text-lg">
        <img src="Group 141.svg" alt="Unsplash" width={120} height={120}/>
        <img src="Group 142.svg" alt="Unsplash" width={120} height={120}/>
        <img src="Group 144.svg" alt="Unsplash" width={120} height={120}/>
        <img src="Group 145.svg" alt="Unsplash" width={120} height={120}/>
        <img src="Group 146.svg" alt="Unsplash" width={120} height={120}/>

      </div>
    </section>
  );
};

export default CompanySection;

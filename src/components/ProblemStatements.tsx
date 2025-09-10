import React from "react";
import Image from "next/image";

const ProblemStatements: React.FC = () => {
  const problemStatements = [
    {
      title: "Sustainable Energy Solutions",
      description: "Innovate in renewable energy technologies, energy storage, and smart grid solutions to accelerate the transition to clean energy.",
      theme: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Climate Smart Agriculture",
      description: "Develop technologies for precision farming, crop monitoring, and sustainable food production to combat food insecurity.",
      theme: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      title: "Circular Economy",
      description: "Create solutions for waste reduction, recycling automation, and sustainable product lifecycle management.",
      theme: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      title: "Smart Cities & Infrastructure",
      description: "Design intelligent urban solutions for energy efficiency, waste management, and sustainable transportation.",
      theme: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Biodiversity & Conservation",
      description: "Develop tools for wildlife protection, habitat restoration, and ecosystem monitoring using technology.",
      theme: "bg-gradient-to-br from-teal-500 to-cyan-600"
    },
    {
      title: "Water Resource Management",
      description: "Innovate in water conservation, purification, and distribution systems for sustainable water use.",
      theme: "bg-gradient-to-br from-sky-500 to-blue-600"
    },
    {
      title: "Financial Inclusion",
      description:
        "Developing fintech solutions to provide banking and financial services to underserved communities around the globe.",
      imageUrl: "https://via.placeholder.com/300x200/9C27B0/white?text=FinTech",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            Problem Tracks
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[80vh] overflow-hidden">
          {problemStatements.map((problem, index) => (
            <div
              key={index}
              className={`${problem.theme} rounded-2xl p-0.5 backdrop-blur-sm`}
            >
              <div className="h-full bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col">
                {problem.imageUrl && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={problem.imageUrl}
                      alt={problem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-slate-300 flex-grow mb-4">{problem.description}</p>
                <button className="mt-auto w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-300 border border-white/20">
                  Download Problem Statement
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;

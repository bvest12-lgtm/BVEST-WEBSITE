import React from "react";

interface ProblemStatementCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProblemStatementCard: React.FC<ProblemStatementCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div
      className=" rounded-lg  p-6 flex-shrink-0 w-80 mx-4"
      style={{
        boxShadow: "inset 0 0 40px rgba(56, 189, 248, 0.4)",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-3 ">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Devfolio →
      </a>
    </div>
  );
};

const ProblemStatements: React.FC = () => {
  const problemStatements = [
    {
      title: "Climate Change Solutions",
      description:
        "Developing innovative technologies to reduce carbon emissions and create sustainable energy solutions for a greener future.",
      imageUrl:
        "https://via.placeholder.com/300x200/4CAF50/white?text=Climate+Tech",
      link: "#climate-solutions",
    },
    {
      title: "Healthcare Accessibility",
      description:
        "Creating affordable and accessible healthcare solutions using technology to bridge the gap in medical services worldwide.",
      imageUrl:
        "https://via.placeholder.com/300x200/2196F3/white?text=Healthcare",
      link: "#healthcare-access",
    },
    {
      title: "Education Technology",
      description:
        "Building platforms and tools that make quality education accessible to everyone, regardless of geographical or economic barriers.",
      imageUrl: "https://via.placeholder.com/300x200/FF9800/white?text=EdTech",
      link: "#education-tech",
    },
    {
      title: "Financial Inclusion",
      description:
        "Developing fintech solutions to provide banking and financial services to underserved communities around the globe.",
      imageUrl: "https://via.placeholder.com/300x200/9C27B0/white?text=FinTech",
      link: "#financial-inclusion",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  mb-4">Problem Statements</h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Explore the challenges we're addressing through innovative solutions
            and cutting-edge technology
          </p>
        </div>

        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory">
          <div className="flex space-x-6 px-4 snap-center ">
            {problemStatements.map((problem, index) => (
              <ProblemStatementCard
                key={index}
                title={problem.title}
                description={problem.description}
                imageUrl={problem.imageUrl}
                link={problem.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;

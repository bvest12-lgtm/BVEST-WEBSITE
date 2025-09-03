import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const TimelineItem = ({
  title,
  date,
  description,
  isLeft,
}: {
  title: string;
  date: string;
  description: string;
  isLeft: boolean;
}) => {
  return (
    <div
      className={`flex items-center w-full ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
      >
        <div
          className=" p-4 rounded-lg shadow-md"
          style={{
            boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)",
          }}
        >
          <h3 className={`${inter.className} text-xl font-semibold mb-2`}>
            {title}
          </h3>
          <p className={`${inter.className} text-sm  mb-2`}>{date}</p>
          <p className={`${inter.className} `}>{description}</p>
        </div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md z-10"></div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      title: "Project Started",
      date: "January 2024",
      description:
        "Initial planning and research phase began for the new product development.",
    },
    {
      title: "First Milestone",
      date: "March 2024",
      description:
        "Completed user research and finalized the product requirements document.",
    },
    {
      title: "Development Phase",
      date: "May 2024",
      description:
        "Started the development process with the core team of engineers.",
    },
    {
      title: "Beta Testing",
      date: "August 2024",
      description:
        "Launched beta version to a select group of users for feedback.",
    },
    {
      title: "Product Launch",
      date: "December 2024",
      description: "Successfully launched the product to the public market.",
    },
  ];

  return (
    <div
      id="timeline"
      className={`flex min-h-screen justify-center pt-30 mb-20 `}
    >
      <div className="max-w-4xl w-full px-4">
        <h2
          className={`${inter.className} text-5xl text-center mb-12 font-mono bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent `}
        >
          Timeline
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[105%] w-0.5 bg-gray-300"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

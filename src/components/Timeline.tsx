import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Timeline = () => {
  return (
    <div id="timeline" className="flex min-h-[50vh] justify-center items-center py-20">
      <div className="max-w-4xl w-full px-4 text-center">
        <h2 className={`${inter.className} text-5xl mb-8 font-mono bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent`}>
          Timeline
        </h2>
        <div className="relative">
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-teal-900/30 backdrop-blur-sm border border-blue-500/20 shadow-lg">
            <p className={`${inter.className} text-2xl md:text-3xl font-medium text-white`}>
              Timeline Coming Soon
            </p>
            <p className="mt-2 text-blue-200">
              We&apos;re working on something amazing. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

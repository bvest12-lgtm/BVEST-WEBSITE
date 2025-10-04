import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Timeline = () => {
  return (
    <div id="timeline" className="flex flex-col items-center justify-center py-20">
      <h2 className={`${inter.className} text-5xl mb-12 font-mono bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent`}>
        Timeline
      </h2>
      <div className="w-full max-w-4xl px-4">
        <div className="relative w-full h-auto rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl">
          <Image
            src="/EcoCode_Timeline.png"
            alt="EcoCode Event Timeline"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

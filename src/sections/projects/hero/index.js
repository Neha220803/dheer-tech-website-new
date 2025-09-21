import { Button } from "@/components/ui/button";
import React from "react";

const ProjectsHeroComp = () => {
  return (
    <section className="flex flex-col items-center justify-center md:justify-start text-white bg-gradient-to-br from-gray-800 to-blue-100 px-4 md:py-12">
      <BackgroundElements />
      <div className="flex justify-center items-center flex-col text-center space-y-4 md:pt-25">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold w-full sm:w-3/5 md:w-2/4 leading-tight">
          Crafting Digital Solutions That Drive Growth
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg w-full sm:w-4/5 md:w-2/5">
          Explore our portfolio of innovative projects where strategy meets
          creativity, showcasing impactful designs, cutting-edge technology, and
          measurable results for global clients.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-4 justify-center items-center">
          <Button className="w-full sm:w-auto">Get Started</Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroComp;

const BackgroundElements = () => {
  return (
    <div className="bg-primary">
      <div
        className="absolute top-[25%] md:bottom-70 right-[10%] w-25 h-25 lg:w-30 lg:h-30"
        style={{
          backgroundImage: 'url("/assets/icons/projects/handshake.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute top-[13%] md:top-[35%] left-[15%] w-20 h-20 lg:w-30 lg:h-30"
        style={{
          backgroundImage: 'url("/assets/icons/projects/bolt-gold.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute bottom-[10%] right-[8%] md:right-[25%] w-20 h-20 lg:w-30 lg:h-30"
        style={{
          backgroundImage: 'url("/assets/icons/projects/secure-lock.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute bottom-[10%] left-[8%] md:left-[25%] w-20 h-20 lg:w-30 lg:h-30"
        style={{
          backgroundImage: 'url("/assets/icons/projects/charts.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute bottom-[18%] left-[40%] md:left-[47%] w-20 h-20 lg:w-30 lg:h-30"
        style={{
          backgroundImage: 'url("/assets/icons/projects/bulb.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Simple geometric shapes using Lucide React icons */}
      {/* <div className="absolute top-32 right-1/4 text-primary-light ">
        <Circle size={24} />
      </div>
      <div className="absolute top-38 right-[24%] text-primary ">
        <Hexagon size={15} />
      </div>

      <div className="absolute bottom-1/3 left-[45%] text-primary opacity-60">
        <Square size={16} />
      </div>

      <div className="absolute top-3/4 right-1/2 text-white">
        <Triangle size={20} />
      </div>

      <div className="absolute bottom-1/2 left-[65%] text-primary ">
        <Star size={18} />
      </div>

      <div className="absolute top-2/3 left-[80%] text-primary-accent">
        <Hexagon size={14} />
      </div> */}
    </div>
  );
};

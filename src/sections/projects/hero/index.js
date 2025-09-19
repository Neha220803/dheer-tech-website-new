import { Button } from "@/components/ui/button";
import React from "react";

const ProjectsHeroComp = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-primary to-primary/5 px-4 py-12">
      <div className="flex justify-center items-center flex-col text-center space-y-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold w-full sm:w-4/5 md:w-3/5 leading-tight">
          Crafting Digital Solutions That Drive Growth
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg w-full sm:w-4/5 md:w-3/5">
          Explore our portfolio of innovative projects where strategy meets
          creativity, showcasing impactful designs, cutting-edge technology,
          and measurable results for global clients.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-center">
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

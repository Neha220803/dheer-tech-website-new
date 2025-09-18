import { Button } from "@/components/ui/button";
import React from "react";

const ProjectsHeroComp = () => {
  return (
    <section className="flex flex-col items-center text-6xl my-10">
      <div className="w-1/2 text-center space-y-4">
        <h1>Crafting Digital Solutions That Drive Growth</h1>
        <p>
          Explore our portfolio of innovative projects where strategy meets
          creativity, showcasing impactful designs, cutting-edge technology, and
          measurable results for global clients.
        </p>
      </div>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant={"secondary"}>Learn More</Button>
      </div>
    </section>
  );
};

export default ProjectsHeroComp;

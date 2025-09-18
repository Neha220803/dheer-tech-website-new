import { Button } from "@/components/ui/button";
import React from "react";

const ProjectsHeroComp = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white text-6xl bg-gradient-to-br from-primary to-primary/5">
      <div className="flex justify-center items-center flex-col text-center space-y-4">
        <h1 className="w-3/5">Crafting Digital Solutions That Drive Growth</h1>
        <p className="w-3/5">
          Explore our portfolio of innovative projects where strategy meets
          creativity, showcasing impactful designs, cutting-edge technology, and
          measurable results for global clients.
        </p>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant={"secondary"}>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroComp;

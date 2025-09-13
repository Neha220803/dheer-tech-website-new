import AboutHeroComp from "@/components/about/hero";
import AboutOurApproachComp from "@/components/about/our-approach";
import AboutTeamStoryComp from "@/components/about/team-story";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroComp />
      <AboutTeamStoryComp />
      <AboutOurApproachComp />
    </div>
  );
};

export default AboutPage;

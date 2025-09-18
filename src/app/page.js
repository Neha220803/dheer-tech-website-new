import HomeAboutComp from "@/components/home/about";
import { HomeHeroComp } from "@/components/home/hero";
import HomeCTAComp from "@/components/home/homeCTA";
import { OurServiceComp } from "@/components/home/our-services";
import HorizontalScrollProjectComp from "@/components/home/projects";
import HomeStatsComp from "@/components/home/stats";
import HomeTestimonialComp from "@/components/home/testimonial";
import HomeTimelineComp2 from "@/components/home/timeline/index2";

export default function Home() {
  return (
    <div>
      <HomeHeroComp />
      <HomeAboutComp />
      <HomeStatsComp />
      <OurServiceComp />
      <HorizontalScrollProjectComp />
      <HomeTestimonialComp />
      <HomeTimelineComp2 />
      <HomeCTAComp />
    </div>
  );
}

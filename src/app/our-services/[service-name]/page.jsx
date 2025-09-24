import OurServicesCTAComp from "@/components/our-services/cta/our-service-cta";
import ResuabeHeroComp from "@/components/our-services/hero";
import ReusableTimelineComp from "@/components/our-services/how-it-works/ResuableTimelineComp";
import ReusableWhyComponent from "@/components/our-services/why-us-comp/ReusableWhyUsComp";
import { ourServicesData } from "@/data/services-data";
import { notFound } from "next/navigation";
import React from "react";

const IndividualServicesPage = async ({ params }) => {
  // Await params before accessing properties
  const resolvedParams = await params;
  const serviceName = resolvedParams["service-name"];

  // Get the service data based on the service name
  const serviceData = ourServicesData[serviceName];

  // If service doesn't exist, show 404
  if (!serviceData) {
    notFound();
  }

  // Extract hero and timeline data
  const heroData = serviceData.hero;
  const timelineData = serviceData.timeline;

  return (
    <div>
      <div>
        <ResuabeHeroComp
          title1={heroData.title1}
          title2={heroData.title2}
          description={heroData.description}
          item1={heroData.item1}
          item2={heroData.item2}
          searchBartext={heroData.searchBartext}
        />
      </div>
      <div>
        <ReusableTimelineComp
          title={timelineData.title}
          subtitle={timelineData.subtitle}
          steps={timelineData.steps}
        />
      </div>
      <div>
        <ReusableWhyComponent />
      </div>
      <div>
        <OurServicesCTAComp />
      </div>
    </div>
  );
};

export default IndividualServicesPage;

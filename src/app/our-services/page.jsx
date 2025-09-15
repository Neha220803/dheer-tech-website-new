import React from "react";
import { Button } from "@/components/ui/button";
import "./styles.css";
import ContactPopUpForm from "@/components/pop-up-form/ContactPopUpForm";
const softbg = "/assets/images/services/software-bg.png";
const custCyberImg = "/assets/images/services/cyber-sec-bg.png";
const ecommImg = "/assets/images/services/e-comm.png";
const custWebBg = "/assets/images/services/cust-web-bg.png";
const AiImg = "/public/assets/images/services/ai-bg.png";

const ServicesPage = () => {
  return (
    <>
      <section className="flex items-center bg-primar ">
        <div className="md:max-w-7xl h-full bg-secondar py-10 md:px-6 mx-auto w-full">
          <div className="text-center mb-4">
            <h1>Our Services</h1>
            <p>Tailored solution designed for your business growth</p>
          </div>
          <div className="grid grid-cols-12 gap-2 md:gap-4 h-full w-full">
            {/* First column */}
            <div className="md:col-span-6 col-span-12 md:grid md:grid-rows-3 space-y-2  gap-2">
              <div
                className="row-span-2 flex flex-col justify-center service-card-img-bg"
                id="first-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-medium">
                    Custom Web Applications
                  </h4>
                  <div className="text-xs md:text-sm">
                    We specialize in creating custom web applications that meet
                    your unique business requirements. Experience seamless
                    integration and enhanced performance with our solutions.
                  </div>
                </div>
                <div>
                  <ContactPopUpForm>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="md:bg-secondary md:text-secondary-foreground md:shadow-xs md:hover:bg-secondary/80 px-0 md:px-3"
                    >
                      Learn More
                    </Button>
                  </ContactPopUpForm>
                </div>
              </div>
              <div className="row-span-1 flex gap-2">
                <div
                  className="flex-1 flex-col justify-center service-card-img-bg"
                  id="second-service"
                >
                  <div className="space-y-1">
                    <h4 className="text-xl font-medium">
                      Cyber Security Protection
                    </h4>
                    <div className="text-xs md:text-sm">
                      Protect your business from evolving online threats.
                    </div>
                  </div>
                  <div>
                    <ContactPopUpForm>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="md:bg-secondary md:text-secondary-foreground md:shadow-xs md:hover:bg-secondary/80 px-0 md:px-3"
                      >
                        Learn More
                      </Button>
                    </ContactPopUpForm>
                  </div>
                </div>
                <div
                  className="service-card-img-bg flex-1 flex-col justify-center"
                  id="third-service"
                >
                  <div className="space-y-1">
                    <h4 className="text-xl font-medium">
                      Al & Automation Tools
                    </h4>
                    <div className="text-xs md:text-sm">
                      Enhance productivity with our intelligent automation
                      solutions.
                    </div>
                  </div>

                  <div>
                    <ContactPopUpForm>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="md:bg-secondary md:text-secondary-foreground md:shadow-xs md:hover:bg-secondary/80 px-0 md:px-3"
                      >
                        Learn More
                      </Button>
                    </ContactPopUpForm>
                  </div>
                </div>
              </div>
            </div>

            {/* Second column - nested grid with 2 rows */}
            <div className="md:col-span-6 col-span-12 md:grid md:grid-rows-3 space-y-2 gap-2  ">
              <div
                className="row-span-1 service-card-img-bg "
                id="fourth-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl font-medium">Software Development</h4>
                  <div className="text-xs md:text-sm">
                    From concept to launch, we tailor software development to
                    your specific business needs and goals.
                  </div>
                </div>
                <div>
                  <ContactPopUpForm>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="md:bg-secondary md:text-secondary-foreground md:shadow-xs md:hover:bg-secondary/80 px-0 md:px-3"
                    >
                      Learn More
                    </Button>
                  </ContactPopUpForm>
                </div>
              </div>
              <div
                className="row-span-2 flex flex-col gap-2 service-card-img-bg"
                id="fivth-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-medium">
                    E-Commerce Platforms
                  </h4>
                  <div className="text-xs md:text-sm">
                    Our e-commerce solutions are designed to increase sales and
                    enhance customer experiences. Grow your online presence with
                    us
                  </div>
                </div>
                <div>
                  <ContactPopUpForm>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="md:bg-secondary md:text-secondary-foreground md:shadow-xs md:hover:bg-secondary/80 px-0 md:px-3"
                    >
                      Learn More
                    </Button>
                  </ContactPopUpForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

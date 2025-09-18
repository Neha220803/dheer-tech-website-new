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
    <div className="bg-neutral-700">
      <section className="flex items-center rounded-b-4xl bg-white">
        <div className="md:max-w-7xl h-full bg-secondar py-10 md:px-6 mx-auto w-full space-y-2 ">
          <div className="text-center flex flex-col justify-center items-center mb-4">
            <h1>Our Services</h1>
            <p className="md:w-4/5">
              At DheerTech, we build smart, scalable, and secure digital
              solutions that help businesses thrive in today's competitive
              world. From powerful websites to custom CRMs, we combine
              innovation, technology, and design to deliver results that matter.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-2 md:gap-4 h-full w-full">
            {/* First column */}
            <div className="md:col-span-6 col-span-12 md:grid md:grid-rows-6 space-y-2  gap-2">
              <div
                className="row-span-3 flex flex-col justify-center service-card-img-bg"
                id="first-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-medium">
                    Custom Web Applications
                  </h4>
                  <div className="text-xs md:text-sm">
                    Your website defines digital identity. We design responsive,
                    user-friendly, optimized websites that impress, engage, and
                    convert, ensuring stronger online presence that builds
                    trust, growth, and lasting connections.
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
                      Business Essentials Designing
                    </h4>
                    <div className="text-xs md:text-sm">
                      We craft logos, pitch decks, brochures, presentations,
                      branding.
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
                    <h4 className="text-xl font-medium">Digital Marketing</h4>
                    <div className="text-xs md:text-sm">
                      Our experts boost visibility with SEO, social, PPC, email.
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
              <div
                className="row-span-2 flex flex-col gap-2 service-card-img-bg"
                id="seventh-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-medium">
                    Software Development
                  </h4>
                  <div className="text-xs md:text-sm">
                    We build tailored web applications, from automation to data
                    systems, focusing on scalability, speed, and security to
                    streamline operations, productivity, and growth.
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

            {/* Second column - nested grid with 2 rows */}
            <div className="md:col-span-6 col-span-12 md:grid md:grid-rows-6 space-y-2 gap-2  ">
              <div
                className="row-span-2 flex flex-col gap-2 service-card-img-bg"
                id="sixth-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-medium">
                    Cyber Security Protection
                  </h4>
                  <div className="text-xs md:text-sm">
                    Security drives everything we build. With secure coding,
                    encryption, and compliance, we protect applications from
                    vulnerabilities, threats, breaches, ensuring business
                    growth.
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
                className="row-span-3 flex flex-col gap-2 service-card-img-bg"
                id="fivth-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-medium">
                    E-Commerce Platforms
                  </h4>
                  <div className="text-xs md:text-sm">
                    Our e-commerce solutions are built to boost sales, enhance
                    customer experiences, and expand visibility. Partner with us
                    to strengthen online presence, achieve growth, and long-term
                    success.
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
                className="row-span-1 service-card-img-bg "
                id="fourth-service"
              >
                <div className="space-y-1">
                  <h4 className="text-2xl font-medium">
                    AI & Automation Tools
                  </h4>
                  <div className="text-xs md:text-sm">
                    We develop AI-powered automation tools that streamline
                    workflows, improve efficiency, reduce costs, and accelerate
                    business growth.
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
    </div>
  );
};

export default ServicesPage;

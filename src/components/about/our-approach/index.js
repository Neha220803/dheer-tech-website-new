import React from "react";
import "./styles.css";
import { Card } from "@/components/ui/card";

const AboutOurApproachComp = () => {
  return (
    <div className="overflow-hidden">
      <section className="section-timeline md:space-y-8 space-y-0">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-center">Our Approach</h1>
          <p className="text-gray-600 md:w-3/5">
            We craft intuitive, accessible, and engaging interfaces, ensuring
            effortless experiences across platforms, devices, and audiences
          </p>
        </div>
        <div className="container ">
          <ul className="timeline">
            <li className="">
              <Card className="content gap-0">
                <div className="flex md:flex-row flex-col gap-2">
                  <img
                    src="/assets/icons/user-centric.svg"
                    className="md:w-20 w-15 h-auto"
                    alt="img"
                  />
                  <div>
                    <h3>User-Centric Design</h3>
                    <p>
                      We deliver projects in flexible sprints, adapting quickly
                      to changes, ensuring faster results, and continuous
                      improvement
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li className="">
              <Card className="content gap-0">
                <div className="flex md:flex-row flex-col gap-2">
                  <img
                    src="/assets/icons/agile-2.svg"
                    className="md:w-20 w-15 h-auto"
                    alt="img"
                  />
                  <div>
                    <h3>Agile Development</h3>
                    <p>
                      We leverage AWS, Azure, and GCP to build scalable,
                      reliable, and future-ready applications for businesses
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li className="">
              <Card className="content gap-0">
                <div className="flex md:flex-row flex-col gap-2">
                  <img
                    src="/assets/icons/cloud-native.svg"
                    className="md:w-20 w-18 h-auto"
                    alt="img"
                  />
                  <div>
                    <h3>Cloud-Native Solutions</h3>
                    <p>
                      We transform complex data into actionable intelligence,
                      enabling smarter decisions, optimized performance, and
                      sustainable business growth
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li className="">
              <Card className="content gap-0">
                <div className="flex md:flex-row flex-col gap-2">
                  <img
                    src="/assets/icons/reports.svg"
                    className="w-20 h-auto"
                    alt="img"
                  />
                  <div>
                    <h3>Data-Driven Insights</h3>
                    <p>
                      We integrate protection at every layer, safeguarding
                      software from hackers, malware, breaches, and evolving
                      cyber threats.
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li className="">
              <Card className="content gap-0">
                <div className="flex md:flex-row flex-col gap-2">
                  <img
                    src="/assets/icons/cyber-sec-check.svg"
                    className="md:w-20 w-15 h-auto"
                    alt="img"
                  />
                  <div>
                    <h3>Cybersecurity Built-In</h3>
                    <p>
                      We integrate protection at every layer, safeguarding
                      software from hackers, malware, breaches, and evolving
                      cyber threats.
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutOurApproachComp;

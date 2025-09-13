import React from "react";
import "./styles.css";

const AboutOurApproachComp = () => {
  return (
    <div className=" overflow-hidden">
      <section className="section-timeline space-y-8">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-center">Our Approach</h1>
          <p className="text-gray-600 md:w-3/5">
            We combine innovation with precision to deliver solutions that truly
            matter. Our approach ensures every product is secure, scalable, and
            tailored to your business goals.
          </p>
        </div>
        <div className="container ">
          <ul className="timeline">
            <li className="">
              <div className="content">
                <h3>User-Centric Design</h3>
                <p>
                  We craft intuitive, accessible, and visually engaging
                  interfaces that put your users first. Every design decision is
                  guided by usability and simplicity, ensuring a seamless
                  experience across devices and audiences.
                </p>
              </div>
            </li>
            <li className="">
              <div className="content">
                <h3>Agile Development</h3>
                <p>
                  We follow a sprint-based approach that ensures speed,
                  flexibility, and continuous improvement. By breaking projects
                  into manageable phases, we adapt quickly to changing
                  requirements, deliver faster results, and keep you involved at
                  every stage
                </p>
              </div>
            </li>
            <li className="">
              <div className="content">
                <h3>Cloud-Native Solutions</h3>
                <p>
                  We design and deploy applications optimized for AWS, Azure,
                  and GCP to deliver seamless scalability, reliability, and
                  performance. Our cloud-first approach ensures effortless
                  scaling, reduced costs, and future-ready infrastructure for
                  your business.
                </p>
              </div>
            </li>
            <li className="">
              <div className="content">
                <h3>Data-Driven Insights</h3>
                <p>
                  We leverage advanced analytics, AI, and automation to
                  transform raw data into actionable intelligence. Our solutions
                  empower businesses to make smarter, faster decisions, optimize
                  operations, and unlock new opportunities for growth
                </p>
              </div>
            </li>
            <li className="">
              <div className="content">
                <h3>Cybersecurity Built-In</h3>
                <p>
                  Security is at the core of everything we build. From threat
                  detection to data encryption and compliance, we integrate
                  robust protection into every layer of your software,
                  safeguarding against hackers, malware, and data breaches —
                  like a vaccine for your digital assets
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutOurApproachComp;

import React from "react";
import "./styles.css";

const TimelineStickyComp = () => {
  // Timeline data array
  const timelineData = [
    {
      id: 1,
      title: "Discovery – Understand your goals",
      content:
        "We begin every project by diving deep into your vision, challenges, and objectives. Through comprehensive stakeholder interviews, market research, and competitive analysis, we uncover the core problems your product needs to solve. This discovery phase ensures we're building the right solution from day one, aligning technical possibilities with your business goals and user needs.",
    },
    {
      id: 2,
      title: "Design – Create intuitive solutions",
      content:
        "Our design team transforms insights into compelling user experiences. We create wireframes, prototypes, and high-fidelity mockups that prioritize usability and accessibility. Through iterative design sprints and user testing, we refine every interaction until it feels natural and effortless. The result is a product that not only looks beautiful but genuinely serves your users' needs.",
    },
    {
      id: 3,
      title: "Development – Agile, scalable builds",
      content:
        "Our development process combines cutting-edge technology with proven methodologies. Using agile sprints, we build your product incrementally, allowing for continuous feedback and refinement. We prioritize clean, maintainable code, robust architecture, and scalable infrastructure that can grow with your business. Regular demos keep you involved throughout the entire build process.",
    },
    {
      id: 4,
      title: "Deployment – Secure & future-ready",
      content:
        "Launch day is just the beginning. We ensure your product goes live smoothly with comprehensive testing, security audits, and performance optimization. Our deployment process includes automated monitoring, backup systems, and rollback capabilities. We set up analytics and tracking systems so you can measure success from day one while maintaining the highest security standards.",
    },
    {
      id: 5,
      title: "Support – Ongoing partnership",
      content:
        "Our relationship doesn't end at launch. We provide ongoing maintenance, feature updates, and technical support to keep your product running smoothly. As your business evolves, we're here to scale your solution, add new capabilities, and adapt to changing market needs. Consider us your long-term technology partner, invested in your continued success.",
    },
  ];

  return (
    <section className="bg-primary timeline-section">
      <h1 className="text-4xl text-white text-center mb-8">How We Work</h1>

      {/* Container for sticky functionality */}
      <div className="timeline-container">
        <div className="timeline-content">
          {/* Left sticky column */}
          <div className="left-sticky-column">
            <div className="sticky-content">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-white">
                This content will stick to the top while you scroll through the
                timeline on the right.
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Key Milestones
                </h3>
                <ul className="text-white space-y-2">
                  <li>• Founded in 2020</li>
                  <li>• First major client</li>
                  <li>• Team expansion</li>
                  <li>• International reach</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right scrollable column - Now mapped from data */}
          <div className="right-scroll-column">
            {timelineData.map((item) => (
              <div key={item.id} className="timeline-item">
                <h3 className="text-2xl md:font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white mb-6 hidden md:block">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineStickyComp;

import React from "react";
import "./styles.css";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Adhi Constructions",
    industry: "Construction Industry",
    images: [
      "/assets/images/projects/aadhi-2.png",
      "/assets/images/projects/aadhi-1.png",
      "/assets/images/projects/aadhi-3.png",
    ],
    tags: ["Web Design", "Web Development"],
    tagColors: [
      { bg: "bg-blue-100", text: "text-blue-800" },
      { bg: "bg-green-100", text: "text-green-800" },
    ],
    description:
      "A secure digital platform for Adhi Constructions, combining modern design, seamless user experience, and robust coding practices to ensure reliability and trust",
    link: "https://adhiconstruction.us/",
    linkText: "Visit Adhi Constructions",
  },
  {
    id: 2,
    title: "Crown of Spices",
    industry: "Restaurant & Bar",
    images: [
      "/assets/images/projects/crown-2.png",
      "/assets/images/projects/crown-1.png",
      "/assets/images/projects/crown-3.png",
    ],
    tags: ["Online Ordering", "POS Integration", "Table Booking"],
    tagColors: [
      { bg: "bg-orange-100", text: "text-orange-800" },
      { bg: "bg-purple-100", text: "text-purple-800" },
      { bg: "bg-indigo-100", text: "text-indigo-800" },
    ],
    description:
      "A modern, feature-rich website for Crown of Spices South Indian restaurant and bar. Includes intuitive online ordering platform, coupon integration system, real-time order tracking, delivery partner integration, POS system synchronization, and table booking features for enhanced customer experience.",
    link: "https://www.crownofspices.com",
    linkText: "Visit Crown of Spices",
  },
  {
    id: 3,
    title: "Maya Indian Cuisine",
    industry: "Restaurant",
    images: [
      "/assets/images/projects/maya-1.png",
      "/assets/images/projects/maya-2.png",
      "/assets/images/projects/maya-3.png",
    ],
    tags: ["Online Ordering", "Admin Panel", "Delivery Integration"],
    tagColors: [
      { bg: "bg-red-100", text: "text-red-800" },
      { bg: "bg-yellow-100", text: "text-yellow-800" },
      { bg: "bg-green-100", text: "text-green-800" },
    ],
    description:
      "A dynamic website for Maya Indian Cuisine featuring a fully functional online ordering system, delivery partner integration, table booking functionality, and an easy-to-manage admin panel for menu updates and pricing changes. Provides a scalable, efficient, and customer-centric digital platform.",
    link: "https://share.google/AlN5QHT4GGuE2k5de",
    linkText: "Visit Maya Indian Cuisine",
  },
  {
    id: 4,
    title: "Hicksville Driving School",
    industry: "Education & Training",
    images: [
      "/assets/images/projects/hds-2.png",
      "/assets/images/projects/hds-1.png",
      "/assets/images/projects/hds-3.png",
    ],
    tags: ["Student Portal", "Live Tracking", "Document Management"],
    tagColors: [
      { bg: "bg-blue-100", text: "text-blue-800" },
      { bg: "bg-emerald-100", text: "text-emerald-800" },
      { bg: "bg-gray-100", text: "text-gray-800" },
    ],
    description:
      "A comprehensive digital platform for Hicksville Driving School with secure student and instructor login portals, live vehicle tracking for enhanced safety, robust schedule management tools, and document management module for permits, IDs, and certificates. Improves operational efficiency and student experience.",
    link: "https://share.google/XTYFFXNxVUhnoK6Pz",
    linkText: "Visit Hicksville Driving School",
  },
];

const ProjectsFeaturedComp = () => {
  return (
    <section className="flex items-start justify-center">
      <div className="max-w-7xl w-full space-y-16">
        <h2 className="mb-6 text-5xl">Our Projects</h2>

        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`grid md:grid-cols-2 grid-cols-1 ${
              index % 2 === 1 ? "md:grid-flow-col-dense" : ""
            }`}
          >
            {/* Images Section */}
            <div
              className={`featured-projects-wrapper ${
                index % 2 === 1 ? "md:col-start-2" : ""
              }`}
            >
              <div className="featured-project-images-container absolute top-5 left-0 z-50">
                <img
                  src={project.images[0]}
                  alt={`${project.title} image 1`}
                  className="featured-project-images"
                />
              </div>
              <div className="featured-project-images-container2 absolute top-0 left-25 z-50">
                <img
                  src={project.images[1]}
                  alt={`${project.title} image 2`}
                  className="featured-project-images"
                />
              </div>
              <div className="featured-project-images-container3 absolute top-5 right-0">
                <img
                  src={project.images[2]}
                  alt={`${project.title} image 3`}
                  className="featured-project-images"
                />
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`flex flex-col justify-center space-y-6 px-6 md:px-0 ${
                index % 2 === 1
                  ? "md:col-start-1 pr-8 md:pr-16"
                  : "md:pl-16 pl-8"
              }`}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  <p className="text-lg text-gray-600 font-medium">
                    {project.industry}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 ${
                        project.tagColors[tagIndex]?.bg || "bg-gray-100"
                      } ${
                        project.tagColors[tagIndex]?.text || "text-gray-800"
                      } text-sm font-medium rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                {project.description}
              </p>

              <div className="pt-4">
                <a
                  href={project.link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-400 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {project.linkText}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsFeaturedComp;

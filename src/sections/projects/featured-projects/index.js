import React from "react";
import "./styles.css";

const adhiImg1 = "/assets/images/projects/aadhi-1.png";
const adhiImg2 = "/assets/images/projects/aadhi-2.png";
const adhiImg3 = "/assets/images/projects/aadhi-3.png";

const ProjectsFeaturedComp = () => {
  return (
    <section className="flex items-start justify-center ">
      <div className="max-w-7xl  w-full">
        <h1 className="mb-6">Our Projects</h1>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="featured-projects-wrapper">
            <div className="featured-project-images-container absolute top-5 left-0 z-50">
              <img
                src={adhiImg1}
                alt="image"
                className="featured-project-images"
              />
            </div>
            <div className="featured-project-images-container2 absolute top-0 left-25 z-50">
              <img
                src={adhiImg2}
                alt="image"
                className="featured-project-images"
              />
            </div>
            <div className="featured-project-images-container3 absolute top-5 right-0">
              <img
                src={adhiImg3}
                alt="image"
                className="featured-project-images"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6 pl-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Adhi Constructions
              </h2>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-lg text-gray-600 font-medium">
                  Construction Industry
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Web Design
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Web Development
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              A secure digital platform for Adhi Constructions, combining modern
              design, seamless user experience, and robust coding practices to
              ensure reliability and trust
            </p>

            <div className="pt-4">
              <a
                href="https://adhiconstruction.us/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-400 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Visit Adhi Constructions
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
      </div>
    </section>
  );
};

export default ProjectsFeaturedComp;

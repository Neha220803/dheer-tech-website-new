import React from "react";

const FooterComp = () => {
  return (
    <div
      className="relative h-[70vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+70vh)] -top-[100vh]">
        <div className="h-[70vh] sticky top-[calc(100vh-70vh)]">
          <div className="h-[70vh] sticky top-[calc(100vh-70vh)]">
            <div className="bg-color2-200 py-8 px-12 h-full w-full flex flex-col justify-between">
              <div>
                <div className="flex shrink-0 gap-20">
                  <div className="flex flex-col gap-2">
                    <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
                    <p>Home</p>
                    <p>Projects</p>
                    <p>Our Mission</p>
                    <p>Contact Us</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="mb-2 uppercase text-[#ffffff80]">
                      Education
                    </h3>
                    <p>News</p>
                    <p>Learn</p>
                    <p>Certification</p>
                    <p>Publications</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <h1 className="text-[10vw] leading-[0.8] mt-10">
                  Dheer Tech Inc
                </h1>
                <p>©copyright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;

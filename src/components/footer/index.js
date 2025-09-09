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
            <div className="bg-neutral-700 py-8 px-12 h-full w-full flex flex-col justify-between">
              <div className="text-white">
                <div className="flex shrink-0 gap-20">
                  <div className="flex flex-col gap-2">
                    <h3 className="mb-2 uppercase text-[#ffffff80]">Links</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Projects</p>
                    <p>Contact Us</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="mb-2 uppercase text-[#ffffff80]">
                      Social Media
                    </h3>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                    <p>YouTube</p>
                    <p>Facebook</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row text-white justify-between md:items-end">
                <h1 className="text-[10vw] leading-[0.8] mt-10">
                  Dheer Tech Inc
                </h1>
                <p>©DheerTech, All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;

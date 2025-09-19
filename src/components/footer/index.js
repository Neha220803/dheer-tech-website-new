import Link from "next/link";
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
                    <h3 className="mb-2 uppercase font-bold text-[#ffffff80]">
                      Links
                    </h3>
                    <Link
                      href="/"
                      className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    >
                      About
                    </Link>
                    <Link
                      href="/our-services"
                      className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    >
                      Services
                    </Link>
                    <Link
                      href="/projects"
                      className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="mb-2 uppercase font-bold text-[#ffffff80]">
                      Social Media
                    </h3>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                    <p>YouTube</p>
                    <p>Instagram</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row text-white justify-between md:items-end gap-3">
                <div className="text-[8vw] md:text-[10vw] leading-[0.8] mt-10">
                  DheerTech Inc
                </div>
                <p className="text-xs">© DheerTech, All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;

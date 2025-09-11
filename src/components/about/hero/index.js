import { Button } from "@/components/ui/button";
import React from "react";
import "./styles.css";
import ContactPopUpForm from "@/components/pop-up-form/ContactPopUpForm";

const aboutHeroImg = "/assets/images/about/about-hero.png";

const AboutHeroComp = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="flex justify-center items-center max-w-6xl ">
        <div className="w-1/2  ">
          <div className="w-4/5 flex justify-center items-start flex-col gap-4 ">
            <h1 className="text-2xl font-bold">
              Innovating <span className="text-primary-400">Today</span> for a
              Secure Tomorrow.
            </h1>
            <p>
              At DheerTech, innovation meets protection. We are a team of
              skilled engineers, designers, and cyber coders who specialize in
              building secure, scalable, and intuitive web-based solutions. Our
              mission is simple - empower businesses to grow smarter while
              staying safe in the digital age.
            </p>
            <ContactPopUpForm>
              <Button>Contact Us</Button>
            </ContactPopUpForm>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center ">
          <img
            src={aboutHeroImg}
            alt="about hero img"
            className="about-hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroComp;

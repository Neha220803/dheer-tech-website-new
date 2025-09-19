import { Button } from "@/components/ui/button";
import React from "react";
import "./styles.css";
import ContactPopUpForm from "@/components/pop-up-form/ContactPopUpForm";
import { ArrowBigRight } from "lucide-react";

const aboutHeroImg = "/assets/images/about/about-hero2.png";

const AboutHeroComp = () => {
  return (
    <section className="flex items-center">
      <div className="md:max-w-7xl grid md:grid-cols-2 gap-3 grid-cols-1 md:py-10 md:px-6 mx-auto">
        <div className="space-y-3">
          <h1 className="">Building the Future, Securing the Present.</h1>
          <p>
            At DheerTech, we are more than developers — we are digital
            protectors. Along with designing cutting-edge web applications, our
            experienced cyber coders specialize in shielding websites and
            software from hackers, data breaches, and evolving cyber threats.
          </p>
          <p>
            Think of our security layer as a vaccine for your software — built
            to defend against malware, ransomware, and viruses before they
            strike. From firewall configurations and end-to-end encryption to
            real-time vulnerability monitoring, our team ensures that every
            platform we deliver is secure, stable, and future-ready.
          </p>
          <ContactPopUpForm>
            <Button size={"lg"}>
              Lets Connect Now <ArrowBigRight />
            </Button>
          </ContactPopUpForm>
        </div>
        <div className="flex justify-end">
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

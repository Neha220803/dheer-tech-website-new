import { MapPin } from "lucide-react";
import React from "react";
import "./styles.css";

const ContactLocationComp = () => {
  return (
    <section className="flex justify-center">
      <div className="max-w-7xl w-full space-y-3">
        <h1>Our Offices</h1>
        <div className=" h-[50vh] grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col items-center justify-end h-full  location-1-card">
            <div className="black-overlay z-900"></div>
            <div className="z-999 flex text-center flex-col items-center text-white p-12 md:w-2/5 ">
              <MapPin className="text-primary" />
              <div className="text-2xl font-medium">New York</div>
              <p>34 Garden Blvd, Hicksville NY 11801</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end h-full location-2-card">
            <div className="black-overlay"></div>
            <div className="z-999 text-center flex flex-col items-center text-white p-12 md:w-3/5 ">
              <MapPin className="text-primary" />
              <div className="text-2xl font-medium">Kaniyakumari</div>
              <p>
                2/49 Kattuvilai, Kattadurai Post,Kaniyakumari District
                629158,Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocationComp;

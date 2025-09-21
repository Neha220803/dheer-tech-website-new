import { MapPin } from "lucide-react";
import React from "react";
import "./styles.css";

const ContactLocationComp = () => {
  return (
    <div className="bg-neutral-700">
      <section className="flex justify-center bg-white rounded-b-4xl">
        <div className="max-w-7xl w-full space-y-6">
          <h1>Our Offices</h1>
          <div className=" md:h-[50vh] grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex flex-col items-center justify-end h-full  location-1-card">
              <div className="black-overlay z-900"></div>
              <div className="z-999 flex text-center gap-2 items-center text-white p-12 ">
                <MapPin className="text-white" />
                <div className="text-2xl font-medium">New York</div>
                {/* <p>34 Garden Blvd, Hicksville NY 11801</p> */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-end h-full location-3-card">
              <div className="black-overlay"></div>
              <div className="z-999 flex text-center gap-2 items-center text-white p-12 ">
                <MapPin className="text-white" />
                <div className="text-2xl font-medium">Chennai</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end h-full location-2-card">
              <div className="black-overlay"></div>
              <div className="z-999 flex text-center gap-2 items-center text-white p-12 ">
                <MapPin className="text-white" />
                <div className="text-2xl font-medium">Kaniyakumari</div>
                {/* <p>
                2/49 Kattuvilai, Kattadurai Post,Kaniyakumari District
                629158,Tamil Nadu, India.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLocationComp;

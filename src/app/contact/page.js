import ContactForm from "@/components/contact-form";
import React from "react";

const ContactUspage = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="">
            <div>
              <h1>Conatct Us</h1>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <ContactForm showTitle={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUspage;

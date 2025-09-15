import ContactForm from "@/components/contact-form";
import React from "react";

const ContactHeroComp = () => {
  return (
    <section className="flex items-center justify-center my-10">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4 ">
          <div className="col-span-7 md:space-y-8 space-y-2 flex flex-col justify-between">
            <div className="md:space-y-8 space-y-2">
              <div>
                <h1>Get In Touch</h1>
                <p className="text-gray-600 ">
                  Email, call or complete the form to learn how we can help you
                </p>
                <p className="text-gray-600 ">info@dheertech.com</p>
                <p className="text-gray-600 ">+1 - 5167651100</p>
              </div>

              <div className="md:w-4/5">
                <div className="text-gray-800 md:text-lg  text-sm font-medium ">
                  We'd be glad to share more about our work — leave us a message
                  and we'll get back to you
                </div>
              </div>
            </div>

            <div className="md:flex hidden gap-3">
              <div className="flex-1">
                <h3>Project Inquiries</h3>
                <div className="text-gray-600">
                  Want to build a website or software solution? Reach out to us
                  and our team will guide you through every step.
                </div>
              </div>
              <div className="flex-1">
                <h3>Technical Support</h3>
                <div className="text-gray-600">
                  Already using our services? Our support team is available to
                  resolve issues quickly and ensure your systems run smoothly.
                </div>
              </div>
              <div className="flex-1">
                <h3>Feedbacks</h3>
                <div className="text-gray-600">
                  We value your feedback and continuously improve our services.
                  Your suggestions help us deliver better solutions for your
                  business.
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 flex items-center justify-end ">
            <ContactForm showTitle={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroComp;

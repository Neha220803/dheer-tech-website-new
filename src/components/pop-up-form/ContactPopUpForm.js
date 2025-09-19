"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "../contact-form";

const ContactPopUpForm = ({ children, triggerClassName = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] rounded-3xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 text-xs">
            Ready to start your project? Fill out the form below and we'll get
            back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto">
          <ContactForm showTitle={false} onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopUpForm;

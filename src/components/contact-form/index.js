"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "emailjs-com";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

// Enhanced form schema with robust validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." })
    .regex(/^[a-zA-Z\s\-'\.]+$/, {
      message:
        "Name can only contain letters, spaces, hyphens, and apostrophes.",
    })
    .transform((value) => value.trim().replace(/\s+/g, " ")), // Sanitize multiple spaces

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must not exceed 100 characters." })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Please enter a valid email format.",
    })
    .transform((value) => value.toLowerCase().trim()),

  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => {
        if (!value || value === "") return true; // Optional field
        const cleanPhone = value.replace(/\D/g, ""); // Remove non-digits
        return cleanPhone.length === 10;
      },
      { message: "Phone number must be exactly 10 digits." }
    )
    .transform((value) => {
      if (!value) return "";
      return value.replace(/\D/g, ""); // Keep only digits
    }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message must not exceed 500 characters." })
    .regex(/^[a-zA-Z0-9\s\-_.,!?@#$%&*()+=\[\]{}|\\:";'<>\/`~]+$/, {
      message: "Message contains invalid characters.",
    })
    .transform((value) => value.trim().replace(/\s+/g, " ")), // Sanitize
});

const ContactForm = ({ showTitle = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);

    try {
      // Prepare EmailJS template parameters
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone_number: values.phone || "Not provided",
        message: values.message,
        to_name: "DheerTech Icn", // Change this to your company name
        to_email: "info@dheertech.com", // Your recipient email
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_3idlt0x", // Replace with your service ID
        "template_7g91i4l", // Replace with your template ID
        templateParams,
        "bql19IHSmzPWHoJiX" // Replace with your public key
      );

      // Success notification
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 3000,
        position: "top-center",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Error notification
      toast.error("Failed to send message. Please try again later.", {
        duration: 3000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto p-6 border bg-white rounded-lg shadow-sm">
        {showTitle && (
          <div className="text-2xl font-bold mb-6 text-gray-800">
            Contact Us
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="1234567890"
                      maxLength={14} // Allow for formatting like (123) 456-7890
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="resize-none"
                      rows={4}
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </div>

      <Toaster richColors />
    </>
  );
};

export default ContactForm;

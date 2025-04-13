"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // <-- sonner import
import { database, ref, set } from "../lib/firebase"; // adjust path accordingly

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formRef = ref(database, "messages/" + Date.now());
      await set(formRef, formData);

      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I’ll get back to you soon.",
        style: {
          backgroundColor: "#333", // Dark background
          color: "#fff", // White text
          borderRadius: "8px", // Optional: rounded corners
          padding: "12px", // Add padding for better spacing
        },
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "There was a problem sending your message. Please try again later.",
        style: {
          backgroundColor: "#333", // Dark background
          color: "#fff", // White text
          borderRadius: "8px", // Optional: rounded corners
          padding: "12px", // Add padding for better spacing
        },
      });
      console.error("Firebase error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 w-full bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <p>
                You can also reach me directly at{" "}
                <a href="mailto:adityatallare797@gmail.com" className="text-primary hover:underline">
                  adityatallare797
                </a>{" "}
                or connect with me on social media.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

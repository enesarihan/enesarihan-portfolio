"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you can implement form submission
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    // Simulated form submission
    setTimeout(() => {
      alert("Your message has been sent! (This is a demo message)");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-num-1">Contact</span> Me
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Feel free to contact me for jobs or questions. I&apos;ll get back to
            you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-num-1/10">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can reach me through the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-num-1/10">
                    <Mail className="w-5 h-5 text-num-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">enessarihan35@icloud.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-num-1/10">
                    <Phone className="w-5 h-5 text-num-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+90 537 728 5464</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-num-1/10">
                    <MapPin className="w-5 h-5 text-num-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Izmir, Turkey</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    Social Media
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.linkedin.com/in/enesarihan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-num-1/10 hover:bg-num-1/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin className="w-5 h-5 text-num-1" />
                    </Link>
                    <Link
                      href="https://github.com/enesarihan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-num-1/10 hover:bg-num-1/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <SiGithub className="w-5 h-5 text-num-1" />
                    </Link>

                    <Link
                      href="https://www.instagram.com/enesarihan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-num-1/10 hover:bg-num-1/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <SiInstagram className="w-5 h-5 text-num-1" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-num-1/10">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form to send me a message
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-num-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

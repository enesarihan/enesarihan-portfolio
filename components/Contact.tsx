"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { sendEmail } from "@/lib/email";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus("success");
      console.log(formData);

      await sendEmail(formData);

      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/enesarihan",
      color: "hover:bg-[#0077B5]/20 hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-5 h-5" />,
      url: "https://github.com/enesarihan",
      color: "hover:bg-[#333]/20 hover:text-[#333]",
    },
    {
      name: "Instagram",
      icon: <SiInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/enesarihan",
      color: "hover:bg-[#E1306C]/20 hover:text-[#E1306C]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-num-1/5 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-num-1/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-num-1/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
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
            <Card className="h-full border-num-1/10 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="text-num-1">📬</span> Contact Information
                </CardTitle>
                <CardDescription className="text-base">
                  You can reach me through the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-num-1/10">
                    <Mail className="w-5 h-5 text-num-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <Link
                      href="mailto:enessarihan35@icloud.com"
                      className="font-medium hover:text-num-1 transition-colors flex items-center gap-1 group"
                    >
                      enessarihan35@icloud.com
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-num-1/10">
                    <Phone className="w-5 h-5 text-num-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <Link
                      href="tel:+905377285464"
                      className="font-medium hover:text-num-1 transition-colors flex items-center gap-1 group"
                    >
                      +90 537 728 5464
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-num-1/10">
                    <MapPin className="w-5 h-5 text-num-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Izmir, Turkey</p>
                  </div>
                </motion.div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    Connect with me
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-num-1/10 ${social.color} transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </Link>
                    ))}
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
            <Card className="border-num-1/10 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="text-num-1">✉️</span> Send a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I&apos;ll respond as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {formStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Alert className="bg-green-50 border-green-200 text-green-800 mb-4">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertTitle className="text-green-800">
                          Message sent successfully!
                        </AlertTitle>
                        <AlertDescription className="text-green-700">
                          Thank you for reaching out. I&apos;ll get back to you
                          as soon as possible.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  ) : formStatus === "error" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Alert className="bg-red-50 border-red-200 text-red-800 mb-4">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertTitle className="text-red-800">
                          Something went wrong
                        </AlertTitle>
                        <AlertDescription className="text-red-700">
                          There was an error sending your message. Please try
                          again later or contact me directly.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className={formErrors.name ? "text-red-500" : ""}
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={
                        formErrors.name
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }
                      aria-invalid={!!formErrors.name}
                      aria-describedby={
                        formErrors.name ? "name-error" : undefined
                      }
                    />
                    {formErrors.name && (
                      <motion.p
                        id="name-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 mt-1"
                      >
                        {formErrors.name}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className={formErrors.email ? "text-red-500" : ""}
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={
                        formErrors.email
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }
                      aria-invalid={!!formErrors.email}
                      aria-describedby={
                        formErrors.email ? "email-error" : undefined
                      }
                    />
                    {formErrors.email && (
                      <motion.p
                        id="email-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 mt-1"
                      >
                        {formErrors.email}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className={formErrors.subject ? "text-red-500" : ""}
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className={
                        formErrors.subject
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }
                      aria-invalid={!!formErrors.subject}
                      aria-describedby={
                        formErrors.subject ? "subject-error" : undefined
                      }
                    />
                    {formErrors.subject && (
                      <motion.p
                        id="subject-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 mt-1"
                      >
                        {formErrors.subject}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className={formErrors.message ? "text-red-500" : ""}
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={
                        formErrors.message
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }
                      aria-invalid={!!formErrors.message}
                      aria-describedby={
                        formErrors.message ? "message-error" : undefined
                      }
                    />
                    {formErrors.message && (
                      <motion.p
                        id="message-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 mt-1"
                      >
                        {formErrors.message}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-num-1 hover:bg-num-1/90 transition-all duration-300 hover:shadow-md"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
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

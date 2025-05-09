"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <SiGithub />,
      href: "https://github.com/enesarihan",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      href: "https://linkedin.com/in/enesarihan",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      href: "https://instagram.com/enesarihan",
    },
  ];

  return (
    <footer className="pt-16 pb-8 bg-white border-t relative">
      {/* Back to top button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2"
      >
        <Button
          onClick={scrollToTop}
          className="rounded-full h-12 w-12 bg-num-1 hover:bg-num-1/90 shadow-lg group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-white group-hover:-translate-y-1 transition-transform" />
        </Button>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">
              Enes <span className="text-num-1">SARIHAN</span>
            </h3>
            <p className="text-foreground/70 mb-4">
              Full Stack Javascript Developer passionate about creating modern
              web applications with cutting-edge technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-num-1 transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-lg">{link.icon}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-num-1 transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-num-1 transition-colors hover:underline"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4 text-num-1" />
                <Link
                  href="mailto:enessarihan35@icloud.com"
                  className="hover:text-num-1 transition-colors hover:underline"
                >
                  enessarihan35@icloud.com
                </Link>
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">Location:</span> Izmir, Turkey
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">Availability:</span> Open to
                opportunities
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm text-foreground/70">
              © {currentYear} Enes Sarihan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center text-sm text-foreground/70">
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              Designed and built with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Heart className="h-4 w-4 text-num-1 mx-1 fill-num-1" />
              </motion.span>{" "}
              using Next.js & Tailwind CSS
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen text-white flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-num-1/20 via-background to-background"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-num-1/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-num-1/5 rounded-full blur-3xl"></div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-num-1/20"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0.3,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: [0.2, 0.5, 0.2],
            scale: [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.7 + 0.3,
              Math.random() * 0.5 + 0.5,
            ],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
          }}
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          suppressHydrationWarning
        />
      ))}

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-4 mb-6"
            >
              <Link
                href="https://github.com/enesarihan"
                className="text-white/70 hover:text-num-1 transition-colors duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/enesarihan"
                className="text-white/70 hover:text-num-1 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/enesarihan/"
                className="text-white/70 hover:text-num-1 transition-colors duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="w-6 h-6" />
              </Link>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I&apos;m{" "}
              <span className="text-num-1 relative">
                Enes SARIHAN
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-num-1/50"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-num-1">Full Stack</span> Javascript
              Developer
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Passionate Full Stack JavaScript Developer with a love for
              building modern web applications using Next.js, React, TypeScript,
              and Node.js. I thrive on learning and constantly exploring new
              technologies. JavaScript isn&apos;t just a language for
              me—it&apos;s my craft. Always curious, always coding.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-num-1 hover:bg-num-1/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-num-1/20"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                className="border-num-1/30  hover:bg-num-1/10 hover:border-num-1/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#projects">View My Projects</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-num-1/30 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-num-1/0 to-num-1/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(var(--num-1-rgb), 0.3)",
                    "0 0 40px rgba(var(--num-1-rgb), 0.5)",
                    "0 0 20px rgba(var(--num-1-rgb), 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -inset-1 rounded-full z-0"
              ></motion.div>
              <Image
                src={"/mePort.jpeg"}
                alt="Enes SARIHAN"
                fill
                className="object-cover object-top z-0 transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <Link
              href="#technologies"
              aria-label="Scroll down to technologies section"
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/70 text-sm font-medium">
                Discover More
              </span>
              <ArrowDown className="text-num-1 w-8 h-8" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

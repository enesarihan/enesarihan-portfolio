"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);

    const sections = navItems.map((item) => item.href.substring(1));

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest("header")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-num-5/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      {/* Scroll Progress Indicator */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-num-1 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link
            href="#hero"
            className="text-2xl font-bold text-white relative group"
            aria-label="Enes Sarihan - Back to top"
          >
            Enes <span className="text-num-1">SARIHAN</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-num-1 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-white transition-all duration-300 relative font-medium hover:text-num-1",
                  activeSection === item.href.substring(1) && "text-num-1"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <div className="h-6 w-px bg-white/20 mx-2" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="sm"
              className="bg-num-1 hover:bg-num-1/90 text-white ml-2 group"
            >
              <Link
                href="/Enes_SARIHAN_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-1 h-4 w-4 group-hover:animate-bounce" />{" "}
                Resume
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="text-white hover:text-num-1 hover:bg-white/5"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ rotate: mobileMenuOpen ? -90 : 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: mobileMenuOpen ? 90 : -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[57px] bg-num-5/95 backdrop-blur-lg z-40 flex flex-col"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col h-full">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between text-xl py-4 px-4 rounded-lg text-white hover:bg-white/5 transition-all",
                        activeSection === item.href.substring(1) &&
                          "text-num-1 bg-white/5"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronRight
                        size={20}
                        className={cn(
                          "transition-transform",
                          activeSection === item.href.substring(1) &&
                            "text-num-1"
                        )}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 border-t border-white/10 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button
                    asChild
                    className="w-full bg-num-1 hover:bg-num-1/90 text-white"
                  >
                    <Link
                      href="/Enes.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="flex items-center justify-center"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <div className="mt-auto text-center text-white/50 text-sm py-4">
                <p>© {new Date().getFullYear()} Enes Sarihan</p>
                <p className="mt-1">Full Stack JavaScript Developer</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">
              Enes <span className="text-num-1">SARIHAN</span>
            </p>
            <p className="text-sm text-foreground/70">
              Full Stack Javascript Developer
            </p>
          </div>

          <div className="flex items-center text-sm text-foreground/70">
            <p>
              © {new Date().getFullYear()} All rights reserved.
              <span className="inline-flex items-center ml-1">
                Designed with <Heart className="h-4 w-4 text-num-1 mx-1" />
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

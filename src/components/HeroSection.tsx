"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-border glass text-sm font-medium text-muted-foreground mb-6">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground">
            Hi, I&apos;m <br />
            {portfolioData.hero.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
            {portfolioData.hero.title}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#contact"
              className="px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-2 hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Hire Me <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#projects"
              className="px-8 py-4 border border-border glass rounded-full font-bold hover:bg-muted transition-all hover:scale-105"
            >
              View Projects
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: FaLinkedin, href: portfolioData.hero.linkedin },
              { icon: FaGithub, href: portfolioData.hero.github },
              { icon: Mail, href: `mailto:${portfolioData.hero.email}` }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-full glass border border-border hover:text-purple-500 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

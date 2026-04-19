"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass p-8 rounded-3xl border border-border/50 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {portfolioData.about.description}
              </p>
              <div className="flex items-center gap-4 text-foreground font-bold text-xl">
                <span className="text-4xl text-purple-500">{portfolioData.about.experience}</span>
                Years Core Experience
              </div>
            </div>

            <div className="space-y-6">
              {portfolioData.about.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform border border-border/50"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-lg font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

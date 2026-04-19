"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full opacity-30" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-[18px] md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-purple-500 flex items-center justify-center z-10 shadow-lg">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                  <div className="glass p-8 rounded-3xl border border-border/50 hover:shadow-2xl hover:border-purple-500/30 transition-all">
                    <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm font-semibold mb-4">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "justify-start" : "md:justify-end"}`}>
                      {exp.highlights.map((highlight, hIdx) => (
                        <span key={hIdx} className="px-3 py-1 bg-background border border-border rounded-md text-xs font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

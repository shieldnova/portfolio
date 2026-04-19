"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { BrainCircuit, Cpu, Sparkles } from "lucide-react";

const icons = [BrainCircuit, Cpu, Sparkles];

export default function AISkillsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Sparkles className="w-8 h-8 text-purple-500" />
            AI & Machine Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {portfolioData.aiSkills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.aiSkills.integrations.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative p-[1px] rounded-3xl bg-gradient-to-br from-border to-border hover:from-purple-500 hover:to-blue-500 transition-colors duration-500 group"
              >
                <div className="h-full w-full bg-background/90 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

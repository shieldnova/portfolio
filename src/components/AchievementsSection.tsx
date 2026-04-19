"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Milestones & Accolades</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl border border-border/50 flex flex-col h-full hover:border-purple-500/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Award className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-background rounded-full border border-border">
                  {item.match}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

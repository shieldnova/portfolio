"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const allSkillsWithIcons = portfolioData.skills.flatMap(s => s.items).filter(s => s.icon);
  const marqueeSkills = [...allSkillsWithIcons, ...allSkillsWithIcons];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-border/50 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground/90">{skillGroup.category}</h3>
              <motion.div 
                variants={container} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skillGroup.items.map((skill, sIdx) => (
                  <motion.div
                    variants={item}
                    key={sIdx}
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill.icon && (
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                    )}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div 
        className="mt-24 w-full overflow-hidden flex py-12 relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <motion.div
          className="flex gap-16 md:gap-24 w-max pr-16 md:pr-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {marqueeSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-5 bg-background/50 glass border border-border/50 rounded-3xl group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

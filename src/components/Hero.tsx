import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-aurora">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--aurora-purple))"
      />

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row h-full w-full items-center py-20 lg:py-0">
          {/* Left Content */}
          <div className="flex-1 text-left space-y-8 relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-muted-foreground font-light">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gradient">S M Minhazul</span>
                <br />
                <span className="text-gradient-accent">Islam</span>
              </h1>
            </div>

            {/* Title */}

            {/* Description */}

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  name: "CAD Specialist",
                },
                {
                  name: "Production Engineer",
                },
                {
                  name: "AI Developer",
                },
                {
                  name: "Mechanical Engineer",
                  featured: true,
                },
              ].map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -30,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    relative px-6 py-3 text-sm font-medium rounded-full cursor-pointer
                    backdrop-blur-md border transition-all duration-300
                    ${skill.featured ? "bg-primary/20 border-primary/50 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]" : "bg-secondary/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"}
                  `}
                >
                  {skill.name}
                  {skill.featured && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-primary/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02]"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Robot */}
          <div className="flex-1 relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />

            {/* Interactive label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Move your mouse, I'll follow
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 pb-8">
        <div className="absolute bottom-8 right-8 hidden sm:block"></div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll to explore
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

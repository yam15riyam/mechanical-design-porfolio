import { GraduationCap, Target, Lightbulb, Cpu } from "lucide-react";
const highlights = [{
  icon: GraduationCap,
  title: "Academic Foundation",
  description: "BSc in Mechanical Engineering from CUET, with advanced studies in Artificial Intelligence (AI & Robotics)"
}, {
  icon: Target,
  title: "Design Focus",
  description: "Specialized in CAD modeling, mechanical drafting, and precision engineering for vehicle-mounted systems"
}, {
  icon: Lightbulb,
  title: "Innovation Driven",
  description: "Passionate about optimizing mechanical designs through research, analysis, and creative problem-solving"
}, {
  icon: Cpu,
  title: "AI Integration",
  description: "Leveraging programming and AI to automate engineering workflows and enhance design optimization"
}];
const About = () => {
  return <section id="about" className="py-24 lg:py-32 bg-aurora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">Mechanical Design Engineer</span> with a strong foundation in CAD modeling, mechanical drafting, and engineering analysis. My expertise lies in designing reliable components for fire engines and other vehicle-mounted systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a BSc in Mechanical Engineering from <span className="text-foreground font-medium">CUET</span> and an MSc in <span className="text-foreground font-medium">Artificial Intelligence</span> from <span className="text-foreground font-medium">OTH Amberg-Weiden</span>, focusing on AI & Robotics, I bring a unique blend of traditional mechanical engineering skills and modern computational approaches.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion extends beyond conventional design—I actively explore how <span className="text-aurora-purple font-medium">artificial intelligence and programming</span> can optimize mechanical designs, automate engineering workflows, and drive innovation.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[{
                value: "5+",
                label: "Years Experience"
              }, {
                value: "20+",
                label: "Projects Completed"
              }, {
              value: "2",
                label: "Publications"
              }].map(stat => <div key={stat.label} className="text-center glass-card rounded-xl p-4">
                    <div className="text-2xl font-bold text-aurora-purple">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>)}
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => <div key={item.title} className="glass-card rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 group" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-12 h-12 rounded-xl bg-aurora-purple/10 flex items-center justify-center mb-4 group-hover:bg-aurora-purple/20 transition-colors">
                    <item.icon className="w-6 h-6 text-aurora-purple" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;

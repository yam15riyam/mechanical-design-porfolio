import { Code2, Cog, PenTool, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "mechanical" | "digital";
}

const skills: Skill[] = [
  // CAD & Mechanical Skills
  { name: "AutoCAD", level: 95, category: "mechanical" },
  { name: "SolidWorks", level: 92, category: "mechanical" },
  { name: "Fusion 360", level: 90, category: "mechanical" },
  { name: "Keyshot", level: 88, category: "mechanical" },
  {
    name: "Strength Calculations & Material Analysis",
    level: 85,
    category: "mechanical",
  },
  { name: "Piping System Design", level: 82, category: "mechanical" },
  // Digital / AI-ML Skills
  { name: "Python", level: 90, category: "digital" },
  { name: "JavaScript", level: 75, category: "digital" },
  { name: "Machine Learning", level: 85, category: "digital" },
  { name: "Deep Learning (CNNs, RNNs, GANs)", level: 82, category: "digital" },
  { name: "LLMs & RAG", level: 80, category: "digital" },
  { name: "Computer Vision", level: 78, category: "digital" },
];

const mechanicalSkills = skills.filter((s) => s.category === "mechanical");
const digitalSkills = skills.filter((s) => s.category === "digital");

const SkillBar = ({ skill }: { skill: Skill }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground group-hover:text-aurora-purple transition-colors">
        {skill.level}%
      </span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-aurora-purple to-aurora-pink rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-aurora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Core Skills
            </h2>

            <div className="w-20 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mechanical Design Skills */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-aurora-purple/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-aurora-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Mechanical Design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Primary expertise
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {mechanicalSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>

              {/* Tool Badges */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Tools & Software
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AutoCAD", "SolidWorks", "Fusion 360", "Keyshot"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Digital / AI Skills */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-aurora-pink/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-aurora-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Digital & AI Skills
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complementary expertise
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {digitalSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>

              {/* Tool Badges */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Technologies & Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TensorFlow",
                    "PyTorch",
                    "OpenCV",
                    "LangChain",
                    "Git",
                    "Docker",
                    "Linux",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-xs font-medium bg-aurora-purple/10 text-aurora-purple rounded-full border border-aurora-purple/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Cog,
                label: "Business Intelligence",
                desc: "Dashboards & Reporting",
              },
              {
                icon: PenTool,
                label: "Strategic Insights",
                desc: "Market & Competitor Analysis",
              },
              {
                icon: Wrench,
                label: "Data Analysis",
                desc: "Forecasting & Segmentation",
              },
              {
                icon: Code2,
                label: "Automation",
                desc: "Python & Workflow Tools",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-card/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

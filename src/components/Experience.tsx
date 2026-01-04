import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "contract" | "internship";
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Graduate Trainee Engineer",
    company: "Bangla CAT",
    location: "Bangladesh",
    period: "Jan 2022 – Dec 2022",
    type: "full-time",
    description: [
      "Provided technical after-sales support for generators and excavators, diagnosing mechanical issues and coordinating maintenance for optimal performance",
      "Automated post-sales reporting workflows using Python and Excel, reducing manual effort by 50% and enabling faster resolution of mechanical service requests",
      "Designed and deployed interactive Power BI dashboards to track equipment performance, maintenance schedules, and service KPIs, improving operational visibility",
    ],
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "CUET Mechanical Engineering Department",
    location: "Bangladesh",
    period: "2018 - 2020",
    type: "internship",
    description: [
      "Assisted in research projects related to automotive braking systems",
      "Conducted experiments and collected data for academic publications",
      "Developed CAD models and performed simulations using ANSYS",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-aurora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent mx-auto mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aurora-purple via-aurora-pink to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 last:mb-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-3 h-3 rounded-full bg-aurora-purple shadow-glow-sm ${
                    index % 2 === 0
                      ? "left-[10px] md:left-auto md:right-[-6px]"
                      : "left-[10px] md:left-[-6px]"
                  }`}
                />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                  {/* Header */}
                  <div
                    className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${
                        exp.type === "full-time"
                          ? "bg-aurora-purple/10 text-aurora-purple border border-aurora-purple/20"
                          : exp.type === "contract"
                            ? "bg-aurora-blue/10 text-aurora-blue border border-aurora-blue/20"
                            : "bg-aurora-pink/10 text-aurora-pink border border-aurora-pink/20"
                      }`}
                    >
                      {exp.type === "full-time"
                        ? "Full-time"
                        : exp.type === "contract"
                          ? "Contract"
                          : "Internship"}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-aurora-purple font-medium">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div
                    className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span
                          className={`shrink-0 w-1.5 h-1.5 rounded-full bg-aurora-purple mt-2 ${
                            index % 2 === 0 ? "md:order-2" : ""
                          }`}
                        />
                        <span className={index % 2 === 0 ? "md:order-1" : ""}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { GraduationCap, BookOpen, Award, ExternalLink } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  coursework: string[];
  icon: "graduation" | "book" | "award";
}

interface Certificate {
  id: number;
  image: string;
  link: string;
  title: string;
}

const education: EducationItem[] = [
  {
    id: 1,
    degree: "M.Sc. in Artificial Intelligence for Industrial Applications",
    institution: "Ostbayerische Technische Hochschule Amberg-Weiden",
    location: "Germany",
    period: "2024 – Present",
    description:
      "Advanced studies in AI applications for industrial automation and intelligent systems.",
    coursework: [
      "Python Programming",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Software Development Project",
    ],
    icon: "graduation",
  },
  {
    id: 2,
    degree: "B.Sc. in Mechanical Engineering",
    institution: "Chittagong University of Engineering and Technology",
    location: "Bangladesh",
    period: "2016 – 2021",
    description:
      "Comprehensive education in mechanical engineering principles, design methodologies, and manufacturing processes.",
    coursework: [
      "Mechanical Design",
      "Strength of Materials",
      "CAD/CAM",
      "Manufacturing Processes",
      "Thermodynamics",
      "Fluid Mechanics",
      "Machine Design",
    ],
    icon: "book",
  },
];

const certificates: Certificate[] = [
  {
    id: 1,
    image: "https://minhazriyam.github.io/img/Capture.JPG",
    link: "https://www.coursera.org/account/accomplishments/certificate/CLM7HWEGVQ4Z",
    title: "Coursera Certificate",
  },
  {
    id: 2,
    image: "https://minhazriyam.github.io/img/certificates.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XVGZ46XA86ZA",
    title: "Coursera Specialization",
  },
  {
    id: 3,
    image: "https://minhazriyam.github.io/img/team-1.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/YL3MJWVTPH4X",
    title: "Coursera Specialization",
  },
  {
    id: 4,
    image: "https://minhazriyam.github.io/img/team-2.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6RN696NCQY3P",
    title: "Coursera Specialization",
  },
  {
    id: 5,
    image: "https://minhazriyam.github.io/img/team-3.jpg",
    link: "https://www.hackerrank.com/certificates/25f96d38d5f8",
    title: "HackerRank Certificate",
  },
  {
    id: 6,
    image: "https://minhazriyam.github.io/img/team-4.png",
    link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-874PMDB9RK",
    title: "SolidWorks Certificate",
  },
  {
    id: 7,
    image: "https://minhazriyam.github.io/img/team-5.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/PX8HXR729P5H",
    title: "Coursera Certificate",
  },
];

const Education = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "graduation":
        return GraduationCap;
      case "book":
        return BookOpen;
      case "award":
        return Award;
      default:
        return GraduationCap;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-aurora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Education
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent mx-auto mt-4" />
          </div>

          {/* Education Cards */}
          <div className="space-y-6 mb-16">
            {education.map((edu) => {
              const IconComponent = getIcon(edu.icon);
              return (
                <div
                  key={edu.id}
                  className="glass-card rounded-2xl p-6 lg:p-8 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    {/* Icon */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-aurora-purple" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-medium text-aurora-purple bg-aurora-purple/10 px-3 py-1 rounded-full border border-aurora-purple/20">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-aurora-purple font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {edu.location}
                      </p>

                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>

                      {/* Coursework */}
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          Relevant Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificates Section */}
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-aurora-pink/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-aurora-pink" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Certificates
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-border bg-secondary/30 hover:border-aurora-purple/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

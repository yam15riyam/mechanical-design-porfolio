import { Button } from "@/components/ui/button";
import { Award, BookOpen, ExternalLink } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  journal: string;
  year: string;
  authors: string;
  doi?: string;
  link?: string;
  type: "journal" | "conference";
  abstract: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title:
      "Design and Fabrication of an Automotive Electromagnetic Braking System",
    journal:
      "4th International Conference on Sustainable Technologies for Industry 4.0 (STI)",
    year: "2022",
    authors: "S M Minhazul Islam, et al.",
    doi: "10.1109/STI56238.2022.10103296",
    type: "conference",
    abstract:
      "This paper presents the design and fabrication of an electromagnetic braking system for automotive applications, focusing on sustainable braking solutions for Industry 4.0.",
  },
  {
    id: 2,
    title:
      "Development and Fabrication of Automated Bike Stand Retrieval System",
    journal:
      "International Conference on Mechanical Engineering and Renewable Energy 2021 (ICMERE 2021)",
    year: "2021",
    authors: "S M Minhazul Islam, et al.",
    link: "https://www.researchgate.net/publication/362479229_Development_and_Fabrication_of_Automated_Bike_Stand_Retrieval_System",
    type: "conference",
    abstract:
      "A comprehensive study on the development and fabrication of an automated bike stand retrieval system to enhance rider safety and convenience.",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 lg:py-32 bg-aurora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Publications & Research
            </h2>

            <div className="w-20 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent mx-auto mt-4" />
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-aurora-purple/10 flex items-center justify-center">
                    {pub.type === "journal" ? (
                      <BookOpen className="w-6 h-6 text-aurora-purple" />
                    ) : (
                      <Award className="w-6 h-6 text-aurora-pink" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-foreground leading-tight">
                        {pub.title}
                      </h3>
                      <span
                        className={`shrink-0 px-2 py-1 text-xs font-medium rounded border ${
                          pub.type === "journal"
                            ? "bg-aurora-purple/10 text-aurora-purple border-aurora-purple/20"
                            : "bg-aurora-pink/10 text-aurora-pink border-aurora-pink/20"
                        }`}
                      >
                        {pub.type === "journal" ? "Journal" : "Conference"}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.authors}
                    </p>

                    <p className="text-sm font-medium text-aurora-purple mb-3">
                      {pub.journal} • {pub.year}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {pub.abstract}
                    </p>

                    {(pub.doi || pub.link) && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-border hover:border-aurora-purple/50 hover:text-aurora-purple"
                      >
                        <a
                          href={
                            pub.doi ? `https://doi.org/${pub.doi}` : pub.link
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Publication
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

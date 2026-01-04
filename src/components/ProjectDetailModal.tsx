import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: "cad" | "robotics" | "ai";
  tools: string[];
  highlights: string[];
  repoUrl?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        {/* Image Carousel */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/50">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - View ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
          
          {project.images.length > 1 && (
            <>
              <Button
                size="icon"
                variant="secondary"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full glass"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full glass"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "bg-aurora-purple w-4"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Category Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              project.category === "cad"
                ? "bg-aurora-purple/20 text-aurora-purple border border-aurora-purple/30"
                : project.category === "ai"
                ? "bg-aurora-pink/20 text-aurora-pink border border-aurora-pink/30"
                : "bg-aurora-blue/20 text-aurora-blue border border-aurora-blue/30"
            }`}
          >
            {project.category === "cad"
              ? "CAD Design"
              : project.category === "ai"
              ? "AI/Data Science"
              : "Robotics"}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-medium bg-aurora-purple/10 text-aurora-purple rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Repository Link */}
        {project.repoUrl && (
          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-aurora-purple hover:bg-aurora-purple/90"
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Repository
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;

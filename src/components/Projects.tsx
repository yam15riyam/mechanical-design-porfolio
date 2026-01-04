import { useState } from "react";
import ProjectDetailModal, { Project } from "./ProjectDetailModal";

// Import local images
import robot1 from "@/assets/robot1.jpg";
import robot2 from "@/assets/robot2.png";
import robot3 from "@/assets/robot3.png";
import stand1 from "@/assets/stand1.png";
import stand2 from "@/assets/stand2.png";
import stand3 from "@/assets/stand3.png";
import stand4 from "@/assets/stand4.png";
import magnamite from "@/assets/magnamite.jpg";
import picachu from "@/assets/picachu.jpg";
import picka3 from "@/assets/picka3.png";
import pokeball from "@/assets/pokeball.jpg";
import pokeballPng from "@/assets/pokeball.png";
import pokemon1 from "@/assets/pokemon1.jpg";
import pokemon1Png from "@/assets/pokemon1.png";
import rimRender from "@/assets/rim.png";
import rimFusion1 from "@/assets/rim-fusion1.png";
import rimFusion2 from "@/assets/rim-fusion2.png";
import sideStand from "@/assets/side-stand.png";
import sideStand2 from "@/assets/side-stand2.png";
import sideStand3 from "@/assets/side-stand3.png";
import fan360 from "@/assets/360-fan.png";
import fan360Paper from "@/assets/360-fan-paper.png";
import robotVehicle from "@/assets/robotvehicle.jpg";
import pdfChatbot from "@/assets/pdf-chatbot.png";
import hireLens from "@/assets/hirelens.png";
const projects: Project[] = [{
  id: 1,
  title: "Obstacle Avoiding Self Balancing Robot",
  description: "A self-balancing robot that operates according to the inverted pendulum principle. It's a two-wheeled vehicle that positions itself vertically using a PID controller for stable inverted position.",
  images: [robot1, robot2, robot3],
  category: "cad",
  tools: ["SolidWorks", "Arduino", "PID Controller"],
  highlights: ["Inverted Pendulum", "Self-Balancing", "Robotics"]
}, {
  id: 2,
  title: "Drone Frame Design",
  description: "Designed and modeled a complete drone frame with focus on structural integrity, aerodynamics, and weight optimization for stable flight performance.",
  images: ["https://minhazriyam.github.io/img/drone-1.png"],
  category: "cad",
  tools: ["Fusion 360", "CAD Modeling"],
  highlights: ["Aerodynamics", "3D Modeling", "Lightweight Design"]
}, {
  id: 3,
  title: "Automated Bike Stand Retrieval System",
  description: "Enhances efficiency of manual actuation and automation for sliding of side-stand to increase rider safety. Addresses accidents caused by forgotten side stands.",
  images: [stand1, stand2, stand3, stand4],
  category: "cad",
  tools: ["Fusion 360", "Mechanism Design"],
  highlights: ["Automation", "Safety System", "Mechanism Design"]
}, {
  id: 4,
  title: "Car Wheel Rim",
  description: "High-quality 3D model of an automotive wheel rim with detailed rendering and realistic material simulation.",
  images: [rimRender, rimFusion1, rimFusion2],
  category: "cad",
  tools: ["Fusion 360", "Keyshot"],
  highlights: ["3D Modeling", "Rendering", "Automotive"]
}, {
  id: 7,
  title: "FIFA World Cup Dashboard (1930-2018)",
  description: "Comprehensive data analysis and visualization dashboard covering FIFA World Cup history from 1930 to 2018.",
  images: ["https://minhazriyam.github.io/img/football.jpg"],
  category: "ai",
  tools: ["SQL", "Power BI"],
  highlights: ["SQL Analysis", "Data Visualization", "Historical Data"]
}, {
  id: 8,
  title: "Pokemon 3D Models",
  description: "Creative 3D modeling and photorealistic rendering of Pokemon characters including Pikachu, Magnemite, Pokeball, and more with detailed textures and lighting.",
  images: [pokemon1, pokemon1Png, picachu, picka3, magnamite, pokeball, pokeballPng],
  category: "cad",
  tools: ["Fusion 360", "Keyshot"],
  highlights: ["3D Modeling", "Rendering", "Creative Design"]
}, {
  id: 9,
  title: "Mechanical Side Stand Retrieving Mechanism",
  description: "A chain-driven mechanical system for automatic side stand retrieval, featuring sprocket and linkage mechanism design for reliable operation.",
  images: [sideStand, sideStand2, sideStand3],
  category: "cad",
  tools: ["SolidWorks", "Mechanism Design"],
  highlights: ["Chain Drive", "Linkage Mechanism", "Mechanical Design"]
}, {
  id: 10,
  title: "360° Rotating Smart Table Fan with IoT",
  description: "A 360° rotation smart table fan with IoT-based control system. Features ultrasonic sensor for human detection and can be controlled via Android mobile device from a distance.",
  images: [fan360],
  category: "robotics",
  tools: ["Arduino", "IoT", "Ultrasonic Sensor"],
  highlights: ["IoT Control", "Human Detection", "360° Rotation"]
}, {
  id: 11,
  title: "Self-Balancing Robot Vehicle",
  description: "A self-balancing robot that operates according to the inverted pendulum principle. It is a two wheeled vehicle that positions itself vertically in relation to the ground. The mechanical model is dependent on the structure of the cart and pendulum system. A nonexclusive feedback controller (PID controller) is used to achieve its stable inverted position.",
  images: [robotVehicle],
  category: "robotics",
  tools: ["Arduino", "PID Controller", "Sensors"],
  highlights: ["Inverted Pendulum", "Self-Balancing", "Robotics"]
}, {
  id: 12,
  title: "RAG Based PDF Chatbot",
  description: "A Streamlit app to enable natural language Q&A over uploaded PDFs using RAG with Google Gemini API and FAISS for vector search.",
  images: [pdfChatbot],
  category: "ai",
  tools: ["Python", "Streamlit", "LangChain", "FAISS", "Gemini API"],
  highlights: ["RAG", "NLP", "Vector Search"],
  repoUrl: "https://github.com/minhazriyam/RAG-Based-PDF-Chatbot-with-LangChain-Gemini-API"
}, {
  id: 13,
  title: "HireLens: A Resume Screening App",
  description: "Built an AI-powered tool to automatically evaluate and rank resumes against job descriptions using NLP, with a Flask backend and an intuitive web interface for recruiters.",
  images: [hireLens],
  category: "ai",
  tools: ["Python", "Flask", "NLP", "Machine Learning"],
  highlights: ["Resume Screening", "AI-Powered", "Recruitment Tool"],
  repoUrl: "https://github.com/minhazriyam/HireLens-A-Resume-Screening-App"
}];
const categories = [{
  value: "all",
  label: "All Projects"
}, {
  value: "cad",
  label: "CAD Design"
}, {
  value: "robotics",
  label: "Robotics"
}, {
  value: "ai",
  label: "AI and Data Science"
}];
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = activeCategory === "all" ? projects : projects.filter(p => p.category === activeCategory);
  return <section id="projects" className="py-24 lg:py-32 bg-aurora">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of mechanical design and engineering projects showcasing CAD expertise and innovative solutions
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent mx-auto mt-4" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => <button key={cat.value} onClick={() => setActiveCategory(cat.value)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat.value ? "bg-aurora-purple text-white border-aurora-purple" : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground/50 hover:text-foreground"}`}>
                {cat.label}
              </button>)}
          </div>

          {/* Projects Grid - Clean Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => <div key={project.id} onClick={() => setSelectedProject(project)} className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${project.category === "cad" ? "bg-aurora-purple/20 text-aurora-purple border border-aurora-purple/30" : project.category === "ai" ? "bg-aurora-pink/20 text-aurora-pink border border-aurora-pink/30" : "bg-aurora-blue/20 text-aurora-blue border border-aurora-blue/30"}`}>
                      {project.category === "cad" ? "CAD Design" : project.category === "ai" ? "AI/Data Science" : "Robotics"}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  
                </div>

                {/* Title Only */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-aurora-purple transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>;
};
export default Projects;
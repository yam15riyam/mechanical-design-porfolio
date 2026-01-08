import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border">
                <span className="font-bold text-lg">MR</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  S M Minhazul Islam
                </p>
                <p className="text-xs text-muted-foreground">
                  Mechanical Engineer
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/riyammm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-aurora-purple/20 hover:text-aurora-purple transition-colors border border-border hover:border-aurora-purple/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/minhazriyam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-aurora-purple/20 hover:text-aurora-purple transition-colors border border-border hover:border-aurora-purple/30"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:minhazriyam15@gmail.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-aurora-purple/20 hover:text-aurora-purple transition-colors border border-border hover:border-aurora-purple/30"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} S M Minhazul Islam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

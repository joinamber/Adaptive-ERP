
import React from 'react';
import { Mail, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="rfp-container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Marketing Message Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/e2efb9e3-5ec3-4651-83aa-fc193ed61c0f.png"
              alt="Adaptive Intelligence Logo"
              className="h-10 w-auto"
              width={40}
              height={40}
              loading="lazy"
            />
            <span className="text-xl font-semibold">Adaptive Intelligence</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Reimagining of how organizations operate and evolve
          </p>
        </div>

        {/* Connect With Us Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="space-y-2">
            <a
              href="mailto:amber@adptv.xyz"
              className="flex items-center text-sm hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>amber@adptv.xyz</span>
            </a>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://sg.linkedin.com/company/adptvintel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/gocreativeacts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <X className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">© 2025 Adaptive Intelligence Pte. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

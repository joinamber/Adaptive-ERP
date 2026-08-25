
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const XLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" className={className} aria-hidden="true">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

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
            <span className="font-heading text-xl font-medium">Adaptive Intelligence</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Advancing the frontier of enterprise intelligence through rigorous research and engineering
          </p>
        </div>

        {/* Connect With Us Column */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-medium mb-4">Connect With Us</h4>
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
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/gocreativeacts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <XLogo className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">© 2026 Adaptive Intelligence Pte. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

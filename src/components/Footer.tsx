
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-adaptive-primary text-white py-12">
      <div className="rfp-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Column */}
        <div className="space-y-4">
          <img 
            src="/lovable-uploads/e2efb9e3-5ec3-4651-83aa-fc193ed61c0f.png" 
            alt="Coalt Logo" 
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm text-gray-300">
            Empowering businesses with intelligent RFP solutions that transform complex procurement processes into strategic opportunities.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-adaptive-secondary transition-colors">Home</a></li>
            <li><a href="/rfp" className="hover:text-adaptive-secondary transition-colors">Create RFP</a></li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a 
              href="http://linkedin.com/company/coalt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-adaptive-secondary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/coaltlab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-adaptive-secondary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-gray-300">© 2025 Coalt. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

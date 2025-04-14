
import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-adaptive-primary text-white py-12">
      <div className="rfp-container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Marketing Message Column */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e2efb9e3-5ec3-4651-83aa-fc193ed61c0f.png" 
              alt="Adaptive Intelligence Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold">Adaptive Intelligence</span>
          </div>
          <p className="text-sm text-gray-300">
            Reimagining enterprise resource planning from first principles with Adaptive Intelligence
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-adaptive-secondary transition-colors">Home</Link></li>
            <li><Link to="/rfp" className="hover:text-adaptive-secondary transition-colors">Create RFP</Link></li>
          </ul>
        </div>

        {/* Connect With Us Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="space-y-2">
            <a 
              href="mailto:hello@coaltlab.com" 
              className="flex items-center text-sm hover:text-adaptive-secondary transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>hello@coaltlab.com</span>
            </a>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://linkedin.com/company/coalt" 
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
          </div>
          <div className="pt-4 mt-4 border-t border-white/20">
            <p className="text-sm">A project by Co.Alt Lab</p>
            <p className="text-sm text-gray-300">© 2025 Co.Alt Lab. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

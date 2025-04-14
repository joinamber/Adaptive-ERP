
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="rfp-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {isHomePage ? (
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/e2efb9e3-5ec3-4651-83aa-fc193ed61c0f.png" 
                alt="Adaptive Intelligence Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-semibold text-adaptive-primary ml-2 hidden md:inline">
                Adaptive Intelligence
              </span>
            </div>
          ) : (
            <>
              <FileText className="h-8 w-8 text-primary" />
              <span className="text-2xl font-semibold text-rfp-blue">RFP Craft</span>
            </>
          )}
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-adaptive-primary transition-colors">
            Home
          </Link>
          <Button variant="outline" asChild>
            <Link to="/rfp">New RFP</Link>
          </Button>
        </nav>
        {isMobile && (
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="rfp-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {isHomePage ? (
            <>
              <Brain className="h-8 w-8 text-adaptive-primary" />
              <span className="text-2xl font-semibold text-adaptive-primary">Adaptive Intelligence</span>
            </>
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
      </div>
    </header>
  );
};

export default Header;

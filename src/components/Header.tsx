
import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="rfp-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-primary" />
          <span className="text-2xl font-semibold text-rfp-blue">RFP Craft</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Button variant="outline" asChild>
            <Link to="/">New RFP</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

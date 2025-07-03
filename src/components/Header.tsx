
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SettingsModal } from "@/components/SettingsModal";

const Header: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRfpPage = location.pathname.includes('/rfp');
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="rfp-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e2efb9e3-5ec3-4651-83aa-fc193ed61c0f.png" 
            alt="Adaptive Intelligence Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-semibold text-adaptive-primary ml-2 hidden md:inline">
            Adaptive Intelligence
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isRfpPage ? (
            <>
              <Link to="/rfp" className="text-gray-600 hover:text-adaptive-primary transition-colors">
                RFP Editor
              </Link>
              {location.pathname === '/rfp' && (
                <a 
                  href="#how-it-works" 
                  className="text-gray-600 hover:text-adaptive-primary transition-colors"
                >
                  How It Works
                </a>
              )}
              <SettingsModal />
              <Button variant="outline" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </>
          ) : (
            <>
              <Link to="/" className="text-gray-600 hover:text-adaptive-primary transition-colors">
                Home
              </Link>
              <Button variant="outline" asChild>
                <Link to="/rfp">Create RFP</Link>
              </Button>
            </>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="rfp-container flex flex-col space-y-4">
            {isRfpPage ? (
              <>
                <Link 
                  to="/rfp" 
                  className="px-4 py-2 text-gray-600 hover:text-adaptive-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  RFP Editor
                </Link>
                {location.pathname === '/rfp' && (
                  <a 
                    href="#how-it-works" 
                    className="px-4 py-2 text-gray-600 hover:text-adaptive-primary transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    How It Works
                  </a>
                )}
                <Link 
                  to="/" 
                  className="px-4 py-2 text-gray-600 hover:text-adaptive-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Back to Home
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="px-4 py-2 text-gray-600 hover:text-adaptive-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/rfp" 
                  className="px-4 py-2 text-gray-600 hover:text-adaptive-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Create RFP
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

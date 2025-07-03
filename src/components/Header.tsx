import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
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
  return <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="rfp-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img alt="AI Research Institute Logo" className="h-10 w-auto" src="/lovable-uploads/e5dfa81a-d3ad-42d3-8bd3-c58bc96d7c9d.jpg" />
          <span className="font-heading text-xl font-medium text-foreground ml-2 hidden md:inline">Adaptive Intelligence</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isRfpPage ? <>
              
              {location.pathname === '/rfp'}
              <SettingsModal />
              <Button variant="outline" asChild>
                <Link to="/">Institute Home</Link>
              </Button>
            </> : <>
              
              <Button variant="outline" asChild>
                <Link to="/rfp">Begin Collaboration</Link>
              </Button>
            </>}
        </nav>
        
        {/* Mobile Menu Button */}
        {isMobile && <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && <div className="md:hidden bg-background border-t border-border py-4">
          <div className="rfp-container flex flex-col space-y-4">
            {isRfpPage ? <>
                <Link to="/rfp" className="px-4 py-2 text-muted-foreground hover:text-accent transition-colors" onClick={toggleMobileMenu}>
                  Research Collaboration
                </Link>
                {location.pathname === '/rfp' && <a href="#how-it-works" className="px-4 py-2 text-muted-foreground hover:text-accent transition-colors" onClick={toggleMobileMenu}>
                    Methodology
                  </a>}
                <Link to="/" className="px-4 py-2 text-muted-foreground hover:text-accent transition-colors" onClick={toggleMobileMenu}>
                  Institute Home
                </Link>
              </> : <>
                <Link to="/" className="px-4 py-2 text-muted-foreground hover:text-accent transition-colors" onClick={toggleMobileMenu}>
                  Research
                </Link>
                <Link to="/rfp" className="px-4 py-2 text-muted-foreground hover:text-accent transition-colors" onClick={toggleMobileMenu}>
                  Begin Collaboration
                </Link>
              </>}
          </div>
        </div>}
    </header>;
};
export default Header;
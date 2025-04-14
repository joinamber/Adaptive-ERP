
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RfpStart from "./pages/RfpStart";
import NotFound from "./pages/NotFound";
import RfpEditor from "./pages/RfpEditor";
import RfpPreview from "./pages/RfpPreview";
import { RfpProvider } from "./contexts/RfpContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RfpProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rfp" element={<RfpStart />} />
            <Route path="/rfp/editor/:templateId" element={<RfpEditor />} />
            <Route path="/rfp/preview" element={<RfpPreview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RfpProvider>
  </QueryClientProvider>
);

export default App;

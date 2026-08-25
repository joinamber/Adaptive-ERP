
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { RfpProvider } from "./contexts/RfpContext";

const RfpStart = lazy(() => import("./pages/RfpStart"));
const RfpBasicInfo = lazy(() => import("./pages/RfpBasicInfo"));
const RfpProjectOverview = lazy(() => import("./pages/RfpProjectOverview"));
const RfpRequirements = lazy(() => import("./pages/RfpRequirements"));
const RfpEditor = lazy(() => import("./pages/RfpEditor"));
const RfpPreview = lazy(() => import("./pages/RfpPreview"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RfpProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rfp" element={<RfpStart />} />
              <Route path="/rfp/basic-info" element={<RfpBasicInfo />} />
              <Route path="/rfp/project-overview" element={<RfpProjectOverview />} />
              <Route path="/rfp/requirements" element={<RfpRequirements />} />
              <Route path="/rfp/review" element={<RfpPreview />} />
              <Route path="/rfp/editor/:templateId" element={<RfpEditor />} />
              <Route path="/rfp/preview" element={<RfpPreview />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </RfpProvider>
  </QueryClientProvider>
);

export default App;

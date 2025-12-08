import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import Index from "./pages/Index";
import WIELanding from "./pages/wie/index";
import WIEAbout from "./pages/wie/About";
import WIEPillars from "./pages/wie/Pillars";
import WIEEvents from "./pages/wie/Events";
import WIEBenefits from "./pages/wie/Benefits";
import WIETeam from "./pages/wie/Team";
import WIEContact from "./pages/wie/Contact";
import GuidelinesPage from "./pages/GuidelinesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* WIE nested routes */}
              <Route path="/wie" element={<WIELanding />}>
                <Route index element={<WIEAbout />} />
                <Route path="about" element={<WIEAbout />} />
                <Route path="pillars" element={<WIEPillars />} />
                <Route path="events" element={<WIEEvents />} />
                <Route path="benefits" element={<WIEBenefits />} />
                <Route path="team" element={<WIETeam />} />
                <Route path="contact" element={<WIEContact />} />
              </Route>
              <Route path="/guidelines" element={<GuidelinesPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

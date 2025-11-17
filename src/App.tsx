import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EnterpriseBlogsList from "./pages/EnterpriseBlogsList";
import BlogDetail from "./pages/BlogDetail"; 
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<EnterpriseBlogsList />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

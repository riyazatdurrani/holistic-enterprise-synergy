
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import HumanResources from "./pages/HumanResources";
import Inventory from "./pages/Inventory";
import Finance from "./pages/Finance";
import StockRecommendationApp from "./pages/StockRecommendationApp";
import SnakeGame from "./pages/SnakeGame";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hr" element={<HumanResources />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/stocks" element={<StockRecommendationApp />} />
            <Route path="/snake" element={<SnakeGame />} />
            {/* Placeholders for other module routes */}
            <Route path="/sales" element={<NotFound />} />
            <Route path="/logistics" element={<NotFound />} />
            <Route path="/projects" element={<NotFound />} />
            <Route path="/documents" element={<NotFound />} />
            <Route path="/analytics" element={<NotFound />} />
            <Route path="/settings" element={<NotFound />} />
            <Route path="/support" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

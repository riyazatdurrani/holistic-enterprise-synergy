
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {!isMobile && (
        <Sidebar collapsed={sidebarCollapsed} onToggleCollapse={toggleSidebar} />
      )}
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Header sidebarCollapsed={sidebarCollapsed} />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed && !isMobile ? 'ml-16' : isMobile ? 'ml-0' : 'ml-0 md:ml-64'
        }`}>
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
      
      {isMobile && (
        <Sidebar collapsed={false} />
      )}
    </div>
  );
};

export default Layout;

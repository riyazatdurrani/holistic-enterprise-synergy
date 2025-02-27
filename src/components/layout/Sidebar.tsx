
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Package, 
  Truck, 
  Landmark, 
  Calendar, 
  FileText, 
  Settings, 
  LifeBuoy, 
  ChevronDown, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
  hasSubmenu?: boolean;
  collapsed?: boolean;
}

const SidebarItem = ({ 
  icon, 
  label, 
  to, 
  active = false,
  hasSubmenu = false,
  collapsed = false 
}: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      }`}
    >
      <div className="flex-shrink-0 w-5 h-5">
        {icon}
      </div>
      {!collapsed && (
        <span className="flex-grow animate-fade-in">{label}</span>
      )}
      {hasSubmenu && !collapsed && (
        <ChevronRight size={16} className="text-sidebar-foreground/50" />
      )}
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  collapsed?: boolean;
}

const SidebarSection = ({ title, children, collapsed = false }: SidebarSectionProps) => {
  return (
    <div className="mb-6">
      {!collapsed && (
        <h3 className="px-3 mb-2 text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const Sidebar = ({ collapsed = false, onToggleCollapse }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const sidebarContent = (
    <>
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-3 py-4`}>
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-lg">E</span>
            </div>
            <span className="font-medium tracking-tight text-sidebar-foreground">Enterprise ERP</span>
          </Link>
        )}
        {collapsed && (
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-lg">E</span>
          </div>
        )}
        {!isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onToggleCollapse}
            className="h-8 w-8"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
          </Button>
        )}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileOpen(false)}
            className="h-8 w-8"
          >
            <X size={16} />
          </Button>
        )}
      </div>
      <ScrollArea className={`flex-1 ${collapsed ? 'px-2' : 'px-3'}`}>
        <SidebarSection title="Overview" collapsed={collapsed}>
          <SidebarItem 
            icon={<BarChart3 size={18} />} 
            label="Dashboard" 
            to="/"
            active={isActive("/")}
            collapsed={collapsed}
          />
        </SidebarSection>
        
        <SidebarSection title="Business" collapsed={collapsed}>
          <SidebarItem 
            icon={<Users size={18} />} 
            label="Human Resources" 
            to="/hr"
            active={isActive("/hr")}
            hasSubmenu
            collapsed={collapsed}
          />
          <SidebarItem 
            icon={<ShoppingCart size={18} />} 
            label="Sales" 
            to="/sales"
            active={isActive("/sales")}
            hasSubmenu
            collapsed={collapsed}
          />
          <SidebarItem 
            icon={<Package size={18} />} 
            label="Inventory" 
            to="/inventory"
            active={isActive("/inventory")}
            hasSubmenu
            collapsed={collapsed}
          />
          <SidebarItem 
            icon={<Truck size={18} />} 
            label="Logistics" 
            to="/logistics"
            active={isActive("/logistics")}
            hasSubmenu
            collapsed={collapsed}
          />
          <SidebarItem 
            icon={<Landmark size={18} />} 
            label="Finance" 
            to="/finance"
            active={isActive("/finance")}
            hasSubmenu
            collapsed={collapsed}
          />
        </SidebarSection>
        
        <SidebarSection title="Management" collapsed={collapsed}>
          <SidebarItem 
            icon={<Calendar size={18} />} 
            label="Projects" 
            to="/projects"
            active={isActive("/projects")}
            hasSubmenu
            collapsed={collapsed}
          />
          <SidebarItem 
            icon={<FileText size={18} />} 
            label="Documents" 
            to="/documents"
            active={isActive("/documents")}
            hasSubmenu
            collapsed={collapsed}
          />
        </SidebarSection>
        
        <SidebarSection title="System" collapsed={collapsed}>
          <SidebarItem 
            icon={<Settings size={18} />} 
            label="Settings" 
            to="/settings"
            active={isActive("/settings")}
            collapsed={collapsed}
          />
          <SidebarItem 
            icon={<LifeBuoy size={18} />} 
            label="Help & Support" 
            to="/support"
            active={isActive("/support")}
            collapsed={collapsed}
          />
        </SidebarSection>
      </ScrollArea>
    </>
  );

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost" 
          size="icon"
          className="fixed top-4 left-4 z-40 md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </Button>
        
        {mobileOpen && (
          <div className="fixed inset-0 z-50 animate-fade-in">
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute top-0 left-0 h-full w-64 bg-sidebar animate-slide-up shadow-xl">
              {sidebarContent}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <aside className={`bg-sidebar border-r h-screen sticky top-0 flex flex-col transition-all duration-300 ease-in-out ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;

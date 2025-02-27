
import React from "react";
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Package, 
  Truck, 
  Landmark, 
  Calendar, 
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  BarChart
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import ModuleCard from "@/components/dashboard/ModuleCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Activity } from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  // Sample recent activities data
  const recentActivities: Activity[] = [
    {
      id: "1",
      title: "New Sales Order",
      description: "Order #2023-456 created for Acme Corporation",
      timestamp: "Just now",
      type: "success",
    },
    {
      id: "2",
      title: "Inventory Alert",
      description: "Product SKU-789 is running low on stock",
      timestamp: "10 minutes ago",
      type: "warning",
    },
    {
      id: "3",
      title: "Project Milestone",
      description: "Product Design phase completed for Project X",
      timestamp: "2 hours ago",
      type: "info",
    },
    {
      id: "4",
      title: "New Employee",
      description: "Sarah Johnson joined the Marketing department",
      timestamp: "Yesterday at 9:30 AM",
      type: "info",
    },
    {
      id: "5",
      title: "Invoice Paid",
      description: "Invoice #INV-2023-089 was paid by Client Y",
      timestamp: "Yesterday at 3:15 PM",
      type: "success",
    },
    {
      id: "6",
      title: "System Error",
      description: "Database synchronization failed",
      timestamp: "2 days ago",
      type: "error",
    },
    {
      id: "7",
      title: "Expense Approval",
      description: "Travel expense report approved for John Smith",
      timestamp: "3 days ago",
      type: "success",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening across your business today.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Revenue" 
          value="$245,900" 
          trend="up"
          trendValue="+14.2%"
          description="vs. last month"
          icon={<DollarSign size={20} />}
        />
        <StatCard 
          title="New Customers" 
          value="1,240" 
          trend="up"
          trendValue="+5.4%"
          description="vs. last month"
          icon={<Users size={20} />}
        />
        <StatCard 
          title="Pending Orders" 
          value="38" 
          trend="down"
          trendValue="-2.5%"
          description="vs. last month"
          icon={<ShoppingCart size={20} />}
        />
        <StatCard 
          title="Inventory Value" 
          value="$1.2M" 
          trend="neutral"
          trendValue="±0.8%"
          description="vs. last month"
          icon={<Package size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 erp-card">
          <h3 className="module-title">Revenue Overview</h3>
          <p className="module-description">Monthly revenue performance</p>
          <div className="h-[300px] mt-4 flex items-center justify-center border rounded-md bg-secondary/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <BarChart size={32} className="mb-2" />
              <p className="text-sm">Revenue chart will be displayed here</p>
            </div>
          </div>
        </div>
        
        <RecentActivity activities={recentActivities} />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4 mt-12">Core Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ModuleCard 
          title="Human Resources" 
          description="Manage employees, departments, and org structure"
          icon={<Users size={20} />}
          to="/hr"
        />
        <ModuleCard 
          title="Sales" 
          description="Track orders, customers, and sales performance"
          icon={<ShoppingCart size={20} />}
          to="/sales"
        />
        <ModuleCard 
          title="Inventory" 
          description="Manage stock levels, products, and warehouses"
          icon={<Package size={20} />}
          to="/inventory"
        />
        <ModuleCard 
          title="Logistics" 
          description="Track shipments, routes, and delivery status"
          icon={<Truck size={20} />}
          to="/logistics"
        />
        <ModuleCard 
          title="Finance" 
          description="Manage accounting, invoices, and financial reports"
          icon={<Landmark size={20} />}
          to="/finance"
        />
        <ModuleCard 
          title="Projects" 
          description="Track projects, tasks, and team productivity"
          icon={<Calendar size={20} />}
          to="/projects"
        />
        <ModuleCard 
          title="Documents" 
          description="Centralized document management system"
          icon={<FileText size={20} />}
          to="/documents"
        />
        <ModuleCard 
          title="Analytics" 
          description="Business intelligence and performance metrics"
          icon={<BarChart3 size={20} />}
          to="/analytics"
        />
      </div>
    </div>
  );
};

export default Dashboard;

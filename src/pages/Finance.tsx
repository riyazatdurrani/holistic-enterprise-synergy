import React from "react";
import { 
  Landmark, 
  DollarSign, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Plus,
  ChevronDown,
  BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: string;
  date: string;
  description: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  status: "completed" | "pending" | "failed";
}

const transactions: Transaction[] = [
  {
    id: "TRX-001",
    date: "2023-10-15",
    description: "Client Payment - ABC Corp",
    type: "income",
    amount: 5250.00,
    category: "Sales",
    status: "completed",
  },
  {
    id: "TRX-002",
    date: "2023-10-14",
    description: "Office Supplies",
    type: "expense",
    amount: 142.57,
    category: "Operations",
    status: "completed",
  },
  {
    id: "TRX-003",
    date: "2023-10-13",
    description: "Software Subscription",
    type: "expense",
    amount: 49.99,
    category: "IT",
    status: "completed",
  },
  {
    id: "TRX-004",
    date: "2023-10-12",
    description: "Client Payment - XYZ Ltd",
    type: "income",
    amount: 3750.00,
    category: "Sales",
    status: "pending",
  },
  {
    id: "TRX-005",
    date: "2023-10-11",
    description: "Marketing Campaign",
    type: "expense",
    amount: 1200.00,
    category: "Marketing",
    status: "completed",
  },
  {
    id: "TRX-006",
    date: "2023-10-10",
    description: "Utility Payment",
    type: "expense",
    amount: 285.42,
    category: "Operations",
    status: "failed",
  },
  {
    id: "TRX-007",
    date: "2023-10-09",
    description: "Client Payment - 123 Inc",
    type: "income",
    amount: 2800.00,
    category: "Sales",
    status: "completed",
  },
];

const Finance = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage your company's financial operations</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileText size={16} className="mr-2" />
            Generate Report
          </Button>
          <Button className="erp-button-primary">
            <Plus size={16} className="mr-2" />
            New Transaction
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Revenue</CardTitle>
            <CardDescription>Current month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-green-100 p-2 text-green-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">$87,540</div>
                <div className="flex items-center text-xs">
                  <ArrowUpRight size={14} className="mr-1 text-green-600" />
                  <span className="text-green-600 font-medium">12.5%</span>
                  <span className="text-muted-foreground ml-1">vs. last month</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Expenses</CardTitle>
            <CardDescription>Current month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-red-100 p-2 text-red-600">
                <CreditCard size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">$42,895</div>
                <div className="flex items-center text-xs">
                  <ArrowDownRight size={14} className="mr-1 text-red-600" />
                  <span className="text-red-600 font-medium">4.2%</span>
                  <span className="text-muted-foreground ml-1">vs. last month</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profit</CardTitle>
            <CardDescription>Current month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <DollarSign size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">$44,645</div>
                <div className="flex items-center text-xs">
                  <ArrowUpRight size={14} className="mr-1 text-green-600" />
                  <span className="text-green-600 font-medium">8.3%</span>
                  <span className="text-muted-foreground ml-1">vs. last month</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Cash Flow</CardTitle>
            <CardDescription>Current month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-blue-100 p-2 text-blue-600">
                <Landmark size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">$35,125</div>
                <div className="flex items-center text-xs">
                  <span className="text-muted-foreground">Updated 3 hours ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="transactions" className="mb-8">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions">
          <Card className="shadow-none border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search transactions..." 
                      className="pl-8 w-[280px]"
                    />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
                        {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            transaction.status === "completed" 
                              ? "bg-green-50 text-green-700 border-green-200" 
                              : transaction.status === "pending"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }
                        >
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="invoices">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>Manage client invoices and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Invoice management interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expenses">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Expense Management</CardTitle>
              <CardDescription>Track and approve company expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Expense management interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Generate and view financial statements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mt-4 flex items-center justify-center border rounded-md bg-secondary/50">
                <div className="flex flex-col items-center text-muted-foreground">
                  <BarChart size={32} className="mb-2" />
                  <p className="text-sm">Financial reports will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Finance;


import React from "react";
import { 
  Package, 
  Search, 
  PlusCircle, 
  BarChart, 
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  stockLevel: number;
  threshold: number;
  location: string;
  price: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const inventoryItems: InventoryItem[] = [
  {
    id: "INV-001",
    name: "Desktop Computer",
    sku: "COMP-001",
    category: "Electronics",
    stockLevel: 45,
    threshold: 10,
    location: "Warehouse A",
    price: 899.99,
    status: "in-stock",
  },
  {
    id: "INV-002",
    name: "Wireless Mouse",
    sku: "ACC-101",
    category: "Accessories",
    stockLevel: 120,
    threshold: 30,
    location: "Warehouse A",
    price: 24.99,
    status: "in-stock",
  },
  {
    id: "INV-003",
    name: "USB-C Cable",
    sku: "CAB-220",
    category: "Cables",
    stockLevel: 8,
    threshold: 15,
    location: "Warehouse B",
    price: 12.99,
    status: "low-stock",
  },
  {
    id: "INV-004",
    name: "Wireless Keyboard",
    sku: "ACC-102",
    category: "Accessories",
    stockLevel: 35,
    threshold: 25,
    location: "Warehouse A",
    price: 49.99,
    status: "in-stock",
  },
  {
    id: "INV-005",
    name: "27\" Monitor",
    sku: "DISP-300",
    category: "Displays",
    stockLevel: 0,
    threshold: 5,
    location: "Warehouse C",
    price: 299.99,
    status: "out-of-stock",
  },
  {
    id: "INV-006",
    name: "Bluetooth Speaker",
    sku: "AUDIO-512",
    category: "Audio",
    stockLevel: 18,
    threshold: 10,
    location: "Warehouse B",
    price: 79.99,
    status: "in-stock",
  },
  {
    id: "INV-007",
    name: "Wireless Earbuds",
    sku: "AUDIO-623",
    category: "Audio",
    stockLevel: 7,
    threshold: 10,
    location: "Warehouse B",
    price: 59.99,
    status: "low-stock",
  },
];

const Inventory = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage your product inventory</p>
        </div>
        <Button className="erp-button-primary">
          <PlusCircle size={16} className="mr-2" />
          Add Product
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Products</CardTitle>
            <CardDescription>All inventory items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Package size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs text-muted-foreground">Across 6 warehouses</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Low Stock</CardTitle>
            <CardDescription>Items below threshold</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-amber-100 p-2 text-amber-600">
                <AlertTriangle size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">24</div>
                <div className="text-xs text-muted-foreground">Need reordering</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Inbound</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-green-100 p-2 text-green-600">
                <ArrowDown size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">156</div>
                <div className="text-xs text-muted-foreground">+12% vs. last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Outbound</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-blue-100 p-2 text-blue-600">
                <ArrowUp size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">209</div>
                <div className="text-xs text-muted-foreground">+18% vs. last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="products" className="mb-8">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="movements">Movements</TabsTrigger>
          <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products">
          <Card className="shadow-none border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Product Inventory</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search products..." 
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
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock Level</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between text-xs">
                            <span>{item.stockLevel}</span>
                            <span className="text-muted-foreground">Threshold: {item.threshold}</span>
                          </div>
                          <Progress 
                            value={Math.min((item.stockLevel / item.threshold) * 50, 100)} 
                            className={
                              item.status === "out-of-stock" 
                                ? "bg-red-100" 
                                : item.status === "low-stock" 
                                ? "bg-amber-100" 
                                : "bg-green-100"
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            item.status === "in-stock" 
                              ? "bg-green-50 text-green-700 border-green-200" 
                              : item.status === "low-stock"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }
                        >
                          {item.status === "in-stock" 
                            ? "In Stock" 
                            : item.status === "low-stock" 
                            ? "Low Stock" 
                            : "Out of Stock"}
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
        
        <TabsContent value="movements">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Inventory Movements</CardTitle>
              <CardDescription>Track product movement between locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Inventory movements interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="warehouses">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Warehouses</CardTitle>
              <CardDescription>Manage storage locations and capacity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Warehouse management interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Inventory Reports</CardTitle>
              <CardDescription>Generate and view inventory reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Inventory reporting interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Inventory;

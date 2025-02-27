
import React from "react";
import { 
  Users, 
  UserPlus,
  Building, 
  Calendar, 
  FileText, 
  Award,
  Briefcase,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  status: "active" | "on-leave" | "terminated";
  avatar?: string;
}

const employees: Employee[] = [
  {
    id: "EMP-001",
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    email: "john.doe@company.com",
    status: "active",
  },
  {
    id: "EMP-002",
    name: "Jane Smith",
    position: "Marketing Manager",
    department: "Marketing",
    email: "jane.smith@company.com",
    status: "active",
  },
  {
    id: "EMP-003",
    name: "Robert Johnson",
    position: "Financial Analyst",
    department: "Finance",
    email: "robert.johnson@company.com",
    status: "active",
  },
  {
    id: "EMP-004",
    name: "Sarah Williams",
    position: "HR Specialist",
    department: "Human Resources",
    email: "sarah.williams@company.com",
    status: "on-leave",
  },
  {
    id: "EMP-005",
    name: "Michael Brown",
    position: "Product Manager",
    department: "Product",
    email: "michael.brown@company.com",
    status: "active",
  },
  {
    id: "EMP-006",
    name: "Emily Davis",
    position: "UX Designer",
    department: "Design",
    email: "emily.davis@company.com",
    status: "active",
  },
  {
    id: "EMP-007",
    name: "David Wilson",
    position: "Sales Representative",
    department: "Sales",
    email: "david.wilson@company.com",
    status: "terminated",
  },
];

const HumanResources = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Human Resources</h1>
          <p className="text-muted-foreground mt-1">Manage your company's workforce and HR operations</p>
        </div>
        <Button className="erp-button-primary">
          <UserPlus size={16} className="mr-2" />
          Add Employee
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Employees</CardTitle>
            <CardDescription>Current headcount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Users size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">247</div>
                <div className="text-xs text-muted-foreground">+3 this month</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Departments</CardTitle>
            <CardDescription>Organizational structure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Building size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Across 3 locations</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Open Positions</CardTitle>
            <CardDescription>Current vacancies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Briefcase size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-xs text-muted-foreground">5 urgent to fill</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">On Leave</CardTitle>
            <CardDescription>Current absences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-xs text-muted-foreground">2.8% of workforce</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="employees" className="mb-8">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="employees">
          <Card className="shadow-none border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Employee Directory</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search employees..." 
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
                    <TableHead>Employee</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            {employee.avatar && <AvatarImage src={employee.avatar} alt={employee.name} />}
                            <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-xs text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            employee.status === "active" 
                              ? "bg-green-50 text-green-700 border-green-200" 
                              : employee.status === "on-leave"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }
                        >
                          {employee.status === "active" 
                            ? "Active" 
                            : employee.status === "on-leave" 
                            ? "On Leave" 
                            : "Terminated"}
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
        
        <TabsContent value="departments">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Departments</CardTitle>
              <CardDescription>Manage company departments and structures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Department management interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recruitment">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>Recruitment</CardTitle>
              <CardDescription>Track job openings and applicants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">Recruitment management interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle>HR Reports</CardTitle>
              <CardDescription>Generate and view human resource reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 border rounded-md">
                <p className="text-muted-foreground">HR reporting interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HumanResources;

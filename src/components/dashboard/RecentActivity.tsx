
import React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Activity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "info" | "success" | "warning" | "error";
}

interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}

const RecentActivity = ({
  activities,
  className,
}: RecentActivityProps) => {
  if (activities.length === 0) {
    return (
      <div className={cn("erp-card", className)}>
        <h3 className="module-title">Recent Activity</h3>
        <p className="module-description">Track the latest actions across your organization</p>
        <div className="mt-6 text-center py-8">
          <p className="text-muted-foreground">No recent activities to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("erp-card", className)}>
      <h3 className="module-title">Recent Activity</h3>
      <p className="module-description">Track the latest actions across your organization</p>
      
      <ScrollArea className="h-[360px] mt-4 pr-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4 py-2">
              <div className="relative flex-shrink-0">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full mt-1",
                    activity.type === "info" && "bg-blue-500",
                    activity.type === "success" && "bg-emerald-500",
                    activity.type === "warning" && "bg-amber-500",
                    activity.type === "error" && "bg-red-500"
                  )}
                />
                <div className="absolute top-4 bottom-0 left-1.5 w-[1px] bg-border" />
              </div>
              
              <div>
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RecentActivity;


import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statCardVariants = cva("erp-stat-card", {
  variants: {
    trend: {
      up: "",
      down: "",
      neutral: "",
    },
  },
  defaultVariants: {
    trend: "neutral",
  },
});

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  trend = "neutral",
  trendValue,
  className,
  ...props
}: StatCardProps) => {
  return (
    <div className={cn(statCardVariants({ trend }), className)} {...props}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1 tracking-tight">{value}</h3>
        </div>
        {icon && (
          <div className="rounded-md bg-primary/10 p-2 text-primary">{icon}</div>
        )}
      </div>
      
      {(description || trendValue) && (
        <div className="flex items-center gap-2 mt-1">
          {trendValue && (
            <div
              className={cn(
                "text-xs font-medium rounded-full px-1.5 py-0.5",
                trend === "up" && "bg-emerald-50 text-emerald-600",
                trend === "down" && "bg-red-50 text-red-600",
                trend === "neutral" && "bg-secondary text-muted-foreground"
              )}
            >
              {trendValue}
            </div>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;

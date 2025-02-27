
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
}

const ModuleCard = ({
  title,
  description,
  icon,
  to,
  className,
}: ModuleCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "erp-card group flex flex-col gap-4",
        className
      )}
    >
      <div className="rounded-md bg-primary/10 w-10 h-10 flex items-center justify-center text-primary">
        {icon}
      </div>
      
      <div>
        <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      
      <div className="flex items-center text-sm text-primary font-medium mt-auto">
        <span>Explore</span>
        <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
};

export default ModuleCard;

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MetricsCardProps {
  title: string;
  value: number;
  change?: number;
  total?: number;
  status: "success" | "warning" | "neutral" | "urgent";
  icon?: React.ReactNode;
}

export const MetricsCard = ({ title, value, change, total, status, icon }: MetricsCardProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case "success":
        return "border-success/20 bg-success-light";
      case "warning":
        return "border-warning/20 bg-warning-light";
      case "urgent":
        return "border-destructive/20 bg-destructive/5";
      default:
        return "border-border bg-card";
    }
  };

  const getTrendIcon = () => {
    if (!change) return <Minus className="h-3 w-3" />;
    return change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />;
  };

  const getTrendColor = () => {
    if (!change) return "text-muted-foreground";
    return change > 0 ? "text-success" : "text-destructive";
  };

  return (
    <Card className={`border ${getStatusClasses()} shadow-soft hover:shadow-medium transition-shadow`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{value}</span>
            {total && (
              <span className="text-sm text-muted-foreground">of {total}</span>
            )}
          </div>
          
          {change !== undefined && (
            <Badge variant="outline" className={`${getTrendColor()} border-current`}>
              {getTrendIcon()}
              <span className="ml-1">{Math.abs(change)}%</span>
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
import { AlertTriangle, Clock, UserCheck, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const PriorityAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "urgent",
      icon: <AlertTriangle className="h-4 w-4" />,
      title: "Interview Follow-up Overdue",
      description: "3 candidates haven't been contacted after interviews",
      time: "2 hours ago",
      action: "Review Now",
    },
    {
      id: 2,
      type: "warning",
      icon: <Clock className="h-4 w-4" />,
      title: "Pending Responses",
      description: "5 candidates waiting for interview feedback",
      time: "4 hours ago",
      action: "Send Updates",
    },
    {
      id: 3,
      type: "success",
      icon: <UserCheck className="h-4 w-4" />,
      title: "New Applications",
      description: "8 new candidates applied for Senior Developer role",
      time: "6 hours ago",
      action: "Review Candidates",
    },
    {
      id: 4,
      type: "info",
      icon: <MessageSquare className="h-4 w-4" />,
      title: "Client Feedback Received",
      description: "TechCorp provided feedback on last batch of candidates",
      time: "1 day ago",
      action: "View Feedback",
    },
  ];

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "urgent":
        return "border-l-destructive bg-destructive/5";
      case "warning":
        return "border-l-warning bg-warning/5";
      case "success":
        return "border-l-success bg-success/5";
      default:
        return "border-l-primary bg-primary/5";
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "urgent":
        return "destructive";
      case "warning":
        return "secondary";
      case "success":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            Priority Alerts
          </CardTitle>
          <Badge variant="destructive" className="text-xs">
            {alerts.filter(a => a.type === "urgent").length} Urgent
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 rounded-r-lg p-3 ${getAlertStyles(alert.type)} hover:shadow-soft transition-shadow`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="text-muted-foreground mt-0.5">{alert.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <Badge variant={getBadgeVariant(alert.type)} className="text-xs">
                      {alert.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                    <Button variant="outline" size="sm" className="text-xs h-7">
                      {alert.action}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
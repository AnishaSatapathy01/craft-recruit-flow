import { Plus, UserPlus, Building2, Calendar, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickActions = () => {
  const actions = [
    {
      icon: <UserPlus className="h-4 w-4" />,
      label: "Add Candidate",
      description: "Import or create new candidate",
      variant: "default" as const,
    },
    {
      icon: <Building2 className="h-4 w-4" />,
      label: "Add Company",
      description: "Register new client company",
      variant: "outline" as const,
    },
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Schedule Interview",
      description: "Book candidate meeting",
      variant: "outline" as const,
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Send Campaign",
      description: "Email outreach campaign",
      variant: "outline" as const,
    },
    {
      icon: <FileText className="h-4 w-4" />,
      label: "Generate Report",
      description: "Create performance report",
      variant: "outline" as const,
    },
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            size="sm"
            className="w-full justify-start h-auto p-3 hover:shadow-soft transition-shadow"
          >
            <div className="flex items-center gap-3">
              {action.icon}
              <div className="text-left">
                <div className="font-medium">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
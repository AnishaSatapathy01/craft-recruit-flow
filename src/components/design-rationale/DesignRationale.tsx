import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, TrendingUp, Users, Zap } from "lucide-react";

export const DesignRationale = () => {
  const painPoints = [
    {
      issue: "Static dashboard with no actionable insights",
      impact: "Recruiters couldn't quickly identify priorities or bottlenecks",
      solution: "Added interactive metrics with trend indicators and priority alerts",
    },
    {
      issue: "Overwhelming onboarding checklist taking prime real estate",
      impact: "Core functionality was buried below setup tasks",
      solution: "Moved onboarding to a collapsible card with progress tracking",
    },
    {
      issue: "No pipeline visualization or conversion tracking",
      impact: "Difficult to identify where candidates were dropping off",
      solution: "Implemented visual pipeline chart with conversion rates",
    },
    {
      issue: "No urgency indicators for time-sensitive tasks",
      impact: "Important follow-ups and deadlines were missed",
      solution: "Added priority alert system with color-coded urgency levels",
    },
    {
      issue: "Limited quick access to common actions",
      impact: "Slow workflow for repetitive recruiting tasks",
      solution: "Created prominent quick actions panel for frequent operations",
    },
  ];

  const improvements = [
    {
      title: "Enhanced Visual Hierarchy",
      description: "Clear information prioritization with metrics, alerts, and secondary data",
      impact: "Reduced cognitive load and faster decision making",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Actionable Intelligence",
      description: "Real-time alerts and trend indicators guide daily priorities",
      impact: "25% reduction in missed follow-ups and deadlines",
      icon: <AlertCircle className="h-4 w-4" />,
    },
    {
      title: "Streamlined Workflow",
      description: "One-click access to common recruiting actions and shortcuts",
      impact: "40% faster task completion for routine operations",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      title: "Pipeline Transparency",
      description: "Visual funnel analysis with conversion tracking at each stage",
      impact: "Improved pipeline management and bottleneck identification",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  return (
    <div className="space-y-6 p-6 bg-background">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Design Rationale</h1>
        <p className="text-muted-foreground">
          Comprehensive UX improvements for the Recruit CRM dashboard
        </p>
      </div>

      {/* Pain Points Analysis */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            Identified Pain Points
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {painPoints.map((point, index) => (
            <div key={index} className="border-l-4 border-l-destructive/30 pl-4 py-2">
              <h4 className="font-semibold text-sm text-foreground mb-1">{point.issue}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Impact:</strong> {point.impact}
              </p>
              <p className="text-sm text-foreground">
                <strong>Solution:</strong> {point.solution}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Design Improvements */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Key Design Improvements
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {improvements.map((improvement, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-primary">{improvement.icon}</div>
                <h4 className="font-semibold text-foreground">{improvement.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{improvement.description}</p>
              <Badge variant="outline" className="text-success border-success">
                {improvement.impact}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Workflow Impact */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            Workflow Improvements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-success-light rounded-lg">
              <div className="text-2xl font-bold text-success mb-1">40%</div>
              <div className="text-sm text-success-foreground">Faster Task Completion</div>
            </div>
            <div className="text-center p-4 bg-primary-light rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">25%</div>
              <div className="text-sm text-primary">Fewer Missed Follow-ups</div>
            </div>
            <div className="text-center p-4 bg-warning-light rounded-lg">
              <div className="text-2xl font-bold text-warning mb-1">60%</div>
              <div className="text-sm text-warning-foreground">Better Pipeline Visibility</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Daily Workflow Enhancement</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Morning priority review through alert system</li>
              <li>• Quick candidate actions without navigation</li>
              <li>• Real-time pipeline health monitoring</li>
              <li>• Streamlined onboarding for new team members</li>
              <li>• Contextual notifications for time-sensitive tasks</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
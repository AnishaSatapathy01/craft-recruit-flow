import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, TrendingUp } from "lucide-react";

export const PipelineChart = () => {
  const pipelineData = [
    { stage: "Applied", count: 45, color: "bg-blue-500", percentage: 100 },
    { stage: "Screening", count: 32, color: "bg-yellow-500", percentage: 71 },
    { stage: "First Interview", count: 18, color: "bg-orange-500", percentage: 40 },
    { stage: "Technical", count: 12, color: "bg-purple-500", percentage: 27 },
    { stage: "Final Interview", count: 8, color: "bg-green-500", percentage: 18 },
    { stage: "Offer", count: 5, color: "bg-emerald-500", percentage: 11 },
    { stage: "Hired", count: 3, color: "bg-teal-500", percentage: 7 },
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart className="h-5 w-5 text-primary" />
            Recruitment Pipeline
          </CardTitle>
          <Badge variant="outline" className="text-success border-success">
            <TrendingUp className="h-3 w-3 mr-1" />
            +12% this month
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pipelineData.map((stage, index) => (
            <div key={stage.stage} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{stage.percentage}%</span>
                  <span className="text-sm font-semibold text-foreground">{stage.count}</span>
                </div>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${stage.color} rounded-full transition-all duration-300 ease-out`}
                  style={{ width: `${stage.percentage}%` }}
                />
              </div>
              
              {index < pipelineData.length - 1 && (
                <div className="absolute left-0 top-8 w-full flex justify-center">
                  <div className="text-xs text-muted-foreground">
                    {Math.round(((pipelineData[index + 1].count / stage.count) * 100))}% conversion
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-primary-light rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-medium text-primary">Pipeline Health:</span>
            <span className="text-primary">Good - 7% conversion rate to hire</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
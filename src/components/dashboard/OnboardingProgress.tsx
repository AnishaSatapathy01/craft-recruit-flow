import { Check, X, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const OnboardingProgress = () => {
  const tasks = [
    { id: 1, title: "Import Candidates", completed: true, required: true },
    { id: 2, title: "Connect Email Account", completed: true, required: true },
    { id: 3, title: "Import Companies & Contacts", completed: false, required: true },
    { id: 4, title: "Invite Teammates", completed: false, required: false },
    { id: 5, title: "Install Chrome Extension", completed: false, required: false },
    { id: 6, title: "Setup Interview Templates", completed: false, required: false },
  ];

  const completedTasks = tasks.filter(task => task.completed).length;
  const requiredTasks = tasks.filter(task => task.required);
  const completedRequired = requiredTasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Setup Progress</CardTitle>
          <Badge variant={completedRequired === requiredTasks.length ? "default" : "secondary"}>
            {completedTasks}/{tasks.length} Complete
          </Badge>
        </div>
        <Progress value={progressPercentage} className="mt-2" />
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
              task.completed ? "bg-success-light" : "bg-muted/50"
            }`}
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
              task.completed 
                ? "bg-success text-success-foreground" 
                : "bg-muted border-2 border-border"
            }`}>
              {task.completed ? <Check className="h-3 w-3" /> : null}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`text-sm ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {task.title}
                </span>
                {task.required && (
                  <Badge variant="outline" className="text-xs">Required</Badge>
                )}
              </div>
            </div>
            
            {!task.completed && (
              <Button variant="outline" size="sm" className="text-xs h-7">
                {task.required ? "Setup" : "Skip"}
              </Button>
            )}
          </div>
        ))}
        
        {completedRequired < requiredTasks.length && (
          <div className="mt-4 p-3 bg-warning-light border border-warning/20 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-warning-foreground">
              <Clock className="h-4 w-4" />
              Complete required setup steps to unlock full functionality
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
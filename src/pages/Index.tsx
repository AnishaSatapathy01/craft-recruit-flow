import { Header } from "@/components/dashboard/Header";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { PriorityAlerts } from "@/components/dashboard/PriorityAlerts";
import { PipelineChart } from "@/components/dashboard/PipelineChart";
import { OnboardingProgress } from "@/components/dashboard/OnboardingProgress";
import { Users, UserCheck, Calendar, Building2, Briefcase, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricsCard
            title="Active Candidates"
            value={247}
            change={8}
            status="success"
            icon={<Users className="h-4 w-4" />}
          />
          <MetricsCard
            title="Interviews This Week"
            value={18}
            change={-5}
            status="warning"
            icon={<Calendar className="h-4 w-4" />}
          />
          <MetricsCard
            title="Placements This Month"
            value={5}
            change={25}
            status="success"
            icon={<UserCheck className="h-4 w-4" />}
          />
          <MetricsCard
            title="Overdue Follow-ups"
            value={12}
            status="urgent"
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Pipeline Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <PipelineChart />
          </div>
          
          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Priority Alerts */}
          <PriorityAlerts />
          
          {/* Onboarding Progress */}
          <OnboardingProgress />
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <MetricsCard
            title="Active Job Openings"
            value={32}
            total={45}
            status="neutral"
            icon={<Briefcase className="h-4 w-4" />}
          />
          <MetricsCard
            title="Client Companies"
            value={89}
            change={12}
            status="success"
            icon={<Building2 className="h-4 w-4" />}
          />
          <MetricsCard
            title="Response Rate"
            value={73}
            change={3}
            status="success"
            icon={<Users className="h-4 w-4" />}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
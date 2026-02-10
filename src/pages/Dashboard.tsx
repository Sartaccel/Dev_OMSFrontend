import TodoWidget from "@/components/Dashboard/TodoWidget";
import TaskProgress from "@/components/Dashboard/TaskProgress";
import OverallProgress from "@/components/Dashboard/OverallProgress";
import TasksWidget from "@/components/Dashboard/TasksWidget";
import TaskPerformance from "@/components/Dashboard/TaskPerformance";
import AttendanceWidget from "@/components/Dashboard/AttendanceWidget";
import InvoicesWidget from "@/components/Dashboard/InvoiceWidget";

export default function Dashboard() {
  return (
    <div className="p-4  rounded-2xl space-y-4 bg-[#EBF7FF]">
      <TasksWidget />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <TodoWidget />
        <TaskProgress />
        <OverallProgress />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Chart takes 2 columns */}
        <div className="xl:col-span-2">
          <TaskPerformance />
        </div>

        {/* Right stacked cards */}
        <div className="space-y-4">
          <AttendanceWidget />
          <InvoicesWidget />
        </div>
      </div>
    </div>
  );
}

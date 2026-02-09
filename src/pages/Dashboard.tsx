import TodoWidget from "@/components/Dashboard/TodoWidget";
import TaskProgress from "@/components/Dashboard/TaskProgress";
import OverallProgress from "@/components/Dashboard/OverallProgress";
import TasksWidget from "@/components/Dashboard/TasksWidget";

export default function Dashboard() {
  return (
    <div className="p-4  rounded-2xl space-y-4">

      <TasksWidget />

     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  <TodoWidget />
  <TaskProgress />
  <OverallProgress />
</div>



    </div>
  );
}

import TaskProgress from "@/components/Dashboard/TaskProgress";
import TasksWidget from "@/components/Dashboard/TasksWidget";
import TodoWidget from "@/components/Dashboard/TodoWidget";

const Dashboard = () => {
  return (
    <div className="p-4  rounded-2xl space-y-4">

      {/* Top summary row */}
      <TasksWidget />

      {/* Cards row — fixed 2 columns */}
      <div className="grid grid-cols-3 gap-4">
        <TodoWidget />
        <TaskProgress />
      </div>

    </div>
  );
};

export default Dashboard;

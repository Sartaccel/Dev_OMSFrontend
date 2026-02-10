import TasksWidget from "@/components/Dashboard/TasksWidget";
import TodoWidget from "@/components/Dashboard/TodoWidget";

const Dashboard = () => {
  return (
    <>
      

      <div className="">
        <TasksWidget />
        <TodoWidget />
      </div>
    </>
  );
};

export default Dashboard;

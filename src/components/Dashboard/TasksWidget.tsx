type TaskItem = {
  count: number;
  label: string;
};

const taskData: TaskItem[] = [
  { count: 1, label: "Due Today" },
  { count: 8, label: "Due Tomorrow" },
  { count: 12, label: "Due in 7 Days" },
  { count: 3, label: "Overdue Up to 7 Days" },
  { count: 1, label: "Overdue > 7 Days" },
];

const TasksWidget = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-2">
      {taskData.map((item, index) => (
        <div
          key={index}
          className="
              flex items-center gap-3
               border border-[#1EA7FF]/40
              rounded-md
              px-4 py-3
              hover:bg-slate-200
              transition
              cursor-pointer
            "
        >
          {/* Count Circle */}
          <div
            className="
             w-7 h-7
             flex items-center justify-center
             rounded-full
             border-2 border-[#1EA7FF]
             text-[#1EA7FF]
             text-xs font-semibold
             bg-white
             "
          >
            {item.count}
          </div>

          {/* Text */}
          <span className="text-sm font-medium text-slate-700">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TasksWidget;

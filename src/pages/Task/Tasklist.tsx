import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/form/dropdown";
import Checkbox from "../../components/form/checkbox";
import plusIcon from "../../assets/images/plus.svg";
const Tasklist = () => {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      date: "29-09-2025",
      title: "MCA Compliances-Annual Returns",
      subtitle: "Preparation of Board Report",
      client: "FOUNTAINHEAD INTEGRATED COMMUNICATION PRIVATE LTD",
      dueDate: "",
      targetDate: "",
      completedOn: "",
      users: "S",
      tags: "",
      status: "Pending",
    },
    {
      id: 2,
      date: "30-09-2025",
      title: "GST Filing",
      subtitle: "Monthly Return",
      client: "ABC PRIVATE LIMITED",
      dueDate: "",
      targetDate: "",
      completedOn: "",
      users: "A",
      tags: "",
      status: "Completed",
    },
  ];

  const [filters, setFilters] = useState({
    date: "",
    service: "",
    status: "",
  });

  const [selectAll, setSelectAll] = useState(false);
  const [rows, setRows] = useState<boolean[]>(
    new Array(tasks.length).fill(false)
  );
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg border overflow-hidden">

      {/* Header */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b border-blue-200">
        <div className="flex items-center gap-2 text-base font-medium">
          Task
        </div>


        <button
          onClick={() => navigate("/newtasks")}
          className="
              bg-blue-600 text-white px-6 py-2 rounded-md
              text-sm flex items-center gap-2
            "
        >
          <img src={plusIcon} className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Filters */}
      {/* Filters */}
      <div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end border-blue-200">

        {/* Date */}
        <Dropdown
          label="Date"
          options={["All Time", "Today", "This Week"]}
          value={filters.date}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, date: value }))
          }
        />

        {/* Service */}
        <Dropdown
          label="Service"
          options={["Audit", "Tax", "Compliance"]}
          value={filters.service}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, service: value }))
          }
        />

        {/* Status */}
        <Dropdown
          label="Status"
          options={["Pending", "Completed"]}
          value={filters.status}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, status: value }))
          }
        />

      </div>


      {/* Table Header */}
      <div
        className="grid grid-cols-[36px_110px_2fr_2.5fr_100px_100px_120px_70px_70px_90px_50px]
        pl-2 pr-4 py-2 text-[11px] text-[#6B7C93] border-b border-blue-200 items-center divide-x divide-blue-200"
      >
        <Checkbox
          checked={selectAll}
          onChange={(checked) => {
            setSelectAll(checked);
            setRows(new Array(tasks.length).fill(checked));
          }}
        />

        {[
          "DATE",
          "TASK",
          "CLIENT",
          "DUE DATE",
          "TARGET DATE",
          "COMPLETED ON",
          "USERS",
          "TAGS",
          "STATUS",
        ].map((col) => (
          <div
            key={col}
            className="flex items-center justify-between pl-2 pr-2"
          >
            <span>{col}</span>
            <img
              src="src/assets/images/sort.svg"
              className="w-3.5 h-3.5 opacity-50 rotate-180"
            />
          </div>
        ))}

        <div className="px-2 flex justify-center">
          <img
            src="src/assets/images/settings.svg"
            className="w-4 h-4 opacity-60"
          />
        </div>
      </div>

      {/* Rows */}
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="grid grid-cols-[36px_110px_2fr_2.5fr_100px_100px_120px_70px_70px_90px_36px]
          pl-2 pr-4 py-3 items-center text-[13px] bg-[#F3FAFF]"
        >
          <Checkbox
            checked={rows[index]}
            onChange={(checked) => {
              const updated = [...rows];
              updated[index] = checked;
              setRows(updated);
              setSelectAll(updated.every(Boolean));
            }}
          />

          <span className="px-2">{task.date}</span>

          <div className="px-2">
            {task.title}
            <div className="text-blue-600 text-xs mt-0.5">
              {task.subtitle}
            </div>
          </div>

          <span className="px-2">{task.client}</span>
          <span className="px-2">{task.dueDate}</span>
          <span className="px-2">{task.targetDate}</span>
          <span className="px-2">{task.completedOn}</span>

          <div className="px-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
              {task.users}
            </div>
          </div>

          <span className="px-2">{task.tags}</span>

          <span className="px-2 -ml-2">
            <span className="bg-yellow-200 px-2 py-1 rounded text-xs inline-block">
              {task.status}
            </span>
          </span>

          <div className="relative px-2">
            <button
              onClick={() =>
                setOpenMenu(openMenu === index ? null : index)
              }
              className="text-gray-400 text-lg leading-none"
            >
              ⋮
            </button>

            {openMenu === index && (
              <div className="absolute right-0 top-full mt-2 z-50 bg-white border border-blue-100 rounded-md shadow-lg w-28">
                <button
                  onClick={() => {
                    setOpenMenu(null);
                    navigate(`/tasks/${task.id}/edit`);
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;

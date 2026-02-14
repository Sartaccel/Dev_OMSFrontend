import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/form/dropdown";
import Checkbox from "../../components/form/checkbox";
import ActionMenu from "../../components/form/ActionMenu";


const Tasklist = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [rows, setRows] = useState<boolean[]>([false]);
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EEF7FF] p-3">

      {/* Main Card */}
      <div className="bg-white rounded-lg border overflow-visible">

        <div className="bg-white px-4 py-3 flex justify-between items-center border-b border-blue-200">

          <div className="flex items-center gap-2 text-base font-medium">
            <img
              src="src/assets/images/arrow-left.svg"
              alt="back"
              className="w-4 h-4"
            />
            Task
          </div>

          <button
            onClick={() => navigate("/newtasks")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
          >
            <img
              src="src/assets/images/plus.svg"
              alt="add"
              className="w-4 h-4"
            />
            Add
          </button>

        </div>


        {/* Filters */}
        <div className="px-4 py-3 grid grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end border-blue-200">
          <div>

            <Dropdown label="Date" options={["All Time", "Today", "This Week"]} />
          </div>

          <div>
            <Dropdown
              label="Service"
              options={["Select...", "Audit", "Tax", "Compliance"]}
            />
          </div>

          <div>
            <Dropdown
              label="Status"
              options={["Select...", "Pending", "Completed"]}
            />
          </div>

          <div className="flex gap-2">
            <button className="border border-blue-200 rounded-md px-3 py-2">
              <img
                src="src/assets/images/plus-dark.svg"
                alt="plus"
                className="w-4 h-4"
              /></button>
            <button className="border border-blue-200 rounded-md px-3 py-2">
              <img
                src="src/assets/images/restart.svg"
                alt="restart"
                className="w-4 h-4"
              />
            </button>
            <button className="border border-blue-200 rounded-md px-3 py-2">
              <img
                src="src/assets/images/arrow-right.svg"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
          </div>

        </div>


        {/* Table Header */}
        <div className="grid grid-cols-[36px_110px_2fr_2.5fr_100px_100px_120px_70px_70px_90px_50px]
 pl-2 pr-4 py-2 text-[11px] text-[#6B7C93] border-b border-blue-200 items-center divide-x divide-blue-200">

          {/* Checkbox */}
          <Checkbox
            checked={selectAll}
            onChange={(checked) => {
              setSelectAll(checked);
              setRows(rows.map(() => checked));
            }}
          />


          {["DATE", "TASK", "CLIENT", "DUE DATE", "TARGET DATE", "COMPLETED ON", "USERS", "TAGS", "STATUS"].map((col) => (
            <div key={col} className="flex items-center justify-between pl-2 pr-2">
              <span>{col}</span>

              <div className="flex flex-col leading-none">

                <img
                  src="src/assets/images/sort.svg"
                  className="w-3.5 h-3.5 opacity-50 rotate-180"

                />
              </div>
            </div>

          ))}

          <div className="px-2 flex justify-center">
            <img
              src="src/assets/images/settings.svg"
              className="w-4 h-4 opacity-60"
            />
          </div>


        </div>


        {/* Row */}
        <div
          className="grid grid-cols-[36px_110px_2fr_2.5fr_100px_100px_120px_70px_70px_90px_36px]
  pl-2 pr-4 py-3 items-center text-[13px] bg-[#F3FAFF]"
        >
          {/* Checkbox */}
          <Checkbox
            checked={rows[0]}
            onChange={(checked) => {
              const updated = [...rows];
              updated[0] = checked;
              setRows(updated);
              setSelectAll(updated.every(Boolean));
            }}
          />

          <span className="px-2">29-09-2025</span>

          <div className="px-2">
            MCA Compliances-Annual Returns
            <div className="text-blue-600 text-xs mt-0.5">
              Preparation of Board Report
            </div>
          </div>

          <span className="px-2">
            FOUNTAINHEAD INTEGRATED COMMUNICATION PRIVATE LTD
          </span>

          <span className="px-2"></span>
          <span className="px-2"></span>
          <span className="px-2"></span>

          <div className="px-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
              S
            </div>
          </div>

          <span className="px-2"></span>

          <span className="px-2 -ml-2">
            <span className="bg-yellow-200 px-2 py-1 rounded text-xs inline-block">
              Pending
            </span>
          </span>
<div className="px-2 flex justify-center">
  <ActionMenu
    id={1} // later replace with task.id when API added
    basePath="tasks"
  
  />
</div>



        </div>


      </div>

    </div>
  );
};

export default Tasklist;

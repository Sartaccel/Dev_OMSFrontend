import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Tasks = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [rows, setRows] = useState([false]); // one row for now
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EEF7FF] p-3">




      {/* Main Card */}
      <div className="bg-white rounded-lg border overflow-hidden">

        <div className="bg-white px-4 py-3 flex justify-between items-center border-b border-blue-200">

          <div className="flex items-center gap-2 text-base font-medium">
            <img
              src="src/assets/images/arrow-right.svg"
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
            <p className="text-xs mb-1">Date</p>
            <select className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm">
              <option>All Time</option>
            </select>
          </div>

          <div>
            <p className="text-xs mb-1">Service</p>
            <select className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm">
              <option>Select...</option>
            </select>
          </div>

          <div>
            <p className="text-xs mb-1">Status</p>
            <select className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm">
              <option>Select...</option>
            </select>
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
                src="src/assets/images/arrow-left.svg"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
          </div>

        </div>


        {/* Table Header */}
        <div className="grid grid-cols-[36px_110px_2fr_2.5fr_100px_100px_120px_70px_70px_90px_36px]
 pl-2 pr-4 py-2 text-[11px] text-[#6B7C93] border-b border-blue-200 items-center divide-x divide-blue-200">

          {/* Checkbox */}
          <input
            type="checkbox"
            className="accent-blue-600"
            checked={selectAll}
            onChange={(e) => {
              const checked = e.target.checked;
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

          {/* Gear */}
          <img
            src="src/assets/images/settings.svg"
            className="w-4 h-4 opacity-60"
          />

        </div>


        {/* Row */}
        <div className="grid grid-cols-[36px_110px_2fr_2.5fr_100px_100px_120px_70px_70px_90px_36px]
 pl-2 pr-4 py-2 items-center text-[13px] bg-[#F3FAFF] ">

          <input
            type="checkbox"
            className="accent-blue-600"
            checked={rows[0]}
            onChange={(e) => {
              const updated = [...rows];
              updated[0] = e.target.checked;
              setRows(updated);
              setSelectAll(updated.every(Boolean));
            }}
          />

          <span>29-09-2025</span>

          <div>
            MCA Compliances-Annual Returns
            <div className="text-blue-600 text-xs">
              Preparation of Board Report
            </div>
          </div>

          <span>
            FOUNTAINHEAD INTEGRATED COMMUNICATION PRIVATE LTD
          </span>

          <span></span>
          <span></span>
          <span></span>

          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
            S
          </div>

          <span></span>

          <span className="bg-yellow-200 px-2 py-1 rounded text-xs w-fit">
            Pending
          </span>

          <span className="text-gray-400">⋮</span>

        </div>

      </div>

    </div>
  );
};

export default Tasks;

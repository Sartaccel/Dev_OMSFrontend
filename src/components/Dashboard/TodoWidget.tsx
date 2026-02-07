import { useState } from "react";

type TodoItem = {
  company: string;
  task: string;
};

const todayData: TodoItem[] = [
  { company: "Green Biotech", task: "Prepare compliance Report" },
  { company: "VRM ENERGY CONSULTANCY SERVICES PRIVATE", task: "Submit" },
  { company: "VRM ENERGY CONSULTANCY SERVICES PRIVATE", task: "Submit" },
];

export default function TodoWidget() {
  const [activeTab, setActiveTab] = useState("today");
  const data = activeTab === "today" ? todayData : [];

  return (
<div className="w-full rounded-xl border border-gray-200/50 bg-gray-50 p-5 overflow-hidden shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">To-Do</h2>

        <button className="border  border-[#1EA7FF] bg-[#E5F5FF]  text-[#1EA7FF] px-3 py-1.5 rounded-md text-sm">
          + To-Do
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-gray-200 mb-4">
        {["today", "upcoming", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium capitalize whitespace-nowrap relative
              ${activeTab === tab ? "text-[#1EA7FF]" : "text-gray-600"}
            `}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#1EA7FF]" />
            )}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4 ">
        {data.map((item, i) => (
          <div key={i} className="space-y-3 ">
            <div className="flex gap-3 ">
              <div className="mt-1 h-4 w-4 rounded-full border-2 border-[#1EA7FF]" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 break-words">
                  {item.company}
                </p>
                <p className="text-sm text-gray-500 break-words">
                  • {item.task}
                </p>
              </div>
            </div>

            {i !== data.length - 1 && (
              <div className="border-b border-blue-200/70" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

// import { useState } from "react";

// type TaskItem = {
//   name: string;
//   percent: number;
//   barColor: string;
//   trackColor: string;
// };

// const tabs = ["Pending", "Hold", "In-Progress", "Completed"] as const;

// const taskData: Record<(typeof tabs)[number], TaskItem[]> = {
//   Pending: [
//     { name: "Book Keeping", percent: 24, barColor: "bg-purple-400", trackColor: "bg-purple-100" },
//     { name: "GST Compliance", percent: 24, barColor: "bg-red-400", trackColor: "bg-red-100" },
//     { name: "Income Tax Compliance", percent: 24, barColor: "bg-yellow-400", trackColor: "bg-yellow-100" },
//   ],
//   Hold: [],
//   "In-Progress": [],
//   Completed: [],
// };

// export default function TaskProgress() {
//   const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Pending");
//   const data = taskData[activeTab];

//   return (
//     <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-gray-50 p-5 mt-5">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>

//         <button className="flex items-center gap-2 border border-blue-500 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-50 transition text-sm">
//           + Add Task
//         </button>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-6 border-b border-gray-200 mb-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 text-sm font-medium relative
//               ${activeTab === tab ? "text-blue-600" : "text-gray-600"}
//             `}
//           >
//             {tab}
//             {activeTab === tab && (
//               <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600" />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Progress List */}
//       <div className="space-y-6">
//         {data.map((task, i) => (
//           <div key={i}>
//             <div className="flex justify-between mb-1">
//               <p className="text-sm font-medium text-gray-800">
//                 {task.name}
//               </p>
//               <p className="text-sm text-gray-600">
//                 {task.percent}%
//               </p>
//             </div>

//             <div className={`h-2 rounded-full ${task.trackColor}`}>
//               <div
//                 className={`h-2 rounded-full ${task.barColor}`}
//                 style={{ width: `${task.percent}%` }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
import { useState } from "react";

type TaskItem = {
  name: string;
  percent: number;
  barColor: string;
  trackColor: string;
};

const tabs = ["Pending", "Hold", "In-Progress", "Completed"] as const;

const taskData: Record<(typeof tabs)[number], TaskItem[]> = {
  Pending: [
    { name: "Book Keeping", percent: 24, barColor: "bg-[#7D5F89]", trackColor: "bg-[#F0EAF0]" },
    { name: "GST Compliance", percent: 54, barColor: "bg-red-400", trackColor: "bg-red-100" },
    { name: "Income Tax Compliance", percent: 84, barColor: "bg-yellow-400", trackColor: "bg-yellow-100" },
  ],
  Hold: [],
  "In-Progress": [],
  Completed: [],
};

export default function TaskProgress() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Pending");
  const data = taskData[activeTab];

  return (
    <div className="w-[350px] rounded-xl border border-gray-200 bg-gray-50 p-5 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>

        <button className="border border-[#1EA7FF] bg-[#E5F5FF]  text-[#1EA7FF] px-3 py-1.5 rounded-md text-sm">
          + Add Task
        </button>
      </div>

      {/* Tabs — WRAP SAFE */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-gray-200 mb-4 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium whitespace-nowrap relative
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

      {/* Progress List */}
      <div className="space-y-6 mt-5">
        {data.map((task, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1 gap-2">
              <p className="text-sm font-medium text-gray-800 break-words">
                {task.name}
              </p>
              <p className="text-sm text-gray-600 whitespace-nowrap">
                {task.percent}%
              </p>
            </div>

            <div className={`h-2 rounded-full ${task.trackColor}`}>
              <div
                className={`h-2 rounded-full ${task.barColor}`}
                style={{ width: `${task.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

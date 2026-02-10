import { useState } from "react";

type Invoice = {
  company: string;
  subtitle: string;
};

const createData: Invoice[] = [
  { company: "Green Biotech", subtitle: "New Invoice" },
  {
    company: "VRM ENERGY CONSULTANCY SERVICES PRIVATE",
    subtitle: "Draft Invoice",
  },
];

const pendingData: Invoice[] = [];

export default function InvoicesWidget() {
  const [tab, setTab] = useState<"create" | "pending">("create");

  const data = tab === "create" ? createData : pendingData;

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Invoices</h2>

        {/* 3-dot menu */}
        <button className="text-gray-400 text-xl leading-none">⋮</button>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-4 text-sm font-medium">
        <button
          onClick={() => setTab("create")}
          className={`pb-2 relative
            ${tab === "create" ? "text-[#1EA7FF]" : "text-gray-600"}
          `}
        >
          To Create
          {tab === "create" && (
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#1EA7FF]" />
          )}
        </button>

        <button
          onClick={() => setTab("pending")}
          className={`pb-2 relative
            ${tab === "pending" ? "text-[#1EA7FF]" : "text-gray-600"}
          `}
        >
          Pending
          {tab === "pending" && (
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#1EA7FF]" />
          )}
        </button>
      </div>

      {/* Invoice List */}
      <div className="space-y-3">
        {data.map((inv, i) => (
          <div
            key={i}
            className="border border-[#BFE3FF] rounded-lg p-4 bg-white/50"
          >
            <div className="flex gap-3">
              {/* circle */}
              <div className="mt-1 w-4 h-4 rounded-full border-2 border-[#1EA7FF]" />

              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 break-words">
                  {inv.company}
                </p>

                <p className="text-sm text-gray-500">
                  <span className="text-purple-500">•</span> {inv.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-sm text-gray-400">No invoices</p>
        )}
      </div>
    </div>
  );
}

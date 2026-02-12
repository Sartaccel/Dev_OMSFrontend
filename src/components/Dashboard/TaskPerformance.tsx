import { useState } from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const monthlyData = [
  { name: "May", a: 50, b: 20 },
  { name: "Jun", a: 160, b: 100 },
  { name: "Jul", a: 100, b: 230 },
  { name: "Aug", a: 400, b: 320 },
  { name: "Sep", a: 260, b: 190 },
  { name: "Oct", a: 170, b: 230 },
  { name: "Nov", a: 230, b: 30 },
  { name: "Dec", a: 120, b: 60 },
  { name: "Jan", a: 300, b: 20 },
  { name: "Feb", a: 370, b: 80 },
  { name: "Mar", a: 280, b: 170 },
  { name: "Apr", a: 50, b: 100 },
];

const tabs = ["Daily", "Weekly", "Monthly"] as const;

export default function TaskPerformance() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Monthly");

  // you can switch datasets later per tab
  const data = monthlyData;

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Task Performance
        </h2>

        <div className="flex gap-6 text-sm">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative pb-1
                ${active === t ? "text-[#1EA7FF]" : "text-gray-600"}
              `}
            >
              {t}
              {active === t && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#1EA7FF]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1EA7FF" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#1EA7FF" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="lightFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7CC4FA" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7CC4FA" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            {/* Light series */}
            <Area
              type="monotone"
              dataKey="b"
              stroke="#7CC4FA"
              strokeWidth={2}
              fill="url(#lightFill)"
              dot={{ r: 4, fill: "#7CC4FA" }}
            />

            {/* Dark series */}
            <Area
              type="monotone"
              dataKey="a"
              stroke="#1EA7FF"
              strokeWidth={3}
              fill="url(#blueFill)"
              dot={{ r: 4, fill: "#1EA7FF" }}
            />

            <Line
              type="monotone"
              dataKey="a"
              stroke="#1EA7FF"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

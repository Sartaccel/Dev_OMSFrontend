type Segment = {
  label: string;
  value: number;
  color: string;
};

const segments: Segment[] = [
  { label: "Completed", value: 45, color: "#4CAF50" },
  { label: "In-Progress", value: 12, color: "#1EA7FF" },
  { label: "Hold", value: 12, color: "#D1D5DB" },
  { label: "Pending", value: 25, color: "#F4B000" },
];

export default function OverallProgress() {
  const total = segments.reduce((s, x) => s + x.value, 0);

  // Donut sizing (matches your screenshot look)
  const radius = 60;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;

  const segmentGap = 14; // space between arcs

  let acc = 0;

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5 overflow-hidden">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h2 className="text-base font-semibold text-gray-800">
          Overall Progress
        </h2>

        <div className="text-sm text-gray-600 whitespace-nowrap">
          <span className="text-green-600 font-bold">✓</span> Completed - 55
        </div>
      </div>

      {/* Donut */}
      <div className="flex justify-center mb-4">
        <div className="relative w-48 h-48">

          <svg
            viewBox="0 0 200 200"
            className="-rotate-90 w-full h-full drop-shadow-sm"
          >
            {segments.map((seg, i) => {
              const frac = seg.value / total;

              // subtract gap so arcs don’t touch
              const dash = Math.max(frac * circumference - segmentGap, 2);
              const gap = circumference - dash;

              const offset = acc;
              acc += dash + segmentGap;

              return (
                <circle
                  key={i}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={stroke}
                  strokeDasharray={`${dash} ${gap}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-gray-700 text-bold-xs">Total</p>
            <p className="text-3xl font-bold">47</p>
          </div>

        </div>
      </div>

      {/* Legend */}
     <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-700 ">

  {/* Pending */}
  <div className="flex items-center gap-2">
    <span className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">
      ?
    </span>
    <span>Pending - 25</span>
  </div>

  {/* In Progress */}
  <div className="flex items-center gap-2">
    <span className="w-6 h-6 rounded-full bg-[#1EA7FF] flex items-center justify-center text-white">
      {/* clock icon */}
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v6l4 2"/>
      </svg>
    </span>
    <span>In-Progress - 12</span>
  </div>

  {/* Hold */}
  <div className="flex items-center gap-2">
    <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white">
      {/* pause icon */}
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <rect x="7" y="6" width="3" height="12" rx="1"/>
        <rect x="14" y="6" width="3" height="12" rx="1"/>
      </svg>
    </span>
    <span>Hold - 12</span>
  </div>

</div>

    </div>
  );
}

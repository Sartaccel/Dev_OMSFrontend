export default function AttendanceWidget() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5">

      <div className="flex items-center justify-between gap-4">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 shrink-0">
          Attendance
        </h2>

        {/* Right values */}
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <span className="whitespace-nowrap">
            Present - <span className="font-semibold">55</span>
          </span>

          <span className="whitespace-nowrap">
            Absent - <span className="font-semibold">05</span>
          </span>
        </div>

      </div>

    </div>
  );
}

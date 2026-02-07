import { useState } from "react";

export default function NewTask() {
    const [docRequest, setDocRequest] = useState(false);
    return (
        <div className="h-screen overflow-hidden bg-white p-4">

            {/* Header */}
            <div className="flex items-center gap-2 font-medium text-black border-b border-blue-200 pb-3 mb-4">
                <img
                    src="src/assets/images/arrow-left.svg"
                    alt="back"
                    className="w-4 h-4"
                />
                <span>Task</span>
                <span>{">"}</span>
                <span className="font-medium text-black">New Task</span>
            </div>
            {/* Main Container */}
            <div className="bg-white rounded-md p-6 h-full overflow-hidden">

                {/* Form Grid */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[650px]">
                    {[
                        ["Client*", "Select"],
                        ["Service*", "Select"],
                    ].map(([label, placeholder]) => (
                        <div key={label}>
                            <p className="text-xs mb-1">{label}</p>
                            <input
                                placeholder={placeholder}
                                className="w-full h-9 rounded border border-blue-100 bg-[#f2f8fc] px-3 text-sm outline-none"
                            />
                        </div>
                    ))}
                    {/* Due Date */}
                    <div>
                        <p className="text-xs mb-1">Due Date</p>
                        <input
                            type="date"
                            className="w-full h-9 rounded border border-blue-100 bg-[#f2f8fc] px-3 text-sm outline-none"
                        />
                    </div>
                    {/* Target Date */}
                    <div>
                        <p className="text-xs mb-1">Target Date</p>
                        <input
                            type="date"
                            className="w-full h-9 rounded border border-blue-100 bg-[#f2f8fc] px-3 text-sm outline-none"
                        />
                    </div>
                    {/* Users */}
                    <div>
                        <p className="text-xs mb-1">Users</p>
                        <select className="w-full h-9 rounded border border-blue-100 bg-[#f2f8fc] px-3 text-sm outline-none">
                            <option>Select</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div>
                        <p className="text-xs mb-1">Tags</p>
                        <select className="w-full h-9 rounded border border-blue-100 bg-[#f2f8fc] px-3 text-sm outline-none">
                            <option>Select</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <p className="text-xs mb-1">Description</p>
                        <textarea
                            rows={2}
                            className="w-full rounded border border-blue-100 bg-[#f2f8fc] px-3 py-2 text-sm outline-none"
                        />
                    </div>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-3 mt-5">
                    <span className="text-xs">Create Doc. Collection Request</span>

                    <button
                        onClick={() => setDocRequest(!docRequest)}
                        className={`relative w-9 h-4 rounded-full ${docRequest ? "bg-green-500" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`absolute top-[1px] h-3 w-3 rounded-full bg-white transition ${docRequest ? "left-5" : "left-1"
                                }`}
                        />
                    </button>
                </div>

                {/* Save */}
                <button className="mt-6 bg-[#0b84e5] text-white px-10 py-1.5 rounded text-sm">
                    Save
                </button>
            </div>
        </div>
    );
}

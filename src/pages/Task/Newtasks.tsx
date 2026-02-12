import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/form/input";
import Dropdown from "../../components/form/dropdown";
import Textarea from "../../components/form/textarea";
import backArrow from "../../assets/images/arrow-left.svg";


export default function NewTask() {
    const [docRequest, setDocRequest] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <div className="h-screen overflow-hidden bg-white p-4">
            {/* Header */}
            <div className="flex items-center gap-2 font-medium text-black border-b border-blue-200 pb-3 mb-4">
                <img
                    src={backArrow}
                    alt="back"
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => navigate("/tasks")}
                    title="Back to Tasks"
                />


                <span>Task</span>
                <span>{">"}</span>
                <span className="font-medium text-black">
                    {isEdit ? "Edit Task" : "New Task"}
                </span>
            </div>

            {/* Main Container */}
            <div className="bg-white rounded-md p-6 h-full overflow-hidden">
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[650px]">
                    <Input label="Client*" placeholder="Select" />
                    <Input label="Service*" placeholder="Select" />
                    <Input label="Due Date" type="date" />
                    <Input label="Target Date" type="date" />

                    <Dropdown label="Users" options={["Admin", "Manager", "Staff"]} />
                    <Dropdown label="Tags" options={["Normal", "Low"]} />

                    <div className="col-span-2">
                        <Textarea
                            label="Description"
                            rows={2}
                            placeholder="Enter description"
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

                {/* Save / Update */}
                <button className="mt-6 bg-[#0b84e5] text-white px-10 py-1.5 rounded text-sm">
                    {isEdit ? "Update" : "Save"}
                </button>
            </div>
        </div>
    );
}

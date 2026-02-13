import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/form/input";
import Checkbox from "@/components/form/checkbox";
import Dropdown from "@/components/form/dropdown";
import Toggle from "@/components/form/Toggle";

export default function Todo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    setDueDate: false,
    dueDate: "",
    repeat: false,
    interval: "",
    repeatEvery: "",
    assignToUser: false,
    selectedUser: "",
  });

  const handleChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = () => {
    console.log("Save To-Do:", formData);
  };

  return (
    <div className="flex-1 p-6 bg-white rounded-2xl">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-2 font-medium text-black border-b border-blue-200 pb-3 mb-4">
        <img
          src="src/assets/images/arrow-left.svg"
          alt="back"
          className="w-4 h-4 cursor-pointer"
          onClick={() => navigate("/todo")}
          title="Back to To Do"
        />

        <span>To Do</span>
        <span>{">"}</span>
        <span className="font-medium text-black">
          New To-Do
        </span>
      </div>

      {/* ================= FORM CARD ================= */}
      <div className="bg-white rounded-xl p-8 shadow-sm w-full">
        <form className="space-y-7">
          {/* Title */}
          <div className="w-full max-w-md">
            <Input
              label="To Do*"
              placeholder="New Task"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          {/* Details */}
          <div className="w-full max-w-3xl">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Details
            </label>
            <textarea
              placeholder="Enter details"
              value={formData.details}
              onChange={(e) =>
                handleChange("details", e.target.value)
              }
              className="w-full px-3 py-2 border border-[#DFE9EF] rounded-md bg-[#F0F7FC] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm resize-none"
              rows={2}
            />
          </div>

          {/* Set Due Date */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.setDueDate}
                onChange={(checked) =>
                  handleChange("setDueDate", checked)
                }
              />
              <label className="text-sm font-medium text-gray-700">
                Set Due Date
              </label>
            </div>

            {formData.setDueDate && (
              <div className="w-full max-w-xs">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) =>
                    handleChange("dueDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#DFE9EF] rounded-md bg-[#F0F7FC] text-sm"
                />
              </div>
            )}
          </div>

          {/* Repeat */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Toggle
                checked={formData.repeat}
                onChange={(checked) =>
                  handleChange("repeat", checked)
                }
              />
              <span className="text-sm font-medium text-gray-700">
                Repeat
              </span>
            </div>

            {formData.repeat && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
                <Input
                  label="Interval*"
                  type="number"
                  placeholder="Enter interval"
                  value={formData.interval}
                  onChange={(e) =>
                    handleChange("interval", e.target.value)
                  }
                />

                <Dropdown
                  label="Repeat Every*"
                  options={[
                    "Daily",
                    "Weekly",
                    "Monthly",
                    "Yearly",
                  ]}
                />
              </div>
            )}
          </div>

          {/* Assign User */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.assignToUser}
                onChange={(checked) =>
                  handleChange("assignToUser", checked)
                }
              />
              <label className="text-sm font-medium text-gray-700">
                Assign to user
              </label>
            </div>

            {formData.assignToUser && (
              <div className="w-full max-w-sm">
                <Dropdown
                  label="Select User"
                  options={[
                    "John Doe",
                    "Jane Smith",
                    "Mike Johnson",
                    "Sarah Williams",
                  ]}
                />
              </div>
            )}
          </div>

          {/* Save */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-10 rounded-md transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/form/input";
import Dropdown from "../../components/form/dropdown";
import Textarea from "../../components/form/textarea";
import Breadcrumbs from "../../components/form/Breadcrumbs";
import { taskValidationSchema } from "../../validations/commonRules";

interface TaskFormData {
    client: string;
    service: string;
    dueDate: string;
    targetDate: string;
    users: string;
    tags: string;

    description: string;
}

type FormErrors = Partial<Record<keyof TaskFormData, string>>;

export default function NewTask() {
    const [docRequest, setDocRequest] = useState(false);
    const { id } = useParams();
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState<TaskFormData>({
        client: "",
        service: "",
        dueDate: "",
        targetDate: "",
        users: "",
        tags: "",
        description: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = async (
        name: keyof TaskFormData,
        value: string
    ) => {
        const updatedForm = {
            ...formData,
            [name]: value,
        };

        setFormData(updatedForm);

        try {
            await taskValidationSchema.validateAt(name, updatedForm);

            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name]; // 🔥 remove error properly
                return newErrors;
            });
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                setErrors((prev) => ({
                    ...prev,
                    [name]: err.message,
                }));
            }
        }
    };
    const handleSubmit = async () => {
        try {
            await taskValidationSchema.validate(formData, {
                abortEarly: false,
            });

            setErrors({});
            console.log("Form Submitted Successfully", formData);

        } catch (err: unknown) {
            if (err instanceof yup.ValidationError) {
                const validationErrors: FormErrors = {};

                err.inner.forEach((error) => {
                    if (error.path) {
                        validationErrors[error.path as keyof TaskFormData] =
                            error.message;
                    }
                });

                setErrors(validationErrors);
            }
        }
    };

    return (
        <div className="overflow-hidden bg-white p-4">

            {/* Header */}
            <div className="flex items-center gap-2 font-medium text-black border-b pb-3 mb-4">
                <Breadcrumbs
                    to="/tasks"
                    label="Task"
                    subLabel={isEdit ? "Edit Task" : "New Task"}
                />
            </div>

            {/* Main Container */}
            <div className="bg-white rounded-md p-6 h-full overflow-hidden">
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[650px]">

                    <Input
                        label="Client*"
                        value={formData.client}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange("client", e.target.value)
                        }
                        error={errors.client}
                    />

                    <Input
                        label="Service*"
                        value={formData.service}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange("service", e.target.value)
                        }
                        error={errors.service}
                    />

                    <Input
                        label="Due Date"
                        type="date"
                        value={formData.dueDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange("dueDate", e.target.value)
                        }
                        error={errors.dueDate}
                    />

                    <Input
                        label="Target Date"
                        type="date"
                        value={formData.targetDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange("targetDate", e.target.value)
                        }
                        error={errors.targetDate}
                    />

                    <Dropdown
                        label="Users"
                        options={["Admin", "Manager", "Staff"]}
                        value={formData.users}
                        onChange={(value) => handleChange("users", value)}

                        error={errors.users}
                    />

                    <Dropdown
                        label="Tags"
                        options={["Normal", "Low"]}
                        value={formData.tags}
                        onChange={(value) => handleChange("tags", value)}
                        error={errors.tags}
                    />

                    <div className="col-span-2">
                        <Textarea
                            label="Description"
                            rows={2}
                            value={formData.description}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                handleChange("description", e.target.value)
                            }
                            error={errors.description}
                        />
                    </div>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-3 mt-5">
                    <span className="text-xs">
                        Create Doc. Collection Request
                    </span>

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
                <button
                    onClick={handleSubmit}
                    className="mt-6 bg-[#0b84e5] text-white px-10 py-1.5 rounded text-sm"
                >
                    {isEdit ? "Update" : "Save"}
                </button>
            </div>
        </div>
    );
}

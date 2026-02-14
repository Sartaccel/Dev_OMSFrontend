import React from "react";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, ...rest }) => {
    return (
        <div className="w-full">
            {/* Label */}
            <label className="block text-sm font-medium mb-1">
                {label}
            </label>

            {/* Textarea */}
            <textarea
                {...rest}
                className={`w-full rounded-md px-3 py-2 text-sm outline-none
bg-[#F4F7FA] border
${error ? "border-red-500" : "border-[#E2E8F0]"}
focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}

            />

            {/* Error */}
            {error && (
                <p className="text-red-500 text-xs mt-1 text-right">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Textarea;

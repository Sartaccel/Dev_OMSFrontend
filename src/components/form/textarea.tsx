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
                className={`w-full rounded border px-3 py-2 text-sm outline-none bg-gray-50
        ${error ? "border-red-500" : "border-blue-100"}
        focus:ring-2 focus:ring-primaryBlue`}
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

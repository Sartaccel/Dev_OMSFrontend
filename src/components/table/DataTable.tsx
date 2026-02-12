import React from "react";

export interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}

const DataTable = ({ columns, data, renderRow }: DataTableProps) => {

  
  const getAlignClass = (align?: string) => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  return (
    <div className="overflow-x-auto">

      <table className="w-full text-sm text-gray-700">

        <thead className="border-b border-blue-100">

          <tr className="text-gray-400 font-medium">

            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 ${getAlignClass(col.align)}`}
              >
                {col.label}
              </th>
            ))}

          </tr>

        </thead>

    
        <tbody className="divide-y divide-blue-100">

          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-blue-50/40 transition"
            >
              {renderRow(item)}
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DataTable;

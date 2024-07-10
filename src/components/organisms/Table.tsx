import React from "react";

interface Column {
  header: string;
  accessor: string;
  render?: (data: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="py-2 px-6 text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {columns.map((column) => (
                <td key={column.accessor} className="py-2 px-6">
                  {column.render ? column.render(item) : item[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };

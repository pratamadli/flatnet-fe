import React, { useState, useEffect } from "react";
import { AddNewButton, FormInput } from "../molecules";
import { Input, Label } from "../atoms";
interface Column {
  header: string;
  accessor: string;
  render?: (data: any) => React.ReactNode;
  searchable?: boolean;
}

interface TableProps {
  columns: Column[];
  data: any[];
  addNewButton?: boolean;
  onClickAdd?: () => void;
  itemsPerPage?: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  addNewButton = true,
  onClickAdd,
  itemsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredData = data.filter((item) => {
    return columns.some((column) => {
      if (!column.searchable) return false; // Only search within searchable columns
      const cellValue = item[column.accessor];
      return (
        cellValue !== undefined &&
        cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  });

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="overflow-x-auto">
      <div className="my-4 flex-row">
        <div className="my-2">
          {addNewButton && (
            <div className="flex justify-end">
              <AddNewButton onClick={onClickAdd} />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center my-1">
          <Input
            id={"searchUsersList"}
            name={"searchUsersList"}
            placeholder={"Search"}
            onChange={(value: string) => handleSearch(value)}
            value={searchTerm}
            type="text"
          />
          {/* <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={()handleSearch}
            className="px-4 py-2 border rounded"
          /> */}
          <button className="bg-gray-200 px-4 py-2 rounded">Filters</button>
        </div>
      </div>
      <table className="min-w-full bg-white border rounded">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-6 text-left font-medium text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        {currentData.length > 0 ? (
          <tbody>
            {currentData.map((item, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((column) => (
                  <td key={column.accessor} className="py-2 px-6">
                    {column.render
                      ? column.render(item)
                      : item[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className="justify-center">
            <Label>Data Not Found</Label>
          </tbody>
        )}
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handleClickPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 rounded bg-gray-200"
        >
          Previous
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handleClickPage(page)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {page}
              </button>
            )
          )}
        </div>
        <button
          onClick={() => handleClickPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 rounded bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { Table };

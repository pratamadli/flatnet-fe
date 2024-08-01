import moment from "moment";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateTimePickerProps {
  className?: string | null;
  placeholder?: string;
  selected?: Date | null;
  onChange: (date: Date | null) => void;
}
const DateTimePicker: React.FC<DateTimePickerProps> = ({
  className = "",
  placeholder = "Pilih Tanggal dan Waktu",
  selected,
  onChange,
}) => {
  const minDate = moment().add(1, "days").toDate();

  const minTime = moment().set({ hour: 9, minute: 0, second: 0 }).toDate();

  const maxTime = moment().set({ hour: 18, minute: 0, second: 0 }).toDate();
  return (
    <div className="w-full">
      <DatePicker
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        selected={selected}
        onChange={onChange}
        showTimeSelect
        dateFormat="dd-MM-yyyy HH:mm"
        timeFormat="HH:mm"
        placeholderText={placeholder}
        minDate={minDate}
        minTime={minTime}
        maxTime={maxTime}
      />
    </div>
  );
};

export { DateTimePicker };

import React from "react";
import { DateTimePicker, Label } from "../atoms";
import colors from "@/styles/colors";

interface PilihJadwalSectionProps {
  selectedDate?: Date | null;
  onChange: (date: Date | null) => void;
  error?: boolean;
  errorMessage?: string;
}
const PilihJadwalSection: React.FC<PilihJadwalSectionProps> = ({
  selectedDate,
  onChange,
  error = false,
  errorMessage = "",
}) => {
  return (
    <div className="my-3 w-full">
      <Label>Pilih Jadwal</Label>
      <div
        style={{
          borderWidth: error ? 0.5 : 0,
          borderColor: error ? colors.danger : "",
        }}
      >
        <DateTimePicker selected={selectedDate} onChange={onChange} />
      </div>
      {error && <Label color={colors.danger}>{errorMessage}</Label>}
    </div>
  );
};

export { PilihJadwalSection };

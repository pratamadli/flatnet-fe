import React from "react";
import { Label, Row } from "../atoms";
import { useAppSelector } from "@/redux/hooks";
import { PaketLayananCard } from "../molecules";
import colors from "@/styles/colors";

interface PilihSectionProps {
  valueId?: string;
  onChoose: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}
const PilihPaketSection: React.FC<PilihSectionProps> = ({
  valueId,
  onChoose,
  error = false,
  errorMessage = "",
}) => {
  const paketLayanan = useAppSelector((state) => state.paketLayanan);
  const dataPaketLayanan = paketLayanan.data || [];

  return (
    <div className="my-3 w-full">
      <Label>Pilih Paket</Label>
      {dataPaketLayanan.length > 0 ? (
        <div>
          <div
            style={{
              borderWidth: error ? 0.5 : 0,
              borderColor: error ? colors.danger : "",
            }}
          >
            <Row>
              {dataPaketLayanan?.map((value: any) => {
                return (
                  <PaketLayananCard
                    deskripsiPaket={value?.deskripsiPaket || ""}
                    imagePaket={value?.imagePaket || ""}
                    namaPaket={value?.namaPaket || ""}
                    hargaPaket={value?.hargaPaket || ""}
                    paketLayananId={value?.paketLayananId || ""}
                    onChoose={() => onChoose(value?.paketLayananId || "")}
                    value={valueId || ""}
                  />
                );
              })}
            </Row>
          </div>
          {error && <Label color={colors.danger}>{errorMessage}</Label>}
        </div>
      ) : (
        <Label>No Data Found</Label>
      )}
    </div>
  );
};

export { PilihPaketSection };

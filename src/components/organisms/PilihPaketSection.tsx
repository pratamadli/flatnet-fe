import React, { useState } from "react";
import { Column, Label, Row } from "../atoms";
import { useAppSelector } from "@/redux/hooks";
import { PaketLayananCard } from "../molecules";
const PilihPaketSection = () => {
  const [paketLayananId, setPaketLayananId] = useState<string | null>(null);

  const paketLayanan = useAppSelector((state) => state.paketLayanan);
  const dataPaketLayanan = paketLayanan.data || [];

  const handleChoosePaket = (value: string) => {
    setPaketLayananId(value);
  };
  return (
    <div className="my-3 w-full">
      <Label>Pilih Paket</Label>
      {dataPaketLayanan.length > 0 ? (
        <Row>
          {dataPaketLayanan?.map((value: any) => {
            return (
              <PaketLayananCard
                deskripsiPaket={value?.deskripsiPaket || ""}
                imagePaket={value?.imagePaket || ""}
                namaPaket={value?.namaPaket || ""}
                hargaPaket={value?.hargaPaket || ""}
                paketLayananId={value?.paketLayananId || ""}
                onChoose={() => handleChoosePaket(value?.paketLayananId)}
                value={paketLayananId || ""}
              />
            );
          })}
        </Row>
      ) : (
        <Label>No Data Found</Label>
      )}
    </div>
  );
};

export { PilihPaketSection };

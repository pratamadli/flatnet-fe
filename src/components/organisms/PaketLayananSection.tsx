import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Label, Row } from "../atoms";
import { PaketLayananCard } from "../molecules";
const PaketLayananSection = () => {
  const paketLayanan = useAppSelector((state) => state.paketLayanan);
  console.log("paketLayanan", paketLayanan);
  const data = paketLayanan.data || [];
  return (
    <div className="my-3 w-full">
      {data.length > 0 ? (
        <Row>
          {data?.map((value: any) => {
            return (
              <PaketLayananCard
                deskripsiPaket={value?.deskripsiPaket || ""}
                imagePaket={value?.imagePaket || ""}
                namaPaket={value?.namaPaket || ""}
                hargaPaket={value?.hargaPaket || ""}
                paketLayananId={value?.paketLayananId || ""}
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

export { PaketLayananSection };

import React, { useEffect, useState } from "react";
import { Card, CardBody, Column, Image, Label, Row } from "../atoms";
import colors from "@/styles/colors";

interface PaketLayananCardProps {
  imagePaket: string;
  namaPaket: string;
  hargaPaket: string | number;
  deskripsiPaket: string;
  paketLayananId: string | number;
  onChoose?: () => void;
  value?: string;
}
const PaketLayananCard: React.FC<PaketLayananCardProps> = ({
  paketLayananId,
  namaPaket,
  hargaPaket,
  deskripsiPaket,
  imagePaket,
  onChoose = () => {},
  value,
}) => {
  const lines = deskripsiPaket.split("\r\n");
  const [choose, setChoose] = useState(false);
  useEffect(() => {
    if (value == paketLayananId) {
      setChoose(true);
    } else {
      setChoose(false);
    }
  }, [value]);

  return (
    <Column className="w-1/4 mr-1">
      <Card
        className="p-2"
        backgroundColor={choose ? colors.lightPrimary : ""}
        borderColor={choose ? colors.primary : ""}
        onClick={onChoose}
      >
        <CardBody>
          <Row className="justify-center my-1">
            <Label
              color={
                paketLayananId == 1
                  ? colors.lightPurple
                  : paketLayananId == 2
                    ? colors.success
                    : paketLayananId == 3
                      ? colors.warning
                      : paketLayananId == 4
                        ? colors.danger
                        : colors.midgray
              }
            >
              {namaPaket}
            </Label>
          </Row>
          <Row className="justify-center my-1">
            <Label className="text-sm align-text-top" color={colors.black}>
              Rp
            </Label>
            <Label className="text-lg" color={colors.black}>
              {hargaPaket}
            </Label>
            <Label className="text-base" color={colors.lightgray}>
              /month
            </Label>
          </Row>
          <Row className="justify-center my-1">
            <Image
              src={`/${imagePaket}`}
              height={64}
              width={64}
              alt={imagePaket}
            />
          </Row>
          <Row className="justify-center my-1">
            <div className="text-center">
              {lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </Row>
        </CardBody>
      </Card>
    </Column>
  );
};

export { PaketLayananCard };

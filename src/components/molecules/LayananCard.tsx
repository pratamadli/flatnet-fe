import React from "react";
import {
  Button,
  Card,
  CardBody,
  Column,
  Icon,
  Image,
  Label,
  Row,
} from "../atoms";
import colors from "@/styles/colors";

interface LayananCardProp {
  imagePaket: string;
  namaPaket: string;
  status: string;
  namaStatus: string;
  alamatPelanggan: string;
  waktuPemasangan: string;
  namaPetugas: string;
  onClickDetail: () => void;
}
const LayananCard: React.FC<LayananCardProp> = ({
  imagePaket,
  namaPaket,
  status,
  namaStatus,
  alamatPelanggan,
  waktuPemasangan,
  namaPetugas,
  onClickDetail,
}) => {
  return (
    <Card className="px-4 my-2">
      <CardBody>
        <Row className="justify-between">
          <Column>
            <Row>
              <Image
                src={`/${imagePaket}`}
                alt={"paket layanan icon"}
                width={52}
                height={52}
              />
              <Column className="ml-4">
                <Row>
                  <Label color={colors.black}>{namaPaket}</Label>
                </Row>
                <Row>
                  <Label
                    color={
                      status === "diverifikasi"
                        ? colors.lightPurple
                        : status === "ditolak"
                          ? colors.danger
                          : status === "menunggu_verifikasi"
                            ? colors.midgray
                            : status === "divalidasi"
                              ? colors.warning
                              : status === "selesai"
                                ? colors.success
                                : colors.warning
                    }
                  >
                    {namaStatus}
                  </Label>
                </Row>
              </Column>
            </Row>
            <Row className="my-1">
              <Row className="mx-2">
                <Icon
                  name={"location"}
                  color={colors.midgray}
                  className="m-1"
                />
                <Label color={colors.midgray} className="m-1">
                  {alamatPelanggan}
                </Label>
              </Row>
              <Row className="mx-2">
                <Icon name={"clock"} color={colors.midgray} className="m-1" />
                <Label color={colors.midgray} className="m-1">
                  {waktuPemasangan}
                </Label>
              </Row>
              {status === "menunggu_verifikasi" || status === "ditolak" ? (
                <></>
              ) : (
                <Row className="mx-2">
                  <Icon name={"user"} color={colors.midgray} className="m-1" />
                  <Label color={colors.midgray} className="m-1">
                    {namaPetugas}
                  </Label>
                </Row>
              )}
            </Row>
          </Column>
          <Column className="justify-end">
            <Button onClick={onClickDetail}>
              <Label color={colors.lightPurple}>Lihat Detail</Label>
            </Button>
          </Column>
        </Row>
      </CardBody>
    </Card>
  );
};

export { LayananCard };

import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../atoms";
import colors from "@/styles/colors";
import { FormInput } from "../molecules";
import { useAppDispatch } from "@/redux/hooks";
import {
  getLayananFilterThunk,
  tolakLayananThunk,
} from "@/redux/thunk/layananThunk";

interface DataPesananProps {
  alasanTolak?: string | null;
  alamatPelanggan?: string | null;
  createdAt: string;
  createdUserId: string | number;
  deskripsiPaket: string;
  fileBukti?: string | null;
  hargaPaket: number;
  layananId: number | string;
  namaPaket: string;
  namaPelanggan: string;
  namaPetugas: string | null;
  namaStatus: string;
  paketLayananId: number | string;
  pelangganId: number | string;
  petugasId: number | string | null;
  status: string | null;
  updatedAt: string | null;
  updatedUserId: string | number;
  waktuPemasangan: string | null;
}
interface TolakModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: DataPesananProps | null | undefined;
}

const TolakModal: React.FC<TolakModalProps> = ({
  isOpen,
  onClose,
  data = null,
}) => {
  console.log("DATA TOLAK", data);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    layananId: "",
    alasanTolak: "",
  });
  const [errorAlasanTolak, setErrorAlasanTolak] = useState({
    error: false,
    errorMessage: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };
  const validation = () => {
    setErrorAlasanTolak({ error: false, errorMessage: "" });
    let invalidCount = 0;

    if (formData.alasanTolak === null || formData.alasanTolak === "") {
      setErrorAlasanTolak({
        error: true,
        errorMessage: "Alasan Tolak is required",
      });
      invalidCount = invalidCount + 1;
    }

    if (invalidCount === 0) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (data) {
      setFormData({
        layananId: data?.layananId?.toString() || "",
        alasanTolak: data?.alasanTolak?.toString() || "",
      });
    }
  }, []);

  const handleTolak = async () => {
    const invalid = await validation();
    if (!invalid) {
      setFormData({
        ...formData,
        layananId: data?.layananId?.toString() || "",
      });
      console.log("JALAN BUTTON TOLAK");
      console.log("FORMDATA", formData);
      const tolakLayanan = await dispatch(tolakLayananThunk(formData));
      const payload = tolakLayanan.payload;
      if (payload.success) {
        alert("Tolak Layanan Success");
        onClose();
      } else {
        alert(payload.message);
      }
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Tolak Pesanan?"
        showCloseButton={true}
        onClose={onClose}
      />
      <ModalBody>
        <div className="my-2">
          <Label className="font-semibold" color={colors.black}>
            Tolak Pemesanan?
          </Label>
          <div className="flex my-2 py-2">
            <div className="col-span-12 mr-3">
              <Label color={colors.darkgray}>Paket</Label>
              <div className="flex">
                <div className="col-span-4 mr-3">
                  <Image
                    src={"/icon-paket.png"}
                    alt={"Icon Paket"}
                    height={32}
                    width={32}
                  />
                </div>
                <div className="col-span-9">
                  <Label color={colors.darkgray}>{data?.namaPaket}</Label>
                  <Label color={colors.midgray}>{data?.hargaPaket}</Label>
                </div>
              </div>
            </div>
            <div className="col-span-12 ml-3">
              <Label color={colors.darkgray}>Jadwal</Label>
              <div className="flex">
                <div className="col-span-12">
                  <Label color={colors.darkgray}>{data?.waktuPemasangan}</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-2 py-2">
            <div className="col-span-12 mr-3">
              <Label color={colors.darkgray}>Pelanggan</Label>
              <div className="flex">
                <div className="col-span-4 mr-3">
                  <Image
                    src={"/profile.png"}
                    alt={"Icon Paket"}
                    height={32}
                    width={32}
                  />
                </div>
                <div className="col-span-9">
                  <Label color={colors.darkgray}>{data?.namaPelanggan}</Label>
                  <Label color={colors.midgray}>{data?.alamatPelanggan}</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 py-2">
            <FormInput
              label="Masukkan Alasan Tolak"
              id="alasanTolak"
              placeholder="Alasan Tolak"
              type="text"
              value={formData.alasanTolak}
              error={errorAlasanTolak.error}
              errorMessage={errorAlasanTolak.errorMessage}
              required={true}
              onChange={(value) => {
                handleInputChange("alasanTolak", value);
              }}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex row-auto px-1 space-x-2 ">
          {/* <Button onClick={onClose} variant={"light"}>
            <Label color={colors.black}>Batal</Label>
          </Button> */}
          <Button onClick={handleTolak} variant={"danger"}>
            <Label color={colors.light}>Tolak</Label>
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export { TolakModal };

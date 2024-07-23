import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "../atoms";
import colors from "@/styles/colors";
import { FormInput } from "../molecules";
import { useAppDispatch } from "@/redux/hooks";
import {
  getLayananFilterThunk,
  verifikasiLayananThunk,
} from "@/redux/thunk/layananThunk";
import { getPetugasThunk } from "@/redux/thunk/usersThunk";
import { useAuth } from "@/utils/AuthContext";
interface SelectOption {
  value: string;
  label: string;
}
interface DataPesananProps {
  petugasId?: string | null;
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
  status: string | null;
  updatedAt: string | null;
  updatedUserId: string | number;
  waktuPemasangan: string | null;
}
interface VerifikasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: DataPesananProps | null | undefined;
}

const VerifikasiModal: React.FC<VerifikasiModalProps> = ({
  isOpen,
  onClose,
  data = null,
}) => {
  console.log("DATA VERIFIKASI", data);
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const [dataPetugas, setDataPetugas] = useState<SelectOption[]>([]);
  const [formData, setFormData] = useState({
    layananId: "",
    petugasId: "",
  });
  const [errorPetugas, setErrorPetugas] = useState({
    error: false,
    errorMessage: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };
  const validation = () => {
    setErrorPetugas({ error: false, errorMessage: "" });
    let invalidCount = 0;

    if (formData.petugasId === null || formData.petugasId === "") {
      setErrorPetugas({
        error: true,
        errorMessage: "Petugas is required",
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
        petugasId: data?.petugasId?.toString() || "",
      });
    }
    const token = user?.token || "";
    dispatch(getPetugasThunk(token)).then((e) => {
      const data = e.payload.data || [];
      let newData = [];
      for (let i = 0; i < data.length; i++) {
        let newObj = {
          label: data[i].nama,
          value: data[i].petugasId,
        };
        newData.push(newObj);
      }
      setDataPetugas(newData);
    });
  }, []);

  const handleVerifikasi = async () => {
    const invalid = await validation();
    if (!invalid) {
      setFormData({
        ...formData,
        layananId: data?.layananId?.toString() || "",
      });
      console.log("JALAN BUTTON VERIF");
      console.log("FORMDATA", formData);
      const verifikasiLayanan = await dispatch(
        verifikasiLayananThunk(formData)
      );
      const payload = verifikasiLayanan.payload;

      if (payload.success) {
        alert("Verifikasi Layanan Success");
        onClose();
      } else {
        alert(payload.message);
      }
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Verifikasi Pesanan?"
        showCloseButton={true}
        onClose={onClose}
      />
      <ModalBody>
        <div className="my-2">
          <Label className="font-semibold" color={colors.black}>
            Verifikasi Pemesanan?
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
            <Select
              placeholder="Pilih Role"
              onChange={(value) => {
                console.log("VALUE ON CHANGE", value);
                const valueString = value?.value || "";
                handleInputChange("petugasId", valueString || "");
              }}
              value={formData.petugasId.toString()}
              options={dataPetugas}
              error={errorPetugas.error}
              errorMessage={errorPetugas.errorMessage}
              label="Pilih Role"
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex row-auto px-1 space-x-2 ">
          {/* <Button onClick={onClose} variant={"light"}>
            <Label color={colors.black}>Batal</Label>
          </Button> */}
          <Button onClick={handleVerifikasi} variant={"primary"}>
            <Label color={colors.light}>Verifikasi</Label>
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export { VerifikasiModal };

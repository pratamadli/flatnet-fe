import { BaseMenu } from "@/components/layouts";
import {
  PilihPaketSection,
  PaketLayananSection,
  PilihJadwalSection,
} from "@/components/organisms";
import { useAppDispatch } from "@/redux/hooks";
import { getPaketLayananThunk } from "@/redux/thunk/paketLayananThunk";
import { useAuth } from "@/utils/AuthContext";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, Label } from "@/components/atoms";
import colors from "@/styles/colors";
import { useRouter } from "next/router";
import { createLayananThunk } from "@/redux/thunk/layananThunk";
const LayananForm = () => {
  const routes = useRouter();
  const [paketLayananId, setPaketLayananId] = useState<string>("");
  const [waktuPemasangan, setWaktuPemasangan] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    paketLayananId: "",
    waktuPemasangan: "",
  });
  const { user, logout } = useAuth();
  const token = user?.token || "";
  const dispatch = useAppDispatch();
  const getPaketLayanan = async () => {
    await dispatch(getPaketLayananThunk(token))
      .then((data) => {
        if (data.payload.success) {
          console.log("DATA GET PAKET LAYANAN");
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET DASHBOARD", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR PAYLOAD", error);
      });
  };

  useEffect(() => {
    getPaketLayanan();
  }, []);

  const handlePilihJadwal = (date: Date | null) => {
    setWaktuPemasangan(date);
    handleInputChange("waktuPemasangan", date);
  };
  const handlePilihPaket = (e: string | number) => {
    const paketId = e.toString() || "";
    setPaketLayananId(paketId);
    handleInputChange("paketLayananId", paketId);
  };

  const handleBatal = () => {
    setFormData({
      paketLayananId: "",
      waktuPemasangan: "",
    });
    routes.push("/pelanggan/layanan");
  };

  const [errorPaketLayanan, setErrorPaketLayanan] = useState({
    error: false,
    errorMessage: "",
  });

  const [errorWaktuPemasangan, setErrorWaktuPemasangan] = useState({
    error: false,
    errorMessage: "",
  });

  const validation = () => {
    setErrorPaketLayanan({ error: false, errorMessage: "" });
    setErrorWaktuPemasangan({ error: false, errorMessage: "" });
    let invalidCount = 0;

    if (formData.paketLayananId === null || formData.paketLayananId === "") {
      setErrorPaketLayanan({
        error: true,
        errorMessage: "Paket Layanan is Required",
      });
      invalidCount = invalidCount + 1;
    }

    if (formData.waktuPemasangan === null || formData.waktuPemasangan === "") {
      setErrorWaktuPemasangan({
        error: true,
        errorMessage: "Waktu Pemasangan is required",
      });
      invalidCount = invalidCount + 1;
    }

    if (invalidCount === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleInputChange = (
    id: string,
    value: string | Date | number | null
  ) => {
    console.log("ID", id, "VALUE", value);
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSimpan = async () => {
    const invalid = await validation();

    if (!invalid) {
      const createLayanan = await dispatch(createLayananThunk(formData));
      const payload = createLayanan.payload;

      if (payload.success) {
        alert("Create User Success");
        routes.push("/pelanggan/layanan");
      } else {
        alert(payload.message);
      }
    }
  };
  return (
    <div>
      <PilihPaketSection
        onChoose={(e) => handlePilihPaket(e)}
        valueId={paketLayananId || ""}
        error={errorPaketLayanan.error}
        errorMessage={errorPaketLayanan.errorMessage}
      />
      <PilihJadwalSection
        onChange={handlePilihJadwal}
        selectedDate={waktuPemasangan}
        error={errorWaktuPemasangan.error}
        errorMessage={errorWaktuPemasangan.errorMessage}
      />
      <div className="flex align-middle justify-end row-auto space-x-1">
        <Button width="eighth" onClick={handleBatal}>
          <Label color={colors.black}>Batal</Label>
        </Button>
        <Button width="eighth" variant="primary" onClick={handleSimpan}>
          <Label color={colors.light}>Simpan</Label>
        </Button>
      </div>
    </div>
  );
};

LayananForm.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="Layanan Form">{page}</BaseMenu>
);

export default LayananForm;

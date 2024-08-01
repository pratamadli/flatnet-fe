import { BaseMenu } from "@/components/layouts";
import { PilihPaketSection, PaketLayananSection } from "@/components/organisms";
import { useAppDispatch } from "@/redux/hooks";
import { getPaketLayananThunk } from "@/redux/thunk/paketLayananThunk";
import { useAuth } from "@/utils/AuthContext";
import React, { useEffect } from "react";
const LayananForm = () => {
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
  return (
    <div>
      <PilihPaketSection />
    </div>
  );
};

LayananForm.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="Layanan Form">{page}</BaseMenu>
);

export default LayananForm;

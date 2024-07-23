import React, { useEffect, useState } from "react";
import { Form, Select, Button, Label } from "../atoms";
import { FormInput } from "../molecules";
import colors from "@/styles/colors";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createUserThunk, updateUserThunk } from "@/redux/thunk/usersThunk";
import { CurrentUserDataPayload } from "@/redux/types";

interface SelectOption {
  value: string;
  label: string;
}

interface UserFormProps {
  options: SelectOption[];
  currentData: CurrentUserDataPayload;
}

const UserForm: React.FC<UserFormProps> = ({ options, currentData }) => {
  const routes = useRouter();
  const dispatch = useAppDispatch();
  const handleBatal = () => {
    setFormData({
      userId: "",
      nama: "",
      nik: "",
      noTelp: "",
      email: "",
      password: "",
      alamat: "",
      roleId: "",
    });
    routes.push("/admin/users");
  };

  useEffect(() => {
    if (currentData) {
      setFormData({
        userId: currentData?.userId?.toString() || "",
        nama: currentData?.nama || "",
        nik: currentData?.nik || "",
        noTelp: currentData?.noTelp || "",
        email: currentData?.email || "",
        password: "",
        alamat: currentData?.alamat || "",
        roleId: currentData?.roleId.toString() || "",
      });
    }
  }, []);
  const handleSimpan = async () => {
    const invalid = await validation();

    if (!invalid) {
      if (formData.userId !== "") {
        const createUser = await dispatch(createUserThunk(formData));
        const payload = createUser.payload;

        if (payload.success) {
          alert("Create User Success");
          routes.push("/admin/users");
        } else {
          alert(payload.message);
        }
      } else {
        const updateUser = await dispatch(updateUserThunk(formData));
        const payload = updateUser.payload;

        if (payload.success) {
          alert("Update User Success");
          routes.push("/admin/users");
        } else {
          alert(payload.message);
        }
      }
    }
  };
  const [formData, setFormData] = useState({
    userId: "",
    nama: "",
    nik: "",
    noTelp: "",
    email: "",
    password: "",
    alamat: "",
    roleId: "",
  });

  const [errorAlamat, setErrorAlamat] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorNik, setErrorNik] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorNama, setErrorNama] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorEmail, setErrorEmail] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorPassword, setErrorPassword] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorNoTelp, setErrorNoTelp] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorRoleId, setErrorRoleId] = useState({
    error: false,
    errorMessage: "",
  });

  const handleInputChange = (
    id: string,
    value: string | SelectOption | number | null
  ) => {
    console.log("ID", id, "VALUE", value);
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validation = () => {
    setErrorAlamat({ error: false, errorMessage: "" });
    setErrorEmail({ error: false, errorMessage: "" });
    setErrorNama({ error: false, errorMessage: "" });
    setErrorNik({ error: false, errorMessage: "" });
    setErrorNoTelp({ error: false, errorMessage: "" });
    setErrorPassword({ error: false, errorMessage: "" });
    setErrorRoleId({ error: false, errorMessage: "" });
    let invalidCount = 0;

    if (formData.roleId === null || formData.roleId === "") {
      setErrorRoleId({ error: true, errorMessage: "Role is required" });
      invalidCount = invalidCount + 1;
    }

    if (formData.alamat === null || formData.alamat === "") {
      setErrorAlamat({ error: true, errorMessage: "Alamat is required" });
      invalidCount = invalidCount + 1;
    }

    if (formData.nama === null || formData.nama === "") {
      setErrorNama({ error: true, errorMessage: "Nama is required" });
      invalidCount = invalidCount + 1;
    }

    if (formData.email === null || formData.email === "") {
      setErrorEmail({ error: true, errorMessage: "Email is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorEmail({ error: true, errorMessage: "Invalid email format" });
      invalidCount = invalidCount + 1;
    }

    if (formData.nik === null || formData.nik === "") {
      setErrorNik({ error: true, errorMessage: "NIK is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/^\d{16}$/.test(formData.nik)) {
      setErrorNik({ error: true, errorMessage: "NIK should be 16 digits" });
      invalidCount = invalidCount + 1;
    }

    if (formData.password === null || formData.password === "") {
      setErrorPassword({ error: true, errorMessage: "Password is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/^.{8,}$/.test(formData.password)) {
      console.log("formData.password", formData.password);
      console.log("PASSWORD", !/^.{8,}$/.test(formData.password));
      setErrorPassword({
        error: true,
        errorMessage: "Password should contain minimum 8 characters",
      });
      invalidCount = invalidCount + 1;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      setErrorPassword({
        error: true,
        errorMessage:
          "Password should contain uppercase and lowercase characters",
      });
      invalidCount = invalidCount + 1;
    }

    if (formData.noTelp === null || formData.noTelp === "") {
      setErrorNoTelp({ error: true, errorMessage: "No. Telp is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/^\d{1,15}$/.test(formData.noTelp)) {
      setErrorNoTelp({
        error: true,
        errorMessage: "No. Telp should be a number and max 15 digits",
      });
      invalidCount = invalidCount + 1;
    }

    if (invalidCount === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="w-full">
      <Form className="px-1">
        <div className="flex flex-col space-y-2">
          {/* ROW 1 */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <FormInput
                label="Nama"
                id="nama"
                placeholder="Masukkan nama anda"
                type="text"
                required={true}
                onChange={(value) => handleInputChange("nama", value)}
                value={formData.nama}
                error={errorNama.error}
                errorMessage={errorNama.errorMessage}
              />
            </div>
            <div className="w-1/2">
              <FormInput
                label="NIK"
                id="nik"
                placeholder="Masukkan NIK anda"
                type="text"
                required={true}
                onChange={(value) => handleInputChange("nik", value)}
                value={formData.nik}
                error={errorNik.error}
                errorMessage={errorNik.errorMessage}
                maxCharacters={16}
              />
            </div>
          </div>
          {/* ROW 2 */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <FormInput
                label="Email"
                id="email"
                placeholder="Masukkan email anda"
                type="email"
                autoComplete="email"
                required={true}
                onChange={(value) => handleInputChange("email", value)}
                value={formData.email}
                error={errorEmail.error}
                errorMessage={errorEmail.errorMessage}
              />
            </div>
            <div className="w-1/2">
              <FormInput
                label="No. Telp"
                id="noTelp"
                placeholder="Masukkan nomor telepon"
                type="text"
                required={true}
                onChange={(value) => handleInputChange("noTelp", value)}
                value={formData.noTelp}
                error={errorNoTelp.error}
                errorMessage={errorNoTelp.errorMessage}
                maxCharacters={15}
              />
            </div>
          </div>
          {/* ROW 3 */}
          <div className="flex space-x-4">
            <div className="w-full">
              <FormInput
                label="Alamat"
                id="alamat"
                placeholder="Masukkan alamat lengkap anda"
                type="text"
                required={true}
                onChange={(value) => handleInputChange("alamat", value)}
                value={formData.alamat}
                error={errorAlamat.error}
                errorMessage={errorAlamat.errorMessage}
              />
            </div>
          </div>
          {/* ROW 4 */}
          <div className="flex space-x-4">
            <div className="w-full">
              <Select
                placeholder="Pilih Role"
                onChange={(value) => {
                  console.log("VALUE ON CHANGE", value);
                  const valueString = value?.value || null;
                  handleInputChange("roleId", valueString);
                }}
                value={formData.roleId.toString()}
                options={options}
                error={errorRoleId.error}
                errorMessage={errorRoleId.errorMessage}
                label="Pilih Role"
              />
            </div>
          </div>
          {/* ROW 5 */}
          <div className="flex space-x-4">
            <div className="w-full">
              <FormInput
                label="Password"
                id="password"
                placeholder="Masukkan password"
                type="password"
                required={true}
                onChange={(value) => handleInputChange("password", value)}
                value={formData.password}
                error={errorPassword.error}
                errorMessage={errorPassword.errorMessage}
              />
              <p className="text-gray-500 text-sm">
                Min. 8 karakter kombinasi angka, huruf besar, dan huruf kecil
              </p>
            </div>
          </div>
        </div>
      </Form>
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

export { UserForm };

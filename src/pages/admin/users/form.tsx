import { Select } from "@/components/atoms";
import { BaseMenu } from "@/components/layouts";
import React, { useEffect, useState } from "react";
import { UserForm as FormUser } from "@/components/organisms";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useAuth } from "@/utils/AuthContext";
import { getRoleThunk } from "@/redux/thunk/roleThunk";
import { RootState } from "@/redux/rootReducer";

interface SelectOptionRole {
  value: string;
  label: string;
}

const UserForm = () => {
  const route = useRouter();
  const userCurrentData = useAppSelector(
    (state: RootState) => state.users.currentData
  );
  console.log("USER CURRENT DATA", userCurrentData);
  const { logout, user } = useAuth();
  const dispatch = useAppDispatch();
  const [roleOptions, setRoleOptions] = useState<SelectOptionRole[]>([]);
  const getRoles = async () => {
    const token = user?.token || "";
    await dispatch(getRoleThunk(token))
      .then((data) => {
        if (data.payload.success) {
          const roleList = data.payload.data;
          const roles: SelectOptionRole[] = roleList.map((role: any) => ({
            value: role.roleId,
            label: role.roleName,
          }));
          setRoleOptions(roles);
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET ROLES", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR PAYLOAD", error);
      });
  };

  useEffect(() => {
    getRoles();
  }, []);
  return (
    <div>
      <FormUser options={roleOptions} currentData={userCurrentData} />
    </div>
  );
};

UserForm.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="User Form">{page}</BaseMenu>
);

export default UserForm;

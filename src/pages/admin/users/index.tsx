import React, { useState, useEffect } from "react";
import { BaseMenu } from "../../../components/layouts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducer";
import { getUsersThunk, setCurrentUserThunk } from "@/redux/thunk/usersThunk";
import { useAuth } from "@/utils/AuthContext";
import { Table } from "@/components/organisms";
import { Button, Label } from "@/components/atoms";
import { useRouter } from "next/router";
import colors from "@/styles/colors";
import { clearUserCurrentData } from "@/redux/slices";

const UsersList = () => {
  const route = useRouter();
  const [usersList, setUsersList] = useState([]);
  const dispatch = useAppDispatch();
  const { user, logout } = useAuth();
  const handleAddNewButton = () => {
    route.push("/admin/users/form");
  };
  const columns = [
    { header: "Email", accessor: "email", searchable: true },
    { header: "Nama", accessor: "nama", searchable: true },
    { header: "Role", accessor: "roleName", searchable: true },
    {
      header: "",
      accessor: "actions",
      render: (e: any) => {
        return (
          <div className="flex row-auto justify-end">
            <Button width="quarter" onClick={() => handleEditData(e)}>
              <Label color={colors.darkBlue}>Edit</Label>
            </Button>
            <Button width="quarter">
              <Label color={colors.secondary}>Hapus</Label>
            </Button>
          </div>
        );
      },
    },
  ];

  const getUsers = async () => {
    const token = user?.token || "";
    await dispatch(getUsersThunk(token))
      .then((data) => {
        if (data.payload.success) {
          setUsersList(data.payload.data);
          console.log("DATA USERS LIST", data.payload.data);
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET USERS", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR PAYLOAD", error);
      });
  };

  const handleEditData = async (editData?: any) => {
    console.log("Event handle edit data", editData);

    await dispatch(setCurrentUserThunk(editData)).then(() => {
      route.push("/admin/users/form");
    });
  };

  const clearCurrentData = async () => {
    await dispatch(clearUserCurrentData());
  };

  useEffect(() => {
    getUsers();
    clearCurrentData();
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        addNewButton={true}
        data={usersList}
        onClickAdd={handleAddNewButton}
      />
    </div>
  );
};

UsersList.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="Users List">{page}</BaseMenu>
);

export default UsersList;

import React, { useState, useEffect } from "react";
import { BaseMenu } from "../../../components/layouts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducer";
import { getUsersThunk } from "@/redux/thunk/usersThunk";
import { useAuth } from "@/utils/AuthContext";
import { Table } from "@/components/organisms";
import { Label } from "@/components/atoms";
import { useRouter } from "next/router";

const UsersList = () => {
  const route = useRouter();
  const [usersList, setUsersList] = useState([]);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.users);
  const { user, logout } = useAuth();
  const handleAddNewButton = () => {
    route.push("/admin/users/form");
  };
  const columns = [
    { header: "Email", accessor: "email", searchable: true },
    { header: "Nama", accessor: "nama", searchable: true },
    { header: "Role", accessor: "roleName", searchable: true },
    {
      header: "Actions",
      accessor: "actions",
      render: (user: any) => (
        <>
          <a
            href={`/admin/users/form`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </a>{" "}
          |
          <a
            href={`/admin/users/delete`}
            className="text-red-600 hover:underline"
          >
            {" "}
            Delete
          </a>
        </>
      ),
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

  useEffect(() => {
    getUsers();
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

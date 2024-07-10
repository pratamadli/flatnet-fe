import React, { useState, useEffect } from "react";

import { BaseMenu } from "../../../components/layouts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducer";
import { getUsersThunk } from "@/redux/thunk/usersThunk";
import { useAuth } from "@/utils/AuthContext";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.users);
  const { user, logout } = useAuth();

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
      <h1>TABLE USERS LIST</h1>
      {/* Add the rest of your UsersList content here */}
    </div>
  );
};

UsersList.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="Users List">{page}</BaseMenu>
);

export default UsersList;

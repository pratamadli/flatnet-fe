import { BaseMenu } from "@/components/layouts";
import { UserProfile } from "@/components/organisms";
import React from "react";

const ProfileAdmin = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

ProfileAdmin.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="User Profile">{page}</BaseMenu>
);

export default ProfileAdmin;

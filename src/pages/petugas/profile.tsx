import { BaseMenu } from "@/components/layouts";
import { UserProfile } from "@/components/organisms";
import React from "react";

const ProfilePetugas = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

ProfilePetugas.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="User Profile">{page}</BaseMenu>
);

export default ProfilePetugas;

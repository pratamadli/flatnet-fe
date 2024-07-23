import { BaseMenu } from "@/components/layouts";
import { UserProfile } from "@/components/organisms";
import React from "react";

const ProfilePelanggan = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

ProfilePelanggan.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="User Profile">{page}</BaseMenu>
);

export default ProfilePelanggan;

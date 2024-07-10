import React from "react";
import { Label, Image, Divider } from "../atoms";
import colors from "@/styles/colors";

interface UserProfileCardProps {
  name: string;
  email: string;
  imageSrc?: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  email,
  imageSrc = "/profile.png",
}) => {
  return (
    <div className="flex-col">
      <Divider />
      <div className="p-4 text-white rounded-lg flex items-center justify-around">
        <Image src={imageSrc} alt={name} width={40} height={40} />
        {/* <img className="w-12 h-12 rounded-full mr-4" src={imageSrc} alt={name} /> */}
        <div>
          <Label color={colors.white}>{name}</Label>
          <Label color={colors.light}>{email}</Label>
          {/* <div className="font-semibold">{name}</div>
        <div>{email}</div> */}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default UserProfileCard;

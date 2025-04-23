import React from "react";
import ProfileImage from "./ProfileImage";
import { Divider } from "@/components/ui/Divider";
import LogoutButton from "./LogoutButton";

const ProfileCard = ({
  name,
  registrationNumber,
  email,
  profileImageSrc,
  onLogout,
  className = "",
}) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    console.log("Logout clicked");
  };

  return (
    <div
      className={`flex w-[319px] justify-center items-center pt-[5px] max-md:w-full max-md:max-w-[319px] max-sm:p-2.5 ${className}`}
    >
      <div className="w-[319px] h-[150px] shadow-[0px_0px_5px_2px_rgba(121,197,239,0.38)] relative bg-[#E9EEF6] rounded-3xl max-sm:w-full">
        <div className="relative p-5">
          <div className="absolute left-5 top-[21px]">
            <ProfileImage src={profileImageSrc} alt={`${name}'s profile`} />
          </div>

          <div className="ml-[53px]">
            <h2 className="text-[#0A336D] text-base font-normal mb-0.5">
              {name}
            </h2>
            <p className="text-[#0A336D] text-[10px] font-normal mb-0.5">
              Cadastro: {registrationNumber}
            </p>
            <p className="text-[#0166B4] text-xs font-normal mt-2.5">{email}</p>
          </div>

          <Divider className="w-[279px]" />

          <div className="ml-[81px]">
            <LogoutButton onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

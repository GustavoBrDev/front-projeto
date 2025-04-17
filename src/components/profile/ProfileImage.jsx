import React from "react";
import filledCamera from "@/assets/cameras/filled-camera.png"; // ajuste o caminho conforme seu projeto

const ProfileImage = ({ src, alt = "", className = "" }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={`w-[46px] h-[46px] rounded-[360px] ${className}`}
      />
      <div className="absolute left-[6px] bottom-[-12px]">
        <img
          src={filledCamera}
          alt="Camera icon"
          className="w-[15px] h-[15px]"
        />
      </div>
    </div>
  );
};

export default ProfileImage;

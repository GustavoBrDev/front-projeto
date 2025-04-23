import React from "react";
import Image from "next/image";

export const ProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        <div className="flex justify-center mb-4">
          <Image
            src={user.profileImageSrc || "/assets/profile.png"}
            alt="Foto do usuário"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        <div className="text-center">
          <h2 className="text-lg font-bold text-[#0A336D]">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-2">
            Matrícula: {user.registrationNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

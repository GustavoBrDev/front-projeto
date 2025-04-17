import React from "react";

const LogoutButton = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer ${className}`}
      aria-label="Logout"
    >
      <img
        src="/assets/logouts/red-logout.png"
        alt="Ícone de logout"
        width={24}
        height={24}
        className="mr-2"
      />
      <span className="text-[#EB5757] text-xs font-bold">Sair do sistema</span>
    </button>
  );
};

export default LogoutButton;

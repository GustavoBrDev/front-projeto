import React from "react";
import MaintenancePage from "@/components/pagesResponses/Maintenance";

export default function PreCouncils() {
    return (
        <MaintenancePage {...{ isPlanned: true,  estimatedTime: "1 Semana", customMessage: "Essa página está em desenvolvimento" }} />
    );
};
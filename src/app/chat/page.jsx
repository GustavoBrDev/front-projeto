import MaintenancePage from "@/components/pagesResponses/Maintenance";
import React from "react";

export default function Chat() {
    return (
        <MaintenancePage {...{ isPlanned: true,  estimatedTime: "1 Semana", customMessage: "Essa página está em desenvolvimento" }} />
    );
}
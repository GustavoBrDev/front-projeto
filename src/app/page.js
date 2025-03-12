"use client";

import { React } from "react";
import { SessionProvider } from "next-auth/react";
import { Login } from "./login/page";

export default function Home() {
    console.log("Home");
    return (
        <SessionProvider>
            <Login />
        </SessionProvider>
    );
}

import { React } from "react";
import LoggedUserOnly from "../LoggedUserOnly";

export default function Home() {
    return (
        <LoggedUserOnly><h1>Home</h1></LoggedUserOnly>
    );
}
import {React} from "react";

export const Button = ({ text, color, size }) => {
    return (
        <button className={`${color} ${size}`}>
            {text}
        </button>
    );
};
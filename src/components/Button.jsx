
/**
 * Componente de botão personalizado.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import {React} from "react";

export const Button = ({ text, color, size }) => {
    return (
        <button className={`${color} ${size}`}>
            {text}
        </button>
    );
};
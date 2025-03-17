
/**
 * Componente principal do aplicativo. 
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import { React } from "react";
import { Button } from "../components/Button";

export const App = () => {
    return (
        <div className="flex flex-col items-center gap-4 p-10">
            <Button text="Pequeno" color="btn-info" size="btn-xs" />
            <Button text="Médio" color="btn-success" size="btn-md" />
            <Button text="Grande" color="btn-warning" size="btn-lg" />
        </div>
    );
};
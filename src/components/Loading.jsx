
/**
 * Componente de carregamento animado.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import {React} from "react";

export const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};
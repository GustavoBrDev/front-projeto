
/**
 * Componente de alerta de sucesso. 
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import React from "react";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const SuccessAlert = ({ message }) => {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{message}</p>
        </div>
      </div>
    </div>
  )
}
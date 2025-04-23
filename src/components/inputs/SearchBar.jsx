import React from "react";
import { useState } from "react";

export default function SearchBar( { placeholder, onChange, filterOptions, onFilterChange } ) {
    const [showFilters, setShowFilters] = useState(false);
    return (
        <div className="relative flex items-center w-100 bg-gray-50 border border-gray-800 rounded-3xl px-3 py-2 space-x-2 shadow-md">
            {/* Ícone de pesquisa */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 016.328 10.05l3.31 3.31a1 1 0 01-1.415 1.414l-3.31-3.31A7 7 0 1111 4z" />
            </svg>

            {/* Campo de pesquisa */}
            <input
                className="w-full focus:outline-none placeholder-gray-400"
                type="text"
                placeholder={placeholder}
            />

            { filterOptions && filterOptions.length > 0 && (
            <div
                className="relative"
                onMouseEnter={() => setShowFilters(true)}
                onMouseLeave={() => setShowFilters(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.414 5.414A1 1 0 0015 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-8.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
                {showFilters && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {filterOptions.map((option, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>)}
        </div>
    );
}
"use client";

import { useState } from 'react';

export default function PasswordInput({
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  error,
  extraClasses = ''
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`py-2.5 block w-full border-b-2 sm:text-sm focus:outline-none focus:border-blue-500 transition duration-300 md:text-[var(--white)] text-[var(--black)] ${error ? 'border-red-500' : 'border-gray-300'} ${extraClasses}`}
        autoComplete="off"
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-black md:text-white transition-colors duration-200 focus:outline-none"
      >
        {showPassword ? (
          <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.658-4.218" />
            <path d="M6.06 6.06A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-1.172 2.157" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        )}
      </button>
    </div>
  );
}

"use client";

/**
 * Página de login do aplicativo.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnonymousOnly  from '../AnonymousOnly';
import Image from 'next/image';
import { RoutePaths } from '../RoutePaths';
import { ErrorAlert } from '@/components/alerts/ErrorAlert';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { React } from 'react';
import AcessLeft from '@/components/AcessLeft';
import AcessCard from '@/components/AcessCard';
import PasswordInput from '@/components/inputs/PasswordInput';

export default function Login () {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  let logoWidth = 200;
  let logoHeight = 200;
  let principalWidth = 800;
  let principalHeight = 800; 
  let iconeWidth = 30;
  let iconeHeight = 30;

  // Ajusta dimensões para telas pequenas
  const isSmallScreen = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  if (isSmallScreen) {
    logoWidth = 100;
    logoHeight = 100;
    principalWidth = 400;
    principalHeight = 400;
    iconeWidth = 20;
    iconeHeight = 20;
  } else {
    logoWidth = 200;
    logoHeight = 200;
    principalWidth = 800;
    principalHeight = 800; 
    iconeWidth = 30;
    iconeHeight = 30;
  }

  /**
 * Função de login do usuário.
 *
 * @param {object} e - Evento de submit do formulário.
 * @return {void}
 */
  async function handleSubmit (e) {
    e.preventDefault();

    if (email.trim() === '' && password.trim() === '') {
      setError('Email e senha são obrigatórios.');
      return;
    } else if (email.trim() === '') {
      setError('Email obrigatório.');
      return;
    } else if (password.trim() === '') {
      setError('Senha obrigatória.');
      return;
    }

    const errorReturn = searchParams.get('error');
    if (errorReturn) {
      
      if ( errorReturn === 'CredentialsSignin' ) {
        setError('Email ou senha incorretos.');
        console.log(errorReturn);
        return;
      }

      setError(errorReturn);
      console.log(errorReturn);
      return;
    }

    signIn('credentials', email, password).then(() => {
      setError('');
      router.push(RoutePaths.HOME);
    }).catch((error) => {
      setError(error.message);
      console.log(error);
    });
    
  };

  return (
    <>
      <AnonymousOnly>
      <main className="flex flex-col md:flex-row w-screen h-screen">
        
        <AcessLeft principalWidth={principalWidth} principalHeight={principalHeight} iconeWidth={iconeWidth} iconeHeight={iconeHeight}/>

        <AcessCard forms={
          <form onSubmit={handleSubmit}>
          <div className="my-8">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full md:text-[var(--white)] bg-transparent border-b-2 ${
                email.trim() === '' && error
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 transition duration-300`}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <PasswordInput 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  error={password.trim() === '' && error}
                />
          </div>
          { error && <ErrorAlert message={error} /> }
          <div className="mt-4 text-right mb-6">
            <a
              href={RoutePaths.FORGOT_PASSWORD}
              className="underline md:text-[var(--white)] hover:text-[var(--bluePrimary)]"
            >
              Esqueceu a senha?
            </a>
          </div>
          <button
            type="submit"
            className="bg-[var(--bluePrimary)] font-semibold rounded-md py-2 px-4 w-full text-[var(--white)]"
          >
            Login
          </button>
        </form>
        } logoWidth={logoWidth} logoHeight={logoHeight} textTitle={'Login'} text={'Entre com as informações da sua conta'}/>
      </main>
    </AnonymousOnly>
    </>
  );
};

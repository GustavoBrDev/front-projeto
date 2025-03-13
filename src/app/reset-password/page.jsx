"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnonymousOnly  from '../AnonymousOnly';
import { RoutePaths } from '../RoutePaths';
import { ErrorAlert } from '@/components/ErrorAlert';
import { React } from 'react';
import AcessLeft from '@/components/AcessLeft';
import AcessCard from '@/components/AcessCard';
import { SuccessAlert } from '@/components/SucessAlert';

export default function ResetPassword () {
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [error, setError] = useState('');
  const [ sucess, setSucess ] = useState('');
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

  async function changePassword (e) {

    

    e.preventDefault();

    if (password.trim() === '') {
      setError('Senha obrigatória.');
      return;
    } else if (confirmPassword.trim() === '') {
      setError('Confirme sua senha.');
      return;
    } else if (password !== confirmPassword) {
      setError('As senhas devem ser iguais.');
      return;
    } else if ( password.trim() === '' && confirmPassword.trim() === '') {
      setError('Senhas obrigatórias.');
      return;
    }

    /*const res = await fetch('http://localhost:9090/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, confirmPassword })
    });*/

    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200, // Simula uma resposta de sucesso
          json: async () => ({ message: "Senha alterada com sucesso" })
        });
      }, 1000);
    })

    if (res.status === 200) {
      setSucess('Senha alterada com sucesso.');
      setTimeout(() => {
        router.push(RoutePaths.LOGIN);
      }, 3000);
    }

  }

  async function checkPassword ( password) {
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return passwordRegex.test(password);

  }

  async function handleLogin (e) {
    router.push(RoutePaths.LOGIN)
  };

  return (
    <>
      <AnonymousOnly>
      <main className="flex flex-col md:flex-row w-screen h-screen">
        
        <AcessLeft principalWidth={principalWidth} principalHeight={principalHeight} iconeWidth={iconeWidth} iconeHeight={iconeHeight} />

        <AcessCard forms={
          <form onSubmit={changePassword}>
          <div className="my-8">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full md:text-[var(--white)] bg-transparent border-b-2 ${
                password.trim() === '' && error
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 transition duration-300`}
              autoComplete="off"
            />
          </div>

          <div className="my-8">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full md:text-[var(--white)] bg-transparent border-b-2 ${
                confirmPassword.trim() === '' && error
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 transition duration-300`}
              autoComplete="off"
            />
          </div>

          { sucess && <SuccessAlert message={sucess} /> }
          { error && <ErrorAlert message={error} /> }

          
          <button
            type="submit"
            className="bg-[var(--bluePrimary)] font-semibold rounded-md py-2 px-4 w-full text-[var(--white)]"
          >
            Alterar
          </button>

          <div className="mt-4 text-center mb-6">
            <a
              onClick={handleLogin}
              className="underline md:text-[var(--white)] hover:text-[var(--bluePrimary)]"
            >
              Voltar para o Login
            </a>
          </div>

        </form>
        } logoWidth={logoWidth} logoHeight={logoHeight} textTitle={'Redefinir Senha'} text={'Digite sua nova senha: '}/>
        
      </main>
    </AnonymousOnly>
    </>
  );
};

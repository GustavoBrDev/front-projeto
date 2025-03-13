"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AnonymousOnly  from '../AnonymousOnly';
import { RoutePaths } from '../RoutePaths';
import { ErrorAlert } from '@/components/ErrorAlert';
import { React } from 'react';
import AcessLeft from '@/components/AcessLeft';
import AcessCard from '@/components/AcessCard';
import { SuccessAlert } from '@/components/SucessAlert';

export default function ForgotPassword () {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [ firstEmailSent, setFirstEmailSent ] = useState(false);
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

  async function handleSendEmail (e) {

    e.preventDefault();
    if (countdown > 0) return; // Se ainda estiver no tempo de bloqueio, não faz nada

    if (email.trim() === '') {
      setError('Email obrigatório.');
      return;
    }

    /*const res = await fetch('http://localhost:9090/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });*/

    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200, // Simula uma resposta de sucesso
          json: async () => ({ message: "Email enviado com sucesso" })
        });
      }, 1000);
    });

    const data = await res.json();

    if (res.status === 200) {

      setError('');

      if (!firstEmailSent) {
        setFirstEmailSent(true);
        setSucess('Email enviado com sucesso.');
      } else {
        setSucess('Email reenviado com sucesso.');
      }

      setCountdown(60);
    } else {

      setSucess('');

      if ( ! firstEmailSent ) {
        setError(data.error || 'Ocorreu um erro ao enviar o email.');
      } else {
        setError(data.error || 'Ocorreu um erro ao reenviar o email.');
      }
    }
  }

  useEffect(() => {
    if (countdown === 0) return;
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  async function handleLogin (e) {
    router.push(RoutePaths.LOGIN)
  };

  return (
    <>
      <AnonymousOnly>
      <main className="flex flex-col md:flex-row w-screen h-screen">
        
        <AcessLeft principalWidth={principalWidth} principalHeight={principalHeight} iconeWidth={iconeWidth} iconeHeight={iconeHeight} />

        <AcessCard forms={
          <form onSubmit={handleSendEmail}>
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

          { sucess && <SuccessAlert message={sucess} /> }
          { error && <ErrorAlert message={error} /> }

          <div className="mt-4 text-right mb-6">
            <a
              onClick={handleSendEmail}
              className={countdown > 0 ? 'disabled-link text-[var(--gray)]' : 'active-link text-white'}
              style={{ cursor: countdown > 0 ? 'not-allowed' : 'pointer' }}
            >
               {countdown > 0 ? `Reenviar em ${countdown} s` : 'Reenviar email'}
            </a>
          </div>
          <button
            type="submit"
            disabled={firstEmailSent}
            className={
              firstEmailSent 
                ? 'bg-[var(--bluePrimary)] font-semibold rounded-md py-2 px-4 w-full text-[var(--gray)]'
                : 'bg-[var(--bluePrimary)] font-semibold rounded-md py-2 px-4 w-full text-[var(--white)]'
            }
          >
            Enviar
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
        } logoWidth={logoWidth} logoHeight={logoHeight} textTitle={'Recuperar Senha'} text={'Informe seu email para recuperar sua senha.'}/>
        
      </main>
    </AnonymousOnly>
    </>
  );
};

"use client";

/**
 * Página de redefinição de senha do aplicativo.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnonymousOnly from '../../AnonymousOnly';
import { RoutePaths } from '../../RoutePaths';
import { ErrorAlert } from '@/components/alerts/ErrorAlert';
import AcessLeft from '@/components/AcessLeft';
import AcessCard from '@/components/AcessCard';
import { SuccessAlert } from '@/components/alerts/SucessAlert';
import PasswordRequirements from '@/components/inputs/PasswordRequirements';
import PasswordInput from '@/components/inputs/PasswordInput'; // Importando o componente separado

export default function ResetPassword( { params } ) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [sucess, setSucess] = useState('');
  const [showChecklist, setShowChecklist] = useState(false);
  const [showConfirmChecklist, setShowConfirmChecklist] = useState(false);
  const router = useRouter();
  const { token } = params;

  if (!token) {
    router.push(RoutePaths.ERROR + '/401');
  }

  // Ajusta dimensões para telas pequenas
  let logoWidth = 200;
  let logoHeight = 200;
  let principalWidth = 800;
  let principalHeight = 800; 
  let iconeWidth = 30;
  let iconeHeight = 30;
  const isSmallScreen = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  if (isSmallScreen) {
    logoWidth = 100;
    logoHeight = 100;
    principalWidth = 400;
    principalHeight = 400;
    iconeWidth = 20;
    iconeHeight = 20;
  }

  /**
 * Função de redefinição de senha do usuário.
 *
 * @param {object} e - Evento de submit do formulário.
 * @return {void}
 */
  async function changePassword(e) {
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
    }

    try {
      const res = await fetch(`http://localhost:9090/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (res.status === 200) {
        setSucess('Senha alterada com sucesso.');
        setTimeout(() => {
          router.push(RoutePaths.LOGIN);
        }, 3000);
      } else {
        setError('Erro ao alterar a senha. O tempo do link expirou.');
      }
    } catch (error) {
      setError(error.message);
    }
  }

  /**
 * Função de login do usuário.
 *
 * @return {void}
 */
  function handleLogin() {
    router.push(RoutePaths.LOGIN);
  }

  return (
    <AnonymousOnly>
      <main className="flex flex-col md:flex-row w-screen h-screen">
        <AcessLeft 
          principalWidth={principalWidth} 
          principalHeight={principalHeight} 
          iconeWidth={iconeWidth} 
          iconeHeight={iconeHeight} 
        />

        <AcessCard 
          forms={
            <form onSubmit={changePassword}>
              <div className="my-8 relative">
                <PasswordInput 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  onFocus={() => setShowChecklist(true)}
                  onBlur={() => setShowChecklist(false)}
                  error={password.trim() === '' && error}
                />
                {showChecklist && (
                  <PasswordRequirements 
                    password={password} 
                    confirmPassword={confirmPassword}
                  />
                )}
              </div>

              <div className="my-8 relative">
                <PasswordInput 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
                  onFocus={() => setShowConfirmChecklist(true)}
                  onBlur={() => setShowConfirmChecklist(false)}
                  error={confirmPassword.trim() === '' && error}
                />
                {showConfirmChecklist && (
                  <PasswordRequirements 
                    password={password} 
                    confirmPassword={confirmPassword}
                  />
                )}
              </div>

              {sucess && <SuccessAlert message={sucess} />}
              {error && <ErrorAlert message={error} />}

              <button
                type="submit"
                className="bg-[var(--bluePrimary)] font-semibold rounded-md py-2 px-4 w-full text-[var(--white)] mt-4"
              >
                Alterar
              </button>

              <div className="mt-4 text-center mb-6">
                <a
                  onClick={handleLogin}
                  className="underline hover:text-[var(--bluePrimary)] md:text-[var(--white)] text-[var(--black)] cursor-pointer"
                >
                  Voltar para o Login
                </a>
              </div>
            </form>
          }
          logoWidth={logoWidth}
          logoHeight={logoHeight}
          textTitle={'Redefinir Senha'}
          text={'Digite sua nova senha:'}
        />
      </main>
    </AnonymousOnly>
  );
}

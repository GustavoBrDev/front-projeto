import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnonymousOnly } from '../AnonymousOnly';
import Image from 'next/image';
import { RoutePaths } from '../RoutePaths';
import { ErrorAlert } from '@/components/ErrorAlert';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export const Login = () => {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState('');
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

  async function handleSubmit (e) {
    e.preventDefault();

    if (username.trim() === '' && password.trim() === '') {
      setError('Email e senha são obrigatórios.');
      return;
    } else if (username.trim() === '') {
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
        return;
      }

      setError(errorReturn);
      return;
    }

    signIn('credentials', username, password).then(() => {
      setError('');
      router.push(RoutePaths.HOME);
    }).catch((error) => {
      setError(error.message);
    });
    
  };

  return (
    <AnonymousOnly>
      <main className="flex flex-col md:flex-row w-screen h-screen">
        {/* Seção da imagem e mensagem */}
        <div className="flex-1 md:flex-[3] bg-[var(--blueSecondary)] p-6">
          <Image
            src="/icone.png"
            alt="Logo"
            width={iconeWidth}
            height={iconeHeight}
            priority={true}
            objectFit="contain"
          />
          <h1 className="text-5xl font-bold font-(family-name:<Poppins>) text-[var(--white)] mt-12">
            Bem-Vindo ao
          </h1>
          <h2 className="text-4xl font-(family-name:<Poppins>) text-[var(--white)]">
            conselho do estudante
          </h2>
          <p className="text-1xl font-(family-name:<Poppins>) text-[var(--white)]">
            Pare de correr atrás de seus sonhos e faça-os virem até você
          </p>
          
          <div className="flex justify-center items-center mt-12">
            <Image
              src="/principal.png"
              alt="Principal"
              width={principalWidth}
              height={principalHeight}
              priority={true}
              objectFit="contain"
            />
          </div>
        </div>

        {/* Seção do formulário */}
        <div className="flex-2 md:flex-[2] flex justify-center items-center">
          <div className="bg-transparent md:bg-[var(--blueSecondary)] p-8 rounded w-full md:w-2/3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={logoWidth}
              height={logoHeight}
              priority={true}
              className="mx-auto mb-12 hidden md:block"
              objectFit="contain"
            />
            <h3 className="text-3xl font-bold font-(family-name:<Poppins>) mb-3 md:text-[var(--white)]">
              Login
            </h3>
            <p className="text-1xl font-medium font-(family-name:<Poppins>) mb-3 md:text-[var(--white)]">
              Entre com as informações da sua conta
            </p>
            <form onSubmit={handleSubmit}>
              <div className="my-8">
                <input
                  type="email"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full md:text-[var(--white)] bg-transparent border-b-2 ${
                    username.trim() === '' && error
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 transition duration-300`}
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
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
              { error && <ErrorAlert message={error} /> }
              <div className="mt-4 text-right mb-6">
                <a
                  href="#"
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
          </div>
        </div>
      </main>
    </AnonymousOnly>
  );
};

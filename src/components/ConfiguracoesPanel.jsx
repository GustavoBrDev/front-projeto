// src/components/ConfiguracoesPanel.js
'use client';

import { useContext } from 'react';
import { Switch } from '@/components/inputs/Switch';
import Link from 'next/link';
import { RoutePaths } from '@/app/RoutePaths';
import { ThemeContext } from '@/app/ThemeContext';

export default function ConfiguracoesPanel() {
  const {
    tema,
    setTema,
    tamanhoFonte,
    setTamanhoFonte,
    corSistema,
    setCorSistema,
    linguaSinais,
    setLinguaSinais,
    audioDescricao,
    setAudioDescricao,
  } = useContext(ThemeContext);

  const handleLogout = () => {
    // localStorage.removeItem("token");
  };

  const colors = [
    { id: 'blue', color: '#0047AB', label: 'Azul' },
    { id: 'green', color: '#008000', label: 'Verde' },
    { id: 'red', color: '#B22222', label: 'Vermelho' },
    { id: 'purple', color: '#800080', label: 'Roxo' },
    { id: 'orange', color: '#FF8C00', label: 'Laranja' },
  ];

  return (
    <div className="bg-[var(--bluePrimary)] rounded-lg p-2 m-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna da esquerda */}
        <div className="bg-navy-800 rounded-lg p-6 text-white ml-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Tema & Fonte
          </h2>

          {/* Seleção de Tema */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">
              Mudar Tema
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Selecione o tema de sua preferência.
            </p>
            <div className="relative inline-block w-32">
              <select
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="appearance-none bg-white rounded-md py-1 pl-3 pr-8 w-full cursor-pointer"
                style={{ color: 'var(--bluePrimary)' }}
              >
                <option value="Claro">Claro</option>
                <option value="Escuro">Escuro</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  className="fill-current h-4 w-4"
                  style={{ color: 'var(--bluePrimary)' }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Seleção de Tamanho de Fonte */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">
              Aumentar Fonte
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Selecione o tamanho de fonte ideal para você.
            </p>
            <div className="relative inline-block w-32">
              <select
                value={tamanhoFonte}
                onChange={(e) => setTamanhoFonte(e.target.value)}
                className="appearance-none bg-white rounded-md py-1 pl-3 pr-8 w-32 cursor-pointer"
                style={{ color: 'var(--bluePrimary)' }}
              >
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="fill-current h-4 w-4"
                  style={{ color: 'var(--bluePrimary)' }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Seleção de Cor do Sistema */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">
              Cor do Sistema
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Selecione a cor que mais combina com sua personalidade.
            </p>
            <div className="flex space-x-4 mt-3">
              {colors.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="relative w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setCorSistema(item.id)}
                  title={item.label}
                  aria-label={`Selecionar cor ${item.label}`}
                >
                  {corSistema === item.id && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna da direita */}
        <div className="bg-navy-800 rounded-lg p-6 text-white ml-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Acessibilidade
          </h2>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">
              Língua de Sinais
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Ative o modo Língua de Sinais.
            </p>
            <Switch checked={linguaSinais} onCheckedChange={setLinguaSinais} />
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">
              Audiodescrição
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Ative o modo Audiodescrição.
            </p>
            <Switch checked={audioDescricao} onCheckedChange={setAudioDescricao} />
          </div>

          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">
              Sair da conta
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Realize o logout
            </p>
            <Link href={RoutePaths.LOGIN} onClick={handleLogout}>
              <button className="bg-white text-navy-800 rounded-md py-1 px-4 flex items-center gap-1 hover:bg-gray-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'var(--bluePrimary)' }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span style={{ color: 'var(--bluePrimary)' }}>Logout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

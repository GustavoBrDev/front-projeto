import { createContext } from 'react';

export const ThemeContext = createContext({
  tema: 'Claro',
  setTema: () => {},
  tamanhoFonte: 'Pequeno',
  setTamanhoFonte: () => {},
  corSistema: 'blue',
  setCorSistema: () => {},
  linguaSinais: false,
  setLinguaSinais: () => {},
  audioDescricao: false,
  setAudioDescricao: () => {},
});
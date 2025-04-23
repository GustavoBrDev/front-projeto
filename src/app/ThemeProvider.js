import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const palette = {
  blue: ['#0A336D', '#0166B4', '#3AA9DC'],
  green: ['#4CAF50', '#16b51c', '#008000'],
  red: ['#db4d2e', '#B22222', '#f25757'],
  purple: ['#d277f7', '#9B59B6', '#904fab'],
  orange: ['#f27607', '#e88b2e', '#faa32a'],
};

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState('Pequeno');
  const [corSistema, setCorSistema] = useState('blue');
  const [linguaSinais, setLinguaSinais] = useState(false);
  const [audioDescricao, setAudioDescricao] = useState(false);

  useEffect(() => {
    const entries = [
      ['corSistema', setCorSistema],
      ['tema', setTema],
      ['tamanhoFonte', setTamanhoFonte],
      ['linguaSinais', (val) => setLinguaSinais(val === 'true')],
      ['audioDescricao', (val) => setAudioDescricao(val === 'true')],
    ];
    entries.forEach(([key, setter]) => {
      const val = localStorage.getItem(key);
      if (val !== null) setter(val);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('tema', tema);
  }, [tema]);

  useEffect(() => {
    localStorage.setItem('tamanhoFonte', tamanhoFonte);
  }, [tamanhoFonte]);

  useEffect(() => {
    localStorage.setItem('linguaSinais', String(linguaSinais));
  }, [linguaSinais]);

  useEffect(() => {
    localStorage.setItem('audioDescricao', String(audioDescricao));
  }, [audioDescricao]);

  useEffect(() => {
    localStorage.setItem('corSistema', corSistema);
    const root = document.documentElement;
    const [p1, p2, p3] = palette[corSistema] || palette.blue;
    root.style.setProperty('--bluePrimary', p1);
    root.style.setProperty('--blueSecondary', p2);
    root.style.setProperty('--blueTertiary', p3);
  }, [corSistema]);

  return (
    <ThemeContext.Provider value={{ tema, setTema, tamanhoFonte, setTamanhoFonte, corSistema, setCorSistema, linguaSinais, setLinguaSinais, audioDescricao, setAudioDescricao }}>
      {children}
    </ThemeContext.Provider>
  );
}
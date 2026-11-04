import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export default function useTheme(): [Theme, () => void] {
  const [t, setT] = useState<Theme>(() => {
    try {
      const s = localStorage.getItem('sgsml-theme');
      if (s === 'light' || s === 'dark') return s;
    } catch (e) {}
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('sgsml-theme', t); } catch (e) {}
  }, [t]);
  return [t, () => setT(t === 'dark' ? 'light' : 'dark')];
}

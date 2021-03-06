import { useCallback } from 'react';

const COLOR = {
  2: '#eee4da',
  4: '#ede0c8',
  8: '#f2b179',
  16: '#f59563',
  32: '#f67c5f',
  64: '#f65e3b',
  128: '#edcf72',
  256: '#edcc61',
  512: '#edc850',
  1024: '#edc813',
  2048: '#fac999'
};

export function useColor() {
  const get = useCallback((key) => {
    return COLOR[key];
  }, []);

  return { get };
}
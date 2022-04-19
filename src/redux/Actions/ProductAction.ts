export const COMPRAR = 'COMPRAR';

export const Comprar = () => {
  return {
    type: COMPRAR,
    payload: {
      name: 'pollo',
      cant: 2,
    },
  };
};

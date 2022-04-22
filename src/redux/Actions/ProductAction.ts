export const COMPRAR = 'COMPRAR';

export const Comprar = (name: string, cant: number) => {
  return {
    type: COMPRAR,
    payload: {
      name,
      cant,
    },
  };
};

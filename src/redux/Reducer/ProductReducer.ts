import { COMPRAR } from '../Actions/ProductAction';

export interface Product {
  name: string;
  cant: number;
  precio: number;
}

const initialState: Product[] = [
  {
    name: 'carne de cerdo',
    cant: 4,
    precio: 4.99,
  },
  {
    name: 'picadillo',
    cant: 7,
    precio: 2.99,
  },
  {
    name: 'pollo',
    cant: 10,
    precio: 3.99,
  },
];

export const ProductReducer = (
  state: Product[] = initialState,
  action: any
) => {
  switch (action.type) {
    case COMPRAR: {
      const dataUpdate = [...state];
      const index = state.findIndex(
        (product) => product.name === action.payload.name
      );
      dataUpdate[index] = {
        ...state[index],
        cant: state[index].cant - action.payload.cant,
      };
      return [...dataUpdate];
    }
    default:
      return state;
  }
};

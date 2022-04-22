import { COMPRAR } from '../Actions/ProductAction';
import bowl from '../../components/Producto/icons/3377055_food_bowl_noodle_ramen.png';
import curry from '../../components/Producto/icons/3377057_curry_food_japan_spice.png';
import pescado from '../../components/Producto/icons/3377059_japanese_fishing_fish_food.png';
import mok from '../../components/Producto/icons/3377061_food_thai_hor_mok.png';
import thai from '../../components/Producto/icons/3377058_green_thai_curry_food.png';

export interface Product {
  name: string;
  cant: number;
  precio: number;
  img: any;
}

const initialState: Product[] = [
  {
    name: 'Huevos',
    cant: 4,
    precio: 4.99,
    img: bowl
  },
  {
    name: 'Curry',
    cant: 7,
    precio: 2.99,
    img: curry
  },
  {
    name: 'Pescado',
    cant: 10,
    precio: 3.99,
    img: pescado
  },
  {
    name: 'Sopa',
    cant: 10,
    precio: 2.99,
    img: mok
  },
  {
    name: 'Thai',
    cant: 10,
    precio: 5.99,
    img: thai
  },
];

export const ProductReducer = ( state: Product[] = initialState, action: any ) => {
  switch (action.type) {
    case COMPRAR: {
      const stateUpdate = [...state];
      const index = state.findIndex(
        (product) => product.name === action.payload.name
      );
      stateUpdate[index] = {
        ...state[index],
        cant: state[index].cant - action.payload.cant,
      };
      return [...stateUpdate];
    }
    default:
      return state;
  }
};

import './Style.css';
import img1 from './icons/3377052_tod_mun_thai_food.png';
import img2 from './icons/3377054_mein_noodle_chow_food.png';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import { useState } from 'react';

interface Props {
  prod: any;
}

const Producto = ({ prod }: Props) => {
  const [cantSelect, setCantSelect] = useState(0);

  const handleCant = (cant: number) => {
    console.log(cant);
    setCantSelect(cant);
  };

  return (
    <div className="card-producto">
      {cantSelect !== 0 && <span>{cantSelect}</span>}
      <div className="box">
        <img src={img2} alt="food" className="imgFood" />
      </div>
      <div className="container-info">
        <p>
          {prod.name} - ${prod.precio}
        </p>
        <ButtonAdd max={prod.cant} cantSelect={handleCant} />
      </div>
    </div>
  );
};

export default Producto;

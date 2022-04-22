import './Style.css';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import { useState } from 'react';

interface Props {
  prod: any;
}

const Producto = ({ prod }: Props) => {
  const { name, precio, img, cant } = prod;
  const [cantSelect, setCantSelect] = useState(0);

  const handleCant = (cant: number) => {
    setCantSelect(cant);
  };

  return (
    <div className="card-producto">
      <div className="box">
        {cantSelect !== 0 && <p className="badge yellow">{cantSelect}</p>}
        <img src={img} alt="food" className="imgFood" />
      </div>
      <div className="container-info">
        <p>
          {name}.${precio}
        </p>
        <ButtonAdd max={cant} oneCantSelect={handleCant} />
      </div>
    </div>
  );
};

export default Producto;

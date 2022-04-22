import { useSelector } from 'react-redux';
import Producto from '../Producto/Producto';
import './Style.css';

const Productos = () => {
  const products: any = useSelector<any>((state) => state.product);

  return (
    <div>
      <h1>Productos</h1>
      <div className="flex-container">
        {products.map((prod: any, index: number) => (
          <Producto key={index} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Productos;

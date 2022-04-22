import { useSelector } from 'react-redux';
import Producto from '../Producto/Producto';
import './Style.css';

const Productos = () => {
  const products: any = useSelector<any>((state) => state.product);

  return (
    <div>
      <h1
        style={{ fontFamily: 'Dank Mono', textAlign: 'center', color: 'white' }}
      >
        Productos
      </h1>
      <div className="flex-container">
        {products.map((prod: any, index: number) => (
          <Producto key={index} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Productos;

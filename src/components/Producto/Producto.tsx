import './Style.css';
import img1 from './icons/3377052_tod_mun_thai_food.png'
import img2 from './icons/3377054_mein_noodle_chow_food.png'

interface Props {
  prod: any;
}

const Producto = ({ prod }: Props) => {
  
  return (
    <div className="card-producto">
      <div className='box'>
      <img src={img2} alt="food" className='imgFood' />
      </div>
      <div className='container-info'>
        <p>
          {prod.name} - ${prod.precio}
        </p>
        <button className='button-add'>Comprar</button>
      </div>
    </div>
  );
};

export default Producto;

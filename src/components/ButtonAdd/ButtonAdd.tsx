import { useEffect, useState } from 'react';
import './Style.css';

interface Props {
  max: number;
  cantSelect?: any;
}

const ButtonAdd = ({ max, cantSelect }: Props) => {
  const [two, setTwo] = useState(false);
  const [cant, setCant] = useState(0);
  useEffect(() => cantSelect(cant), [cant, cantSelect]);

  const handleClickAdd = () => {
    setTwo(true);
    setCant((cant) => cant + 1);
  };
  const handleClickInc = () => {
    setCant((cant) => (cant + 1 > max ? cant : cant + 1));
  };

  const handleClickDec = () => {
    setCant((cant) => (cant - 1 < 0 ? cant : cant - 1));
  };

  return (
    <div>
      {two && cant > 0 ? (
        <div>
          <button className="button-add" onClick={handleClickDec}>
            -
          </button>
          <button className="button-add" onClick={handleClickInc}>
            +
          </button>
        </div>
      ) : (
        <button className="button-add" onClick={handleClickAdd}>
          Add
        </button>
      )}
    </div>
  );
};

export default ButtonAdd;

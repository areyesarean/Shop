import { useEffect, useState } from 'react';
import './Style.css';
import { AddCircle, RemoveCircle } from '@material-ui/icons';

interface Props {
  max: number;
  oneCantSelect?: any;
}

const ButtonAdd = ({ max, oneCantSelect }: Props) => {
  const [two, setTwo] = useState(false);
  const [cant, setCant] = useState(0);
  useEffect(() => oneCantSelect(cant), [cant, oneCantSelect]);

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
          <button className="button orange" onClick={handleClickDec}>
            <RemoveCircle />
          </button>
          <button className="button yelow" onClick={handleClickInc}>
            <AddCircle />
          </button>
        </div>
      ) : (
        <button className="button button-add yelow" onClick={handleClickAdd}>
          Add
        </button>
      )}
    </div>
  );
};

export default ButtonAdd;

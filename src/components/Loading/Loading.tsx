import './style.css';

const Loading = () => {
  return (
    <div className="container">
      <div className="spiner"></div>
      <div style={{textAlign: 'center'}}>Cargando...</div>
    </div>
  );
};

export default Loading;

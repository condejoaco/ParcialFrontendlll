function Card({nombre, artista}) {
    return (
      <div >
        <h2>Informacion ingresada:</h2>
        <p>Hola {nombre}</p>
        <p>Sabemos que tu artista favorito es: {artista}</p>
      </div>
    );
  }
  
  export default Card;
  
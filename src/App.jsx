import { useState } from "react";
import Formulario from "./components/Formulario"
import Card from "./components/Card"
import "./App.css"

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [artistaFavorito, setArtistaFavorito] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombreCompleto.length <= 3) {
      alert("Por favor ingresar un nombre con una cantidad de caracteres mayor a 3 o elimina los espacios en blanco al comienzo")
    } else if(artistaFavorito.length < 6){ 
      alert("Por favor ingresar una banda con una cantidad de caracteres mayor a 6")
    } else {
      setMostrarCard(true);
    }
  }

  return (
    <div className="App">
      <h1>Elige un artista</h1>
      <form onSubmit={handleSubmit}>
        <Formulario
        nombreCompleto={nombreCompleto}
        setNombreCompleto={setNombreCompleto}
        artistaFavorito={artistaFavorito}
        setArtistaFavorito={setArtistaFavorito}
        />
        </form>
        {mostrarCard && <Card nombre={nombreCompleto} artista={artistaFavorito} />}
    </div>
  );
}

export default App;


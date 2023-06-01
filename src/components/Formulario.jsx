const Formulario = ({nombreCompleto, setNombreCompleto, artistaFavorito, setArtistaFavorito}) => {
    return(
        <>
        <label>Nombre Completo: </label>
        <input 
            type="text"
            placeholder="Nombre completo"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
        />
        <br></br>
        <label>Artista favorito: </label>
        <input
            type="text"
            placeholder="Artista favorito"
            value={artistaFavorito}
            onChange={(e) => setArtistaFavorito(e.target.value)}
        />
        <br></br>
        <button type="submit">Registrarse</button>
        </>
        
    )
}

export default Formulario;
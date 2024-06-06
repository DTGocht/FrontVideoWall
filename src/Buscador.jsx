import React, { useState } from 'react';
import Resultados from './resultados';
import './Buscador.css'; // Make sure to create this CSS file

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [controlador, setControlador] = useState(true);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleVolver = () => {
    setControlador(true);
    setSearchTerm(''); // Vaciar el campo de búsqueda cuando se presiona "Volver"
  };

  return (
    <div className="search-container">
      <div className="header-reservas">
        <button onClick={handleVolver} style={{display: controlador ? "none" : "flex"}} className='volver-boton'>Volver</button>
        <div className="search-title">Buscador de reservas</div>
      </div>

      <form onSubmit={handleSearch} style={{display: controlador ? "flex" : "none"}}>
        <input
          type="text"
          placeholder="Escanea credencial para ver reservas."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <button type="submit" className="search-button" onClick={() => setControlador(false)}>Buscar</button>
      </form>

      <div className='alt-container' style={{display: controlador ? "none" : "flex"}}>
        <Resultados matricula={searchTerm} />
      </div>
    </div>
  );
};

export default Buscador;

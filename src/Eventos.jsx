import React, { useState, useEffect } from 'react';
import './Eventos.css';
import Evento from './Evento';

// Componente principal Eventos
const Eventos = () => {
  const [eventosData, setEventosData] = useState([]); // Estado inicial vacío
  const [evento, setEvento] = useState(null);
  const [controlador, setControlador] = useState(true);

  // Efecto para cargar los datos de los eventos desde el backend al montar el componente
  useEffect(() => {
    fetch('https://backmongo.azurewebsites.net/eventos') // URL de tu backend
      .then(response => response.json())
      .then(data => {
        // Mapeamos los datos recibidos para ajustarlos a la estructura esperada en el frontend
        const eventosMapeados = data.map(evento => ({
          id: evento._id,
          icon: evento.imagen, // Asegúrate de tener las imágenes localmente o ajusta esta ruta
          title: evento.titulo,
          dia: evento.dia_evento,
          description: evento.descripcion,
          hora_inicio: evento.duracion_i,
          hora_final: evento.duracion_f,
          nombre_sala: evento.lugar,
          
        }));
        setEventosData(eventosMapeados);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="eventos-container">
      <div className="header-eventos">
        <button onClick={() => setControlador(true)} style={{ display: controlador ? "none" : "flex" }} className='volver-boton'>Volver</button>
        <div className="eventos-title">Eventos D.R.E.A.M.</div>
      </div>

      <div className="all-eventos" style={{ display: controlador ? "block" : "none" }}>
        <div className="eventos-padre">
        {eventosData.map(event => (
          <div key={event.id} className="event-item" onClick={() => {
            setControlador(false);
            setEvento(event);
          }} >
            <img src={event.icon} className="event-icon" alt="Evento" />
            <div className="event-info">
              <div className="event-title">{event.title}</div>
              <div className="event-description">{event.description}</div>
            </div>
            <div className="event-arrow">➤</div>
          </div>
        ))}
        </div>
      </div>

      {evento && <div className="evento-container" style={{ display: controlador ? "none" : "flex" }}>
        <Evento evento={evento} />
      </div>}
    </div>
  );
};

export default Eventos;

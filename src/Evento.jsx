import React from 'react';
import './Eventos.css';
import Apple from './assets/Apple.png';
import Unity from './assets/Unity.png';
import Ai from './assets/AI.png';
import Goog from './assets/Goog.png';


const Evento = ({evento}) => {
  return (
    <div className="evento-container">
        <div className="in-evento">
        <div className='in-imagen'>
        <img src={evento.icon}  />
        </div>
        
        <div className='in-texto'>
        <div>
        <h2>{evento.title}</h2>
        <p>{evento.description}</p>
        <p> {evento.nombre_sala}</p>
        <p>Dia del evento: {evento.dia}</p>
        <p>Hora de Inicio: {evento.hora_inicio} </p>
        <p>Hora Final: {evento.hora_final} </p>
        </div>

        </div>

        </div>
    </div>
  );
};

export default Evento;
import React, { useState, useEffect } from 'react';
import './Buscador.css'; // Make sure to create this CSS file

const Resultados = ({ matricula }) => {
  const [reservas, setReservas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://apidream.azurewebsites.net/reserva/RFID/${matricula}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [matricula]); // This will re-run the effect whenever `matricula` changes

  return (
    <div className="resultados-container">
      <div id='container-reservas'>
        {isLoading ? (
          <div>Loading...</div>
        ) : reservas.length > 0 ? (
          reservas.map((reserva) => (
            <div key={reserva.id_reserva} className="reserva">
              <p>#Reserva: {reserva.id_reserva}</p>
              <div>Sala: {reserva.nombre_sala}</div>
              <p>Reserva: {new Date(reserva.dia_reserva).toLocaleDateString('es-MX', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'})}</p>
                <p>Inicio: {new Date(reserva.hora_inicio).toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC'})
                  } Final: {new Date(reserva.hora_final).toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC'})}</p>
            </div>
          ))
        ) : (
          <div>No existen reservas para la matrícula proporcionada.</div>
        )}
      </div>
    </div>
  );
};

export default Resultados;

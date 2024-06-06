import React, { useState, useEffect } from 'react';
import './DatosDia.css';
import reloj from './assets/reloj.png';
import nube from './assets/Nube.png';
import Calend from './assets/Calend.png';
import DreamI from './assets/DREAMI.png';

const DatosDia = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); // Initializes state with the current date and time

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date()); // Updates the currentDateTime every minute
    }, 60000); // 60000 ms = 1 minute
    return () => {
      clearInterval(timer); // Clears interval on component unmount
    };
  }, []);

  // Function to format the date as MM/DD/YYYY
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Function to format the time as HH:MM AM/PM
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const temperature = "25°C";
  const weatherCondition = "Nublado"; // Cloudy

  return (
    <div className="Encabezado">
      <div className="datos-dia">
        <div className="date">
          <img src={Calend}  className="icon" /> {formatDate(currentDateTime)}
        </div>
        <div className="time">
          <img src={reloj}  className="icon" /> {formatTime(currentDateTime)}
        </div>
        <div className="weather">
          <img src={nube}  className="icon" /> {weatherCondition} {temperature}
        </div>
      </div>
      <div className='DreamLab-titulo'>
        <img src={DreamI}/>
        <h1>D.R.E.A.M</h1>
        <h1>LAB</h1>
      </div>
    </div>

  );
};

export default DatosDia;

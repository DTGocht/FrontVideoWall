import React,{useRef,useState, useEffect} from 'react';
import './Salas.css';
import Electricmini from './assets/Electricmini.png';
import LegoRoom from './assets/Legomini.png';


const rooms1 = [
    { name: "Lego Room 1", time: "7:00 AM - 8:30 AM", imageUrl: LegoRoom},
    { name: "Electric Garage 1", time: "7:00 AM - 8:30 AM", imageUrl:  Electricmini },
    { name: "Lego Room 2", time: "7:00 AM - 8:30 AM", imageUrl:  LegoRoom },
    { name: "Electric Garage 2", time: "7:00 AM - 8:30 AM", imageUrl:  Electricmini},
    { name: "Electric Garage 2", time: "7:00 AM - 8:30 AM", imageUrl:  Electricmini},
    { name: "Electric Garage 1", time: "7:00 AM - 8:30 AM", imageUrl:  Electricmini },
    { name: "Lego Room 2", time: "7:00 AM - 8:30 AM", imageUrl:  LegoRoom },
    
    ];
const rooms2 = [
    { name: "Lego Room 3", time: "17:00 PM - 18:30 PM", imageUrl: LegoRoom}, 
    { name: "Electric Garage 3", time: "17:00 PM - 18:30 PM", imageUrl:  Electricmini},
    { name: "Lego Room 4", time: "11:00 AM - 12:30 PM", imageUrl:  LegoRoom},
    { name: "Electric Garage 4", time: "12:00 PM - 13:30 PM", imageUrl:  Electricmini},
    { name: "Electric Garage 4", time: "12:00 PM - 13:30 PM", imageUrl:  Electricmini},
    { name: "Lego Room 3", time: "17:00 PM - 18:30 PM", imageUrl: LegoRoom}, 
    { name: "Electric Garage 3", time: "17:00 PM - 18:30 PM", imageUrl:  Electricmini},
    
    ];

const Ocupado = () => {

  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const autoScroll = (ref) => {
    const scrollElement = ref.current;
    const scrollHeight = scrollElement.scrollHeight;
    const visibleHeight = scrollElement.clientHeight;

    let allowScroll = true;

    const scrollDown = () => {
        if (scrollElement.scrollTop < scrollHeight - visibleHeight && allowScroll) {
            scrollElement.scrollBy({ top: 1, behavior: 'smooth' });
        } else {
            allowScroll = false;
            scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => allowScroll = true, 5000); // Esperar 1 segundo antes de permitir el desplazamiento de nuevo
        }
    };

    const intervalId = setInterval(scrollDown, 50);
    return () => clearInterval(intervalId);
  };

  useEffect(() => {
      return autoScroll(scrollRef);
  }, []);

  useEffect(() => {
      return autoScroll(scrollRef2);
  }, []);
    return (
    <div className="room-father">
      
        <div className="room-container">
          <h2 className="room-title">Salas Ocupadas</h2>
          <div className='salas-container' ref={scrollRef}>
          {rooms1.map((room, index) => (
            <div key={index} className="room">
              <img src={room.imageUrl} className="room-image"/>
              <div className="room-details">
                <div className="room-name">{room.name}</div>
                <div className="room-time">{room.time}</div>
              </div>
            </div>
          ))}
          </div>

        </div>

        <div className="room-container">
        <h2 className="room-title">Salas Disponibles</h2>
        <div className='salas-container' ref={scrollRef2} >
        {rooms2.map((room, index) => (
          <div key={index} className="room">
            <img src={room.imageUrl} className="room-image"/>
            <div className="room-details">
              <div className="room-name">{room.name}</div>
              <div className="room-time">{room.time}</div>
            </div>
          </div>
        ))}
        </div>

      </div>
    </div>
        
      );
    };
export default Ocupado;
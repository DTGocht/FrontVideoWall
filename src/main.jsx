import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Slider from './Slider.jsx'
import Eventos from './Eventos.jsx'
import Salas from './Salas.jsx'
import './index.css'
import Datos from './DatosDia.jsx'
import Buscador from './Buscador.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='all-bodys'>
   <div className='body1'>
    <Datos />
    <Buscador />
    </div>

   <div className='body2'>
      <Salas />
      <Eventos />
   </div>

   <div className='body3'>
    <Slider/>
   </div>
   </div>

    
  </React.StrictMode>,
)

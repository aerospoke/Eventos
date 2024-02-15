import React, { useEffect, useState } from 'react';

const EventAvalibleAPI = () => {
  const [datosAPI, setDatosAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const url = 'https://api.escuelajs.co/api/v1/products';
        const options = {
            method: 'GET',
    
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setDatosAPI(data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []); 

  
  return datosAPI;
};

export default EventAvalibleAPI;


/* eslint-disable react/prop-types */
import { Button, Card } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Cards = ({img, alt, title, description, rute}) => {

  const [shouldAddHorizontal, setShouldAddHorizontal] = useState(false);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      setShouldAddHorizontal(screenWidth > 768 && screenWidth < 1023);
    }
    // Agregar un event listener para el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);
    // Limpia el event listener en el cleanup de useEffect
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const card = document.getElementById('card');
    if (shouldAddHorizontal) {
      card.setAttribute('horizontal', '');
    } else {
      card.removeAttribute('horizontal');
    }
  }, [shouldAddHorizontal]);

    return (
        <Card
          id="card"
          className="max-w-sm bg-gradient-900"
          imgAlt={alt}
          imgSrc={img}
          theme={{ root: {base: 'flex rounded-lg border border-borderDark bg-gradient-to-b from-gradient-900 to-gradient-700 drop-shadow-md dark:border-gray-700 dark:bg-gray-800 transition-transform ease-in duration-300 transform hover:scale-105'} }}
          horizontal={shouldAddHorizontal ? true : null}
        >
          <h5 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-400">
            {description}
          </p>
          <Button as={NavLink} to={rute}>Ver proyecto</Button>
        </Card>
      );
};
  


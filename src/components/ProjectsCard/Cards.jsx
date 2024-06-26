/* eslint-disable react/prop-types */
import { Button, Card } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dataCard from "@/data/card.json";
import { Tags } from "./Tags";

export const Cards = () => {

  const [shouldAddHorizontal, setShouldAddHorizontal] = useState(false);

  const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/project/${id}`);
    };

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      setShouldAddHorizontal(screenWidth > 767 && screenWidth < 1023);
    }
    handleResize();
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
      <>
        {dataCard.map((item, index) => (
          <div key={index}>
                <Card
                id="card"
                className="max-w-sm w-[80vw] bg-gradient-to-b from-cardGradient-secondary to-cardGradient-primary 
                drop-shadow-sm border border-borderColor border-opacity-30
                dark:bg-gradient-to-b dark:from-darkCardGradient-primary dark:to-darkCardGradient-secondary dark:border-borderDark"
                imgAlt={item.alt}
                imgSrc={item.img}
                theme={{ root: {base: 'flex rounded-lg dark:border-gray-700 transition-transform ease-in duration-300 transform hover:scale-105'}, img: {horizontal: {off: 'rounded-t-lg object-cover h-52 drop-shadow-sm'}} }}
                horizontal={shouldAddHorizontal ? true : null}
                >
                <h5 className="text-base sm:text-2xl font-bold tracking-tight text-titleAccent dark:text-white">
                  {item.title}
                </h5>
                <p className="text-sm sm:text-base font-normal text-textAccent dark:text-white">
                  {item.description}
                </p>
                <Button as={NavLink} onClick={() => handleNavigate(item.id)} className="bg-textAccent hover:bg-titleAccent transition duration-300
                  dark:bg-buttonDark dark:hover:bg-buttonHoverDark">Ver proyecto</Button>
                <div className="flex gap-2 flex-wrap mt-3">
                    {item.badges.map((badge, index) => (
                        <div key={index} >
                            <Tags badge={badge} />
                        </div>
                    ))}
                </div>
              </Card>
          </div>
      ))}
      </>
      );
};
  


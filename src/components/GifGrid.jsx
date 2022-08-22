// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hook/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const { images, isLoading} = useFetchGifs( category ); // custom hook

    // esto es buena practica puesto que nuestro componente no va estar re-procesando esta función, es decir, volver a asignar un espacio en memoria cuando el componente se vuelva a re-dibujar
    // getGifs(category);

    return (
        <>
           <h3>{ category }</h3>
           {
                isLoading && (<h2>Cargando...</h2>)
                
           }
           

            <div className="card-grid">
                {/* images.map */}
                {
                    images.map( (image) => (
                        <GifItem 
                        key={ image.id } 
                        {...image} // al hacer esto me da acceso a todas las propiedades
                        />
                    ))
                }

            </div>

        </>
    )
}

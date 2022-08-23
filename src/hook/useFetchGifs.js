import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


// recordar que un hook no es más que una función que regresa algo, en este caso un objeto
// este es un custom Hook
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, [] );

  return {
    images,
    isLoading, // da lo mismo si llamamos isLoading: isLoading esto da verdadero pues es lo que esta por default
  }
}









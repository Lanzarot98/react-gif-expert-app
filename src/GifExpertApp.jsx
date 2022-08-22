import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => { // hace referencia a toda la página
    const [categories, setCategories] = useState(['One Punch',])
    
    const onAddCategory = ( NewCategory ) => {
        const exist = categories.some((element) => {
            return element.toLowerCase() === NewCategory.toLowerCase();
        })

        if(exist) return; // si lo incluye sin importar mayúsculas o minus 


        // if(categories.includes(NewCategory)) return; // este es solo si lo incluye

        // categories.push(NewCategory); lo que hay que evitar
        setCategories([ NewCategory, ...categories, ]); // primera solución
        // setCategories((categories) => {
        //     return [...categories, 'Valorant'] // segunda solución
        // })
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value)} // no importa el nombre del argumento
        />

        {/* Listado de Gif */} 
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                    title={category} />
            )) 
        }

        {/* Gif Item */}

    </>
    
  )
}

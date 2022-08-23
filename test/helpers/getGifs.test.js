import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";





describe('Pruebas en getGifs()', () => { 
    
    test('should retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('One Punch'); // el argumento es la temática que estoy buscando
        // console.log(gifs); // para ver cada id url de los gifs que estoy buscando
        expect(gifs.length).toBeGreaterThan(0); // con esto aseguro que tengo un arreglo mayor de 0 pero solo eso, sin embargo debo asegurar que sea un arreglo de gifs ¿cómo?
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any(String),
        });
    });
});


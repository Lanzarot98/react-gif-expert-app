import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hook/useFetchGifs";

jest.mock('../../src/hook/useFetchGifs'); // haga un mock completo del path useFetchGifs si no lo usamos lanza error pues estaría haciendo una desestructuración de un undefined

describe('Pruebas en <GifGrid', () => { 
    
    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => { 

        // esto es lo que voy a simular de lo que está regresando esa función
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        // evaluar el punto inicial cuando se carga:
        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
        // screen.debug(  );
    });
    test('debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => { 
        // yo puedo controlar lo que voy a recibir del FetchGifs

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg' // es un ejemplo
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg' // es un ejemplo
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false // cuando ya tiene las imágenes esto esta en falso
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length).toBe(2); // espero que mande dos imágenes, podría hacer más prueba pero eso esta a mi discreción
        // screen.debug();
    });

 });
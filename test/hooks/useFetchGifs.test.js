import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hook/useFetchGifs";




describe('Pruebas en el Hook de useFetchGifs', () => { 
    
    test('debe regresar el estado inicial', () => { 
        
        const { result } = renderHook ( () => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0); // estado inicial de hook, es decir no hay imágenes
        expect( isLoading ).toBeTruthy(); // y como no hay imágenes es verdadero el isLoading
    });
    test('debe retornar un arreglo de imágenes y isLoading en false', async() => { 
        
        const { result } = renderHook ( () => useFetchGifs('One Punch'));
        // const { images, isLoading } = result.current; no necesito esto pues no necesito los valores actuales
        
        // importo el waitFor, este actúa como promesa, por ello en el test lo inicio como un async
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        ); // entonces aquí espero a que ya tenga imágenes si quiero agrego un setTimeOut después de la coma

        const {images, isLoading} = result.current;

        expect( images.length ).toBeGreaterThan(0); // estado inicial de hook, es decir no hay imágenes
        expect( isLoading ).toBeFalsy(); // y como no hay imágenes es verdadero el isLoading
    });
});


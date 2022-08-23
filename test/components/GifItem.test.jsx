import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";


describe('pruebas en <GitItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el snapshot', () => {

        const {container} = render( <GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    }); 

    test('should mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title={title} url={url} />);
        // screen.debug();
        // console.log(screen.getByRole('img').alt); //si quiero ver que me lanza este codigo
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title); puedo evitar colocar toda esta linea por linea así:
        const {src, alt} = screen.getByRole('img'); // esto quiere decir que extraigo el src y alt del componente img, por lo que puedo usar después el src y alt como el valor dentro del componente img
        expect(src).toBe(url);
        expect(alt).toBe(alt);

     });
     test('should mostrar el titulo del componente', () => { 
        render( <GifItem title={title} url={url} />);
        expect( screen.getByText(title)).toBeTruthy(); // que exista el titulo ( ya se que existe) si no esta mostrando el titulo mi html, entonces lanza error
      });

 });

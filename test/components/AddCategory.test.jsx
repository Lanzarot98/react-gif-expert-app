import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ () => {} }/>); // sujeto de pruebas
        const input = screen.getByRole('textbox'); // se crea el input que tiene una relación directa con el screen.getByRole('textbox')
        fireEvent.input(input, { target: {value: 'Saitama'} }); // fireEvent para disparar un evento cuyo valor sea por ejemplo Saitama

        expect( input.value ).toBe('Saitama');
        // screen.debug(); // para observar lo que contiene este componente

     });

     test('Debe llamar onNewCategory si el input tiene un valor', () => { // evaluar el comportamiento del componente
        
        const inputValue = 'Saitama'; // quiero simular que yo lo escribí
        const onNewCategory = jest.fn(); // mock es una simulación, es decir, no es una implementación real de la función.

        render( <AddCategory onNewCategory={ onNewCategory }/>); // entonces coloco aca la simulación de la función

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit( form ); // disparar el evento submit
        // screen.debug(); // para saber si establecí el valor
        expect( input.value ).toBe(''); // el evento submit me da un string vacío en el valor del input

        // como hago para evaluar la función de onNewCategory?
        expect(onNewCategory).toHaveBeenCalled(); // aquí puedo asegurar si la función ha sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); // que solo haya sido llamada una sola vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // que haya sido llamada con el valor de la caja de texto ('Saitama')
    });
    test('no debe de llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form ); 
        
        expect(onNewCategory).toHaveBeenCalledTimes(0); // con cero veces porque la prueba es que no deba ser llamado 
        
        // otra forma:
        expect(onNewCategory).not.toHaveBeenCalled(); // que no haya sido llamado
    });

 });
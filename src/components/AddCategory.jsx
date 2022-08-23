import { add } from "date-fns";
import { useState } from "react";
import PropTypes from 'prop-types';

// crear nuevo componente
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => { // desestructuramos el evento target para tomar ese valor
        setInputValue( target.value ); // aquí es donde se asegura que alguien realizó el input
    }

    const onSubmit = (event) => {
      // aquí es donde se dispara el evento del submit
        event.preventDefault(); // evitar que se refresque que eso lo hacen por default los forms

        if (inputValue.trim().length <=1) return; // no seguiría si solo tengo de 1 a menos letras en el input

        //setCategories( (categories) => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim()); // aquí solo se llama una vez la función
    }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
        type="text" 
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
        >
        </input>

    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired, // tiene que proporcionarle esa función

}
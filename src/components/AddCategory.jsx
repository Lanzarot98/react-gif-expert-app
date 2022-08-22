import { useState } from "react";

// crear nuevo componente
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault(); // evitar que se refresque que eso lo hacen por default los forms

        if (inputValue.trim().length <=1) return; // no seguiría si solo tengo de 1 a menos letras en el input

        //setCategories( (categories) => [inputValue, ...categories]);
        onNewCategory( inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
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

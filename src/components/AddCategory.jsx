import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('')
  //logramos adentrarnos en el evento, observando el target y finalmente el value o valor del mismo por medio de la nomenclatura del "."

    const onInputChange = ( { target } ) =>{
        setInputValue( target.value )
        
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        // setCategories( categories => [ inputValue, ...categories])+
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        // los fragmentos se usan cuando hay mas de un elemento nodo rude, el form es solo un elemento, solo que contiene al input como hijo.
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange = {onInputChange}
            />
        </form>
  )
  //Se creo el atributo o propiedad onChange
  //Este evento se dispara cuando el usuario escribe algo dentro del input, y este refleja dicho evento donde queramos imprimirlo, por ejemplo si lo imprimimos en la consola se veria cada caracter que vamos introduciendo en el input.
    }

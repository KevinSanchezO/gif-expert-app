import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanedValue = inputValue.trim()
        if( cleanedValue.length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(cleanedValue)
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text'
                placeholder='Buscar GIFs'
                value={inputValue}
                onChange={ onInputChange }>
            </input>
        </form>
    )
}

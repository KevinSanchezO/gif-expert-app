import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        //setCategories(oldArray => [...oldArray, 'Armored Core']);
        setCategories([...categories, 'Armored Core']);
    }


    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            
            {/* Input */}
            <AddCategory />
            
            {/* Listado de Gif */}
            <button onClick={onAddCategory}> Agregar </button>
                {/* Gif Item */}
                <ol>
                    {categories.map(category => {
                        return <li key={category}> {category} </li>
                    })}
                </ol>
        </>
    )
}
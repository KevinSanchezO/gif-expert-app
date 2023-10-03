import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { selectRandomOption } from "./helpers/selectRandomOption";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([selectRandomOption()]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] )
    }

    return (
        <>

            <h1>Gif Expert App</h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
            />
            
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}
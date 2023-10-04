import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
import { selectRandomOption } from "./helpers/selectRandomOption";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([selectRandomOption()]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] )
    }

    const deleteCategory = (selectedCategory) => {
        setCategories(
            (current) => current.filter(
                (category) => category !== selectedCategory
            )
        );
    }

    return (
        <>

            <h1>Gif Expert App</h1>

            <a href='https://github.com/KevinSanchezO/gif-expert-app' target="_blank">
              <p> <FontAwesomeIcon icon={faGithub}/> Made by Kevin Sánchez</p>
            </a>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
            />
            
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                        deleteCategory = {(value) => deleteCategory(value)}
                    />
                ))
            }
        </>
    )
}
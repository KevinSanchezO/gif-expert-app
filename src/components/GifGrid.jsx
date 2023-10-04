import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, deleteCategory }) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <div className="gif-grid-title">
                <h3>{category}</h3>
                <button onClick={() => deleteCategory(category)}> X </button>
            </div>

            {isLoading ? (<h2>Loading...</h2>):null}

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                        {...image}
                        />
                    ))
                    
                }
            </div>
        </>
    )
}

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMealByName } from "../api";

export function SearchRecipe() {
    const [recipe, setRecipe] = useState({});
    const { name } = useParams();
  
       useEffect(() => {
        getMealByName(name).then((data) => {
            setRecipe(data.meals[0])
        })
    }, [name])

    return (
        <div className="recipe">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <h6>Category: {recipe.strCategory}</h6>
            <h6>Area: {recipe.strArea}</h6>
            <h5>Instruction: </h5>
            <p>{recipe.strInstructions}</p>
            <table className='centered'>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Measures</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>
                                        {
                                            recipe[`strMeasure${key.slice(13)}`]
                                        }
                                    </td>
                                </tr>
                            )
                        }
                        return null;
                    })}
                </tbody>
            </table>

            {recipe.strYoutube ? (
                <div className="row">
                    <h5>Video Instruction</h5>)
                    <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={recipe.strMeal} allowFullScreen />
                </div>) : null
            }
        </div>
    )
}
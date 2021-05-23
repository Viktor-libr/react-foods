import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getMealById } from "../api";

export function MealRecipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0])
        })
    }, [id])

    return (
        <div className="recipe">
            <button className="btn" onClick={goBack} style={{display: 'block', margin: '1rem'}}>Go Back</button>
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
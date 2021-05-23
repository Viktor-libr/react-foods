import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { MealItem } from './MealItem';
import { getFilterByCategory } from '../api'
import { useHistory, useParams } from "react-router";

export function MealList() {
    const [meals, setMeals] = useState([]);
    const { category } = useParams();

    const { goBack } = useHistory();

    useEffect(() => {
        getFilterByCategory(category).then((data) => {
            setMeals(data.meals)
        })
    }, [category])

    return (
        <>
            {!meals.length ? <Preloader /> : (
                <>
                    <button className="btn" style={{margin: '1rem'}} onClick={goBack}>Go Back</button>
                    <div className='categories'>
                        {meals.map(e => <MealItem key={e.idMeal} {...e} />)}
                    </div>
                </>)
            }
        </>

    )
}
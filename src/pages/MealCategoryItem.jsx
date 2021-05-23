import { Link } from "react-router-dom";


function MealCategoryItem(props) {
    const {
        // idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription } = props;

    return (

            <div className="card">
                <div className="card-image">
                    <img src={strCategoryThumb} alt={strCategory} />
                </div>
                <div className="card-content">
                    <span className="card-title">{strCategory}</span>
                    <p className='card-description'>{strCategoryDescription}</p>
                </div>
                <div className="card-action">
                    <Link to={`/meallist/${strCategory}`}>To category</Link>
                </div>
            </div>
    )
}

export { MealCategoryItem }
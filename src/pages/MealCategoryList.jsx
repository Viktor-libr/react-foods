import {MealCategoryItem} from './MealCategoryItem'

export function MealCategoryList (props) {
    const {categories} = props;

    return(
        <div className='categories'>
            <h3 className='categories-list'>Categories list :</h3>
            {categories.map((e) => <MealCategoryItem key={e.idCategory} {...e} />)}
        </div>
    )
}
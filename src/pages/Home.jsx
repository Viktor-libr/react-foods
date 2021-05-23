import { getMealCategories } from '../api'
import { useState, useEffect } from 'react';
import { MealCategoryList } from './MealCategoryList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import { useHistory, useLocation } from 'react-router';

function Home() {

    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const { push } = useHistory();
    const { pathname, search } = useLocation();

    const handleSearch = (cat) => {
        setFilteredCategories(categories.filter((e) => (
            e.strCategory.toLowerCase().includes(cat.toLowerCase())
        )))
        push({
            pathname,
            search: `?search=${cat}`
        })
    };

    useEffect(() => {
        getMealCategories()
            .then((data) => {
                setCategories(data.categories);
                setFilteredCategories(search ? data.categories.filter((e) => (
                    e.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
                )) : data.categories);
            })
            .catch((err) => console.error(err))
    }, [search]);


    return <div className='main-content'>
        {!categories.length ? (
            <Preloader />
        ) : (
            <>
                <Search handleSearch={handleSearch} />
                <MealCategoryList categories={filteredCategories} />
            </>)
        }
    </div>
}

export { Home }
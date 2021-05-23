import {API_URL} from './config';

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
};

const getMealCategories = async () => {
    const response = await fetch (API_URL + 'categories.php');
    return await response.json();
};

const getMealByName = async (mealName) => {
    const response = await fetch (API_URL + 'search.php?s=' + mealName);
    return await response.json();
};

const getListAllCategories = async () => {
    const response = await fetch (API_URL + 'list.php?c=list');
    return await response.json();
};

const getFilterByCategory = async (catName) => {
    const response = await fetch (API_URL + 'filter.php?c=' + catName);
    return await response.json();
};

export {getMealById, getMealCategories, getMealByName, getListAllCategories, getFilterByCategory};
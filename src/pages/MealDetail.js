import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Navigation from '../components/Navigation';
import FavItemsStore from '../store/FavItems'
import { observer } from 'mobx-react'
import { toJS } from 'mobx';

function MealDetail(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [meal_details, setMeal_details] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);


    useEffect(() => {
        getMealDetails(props.match.params.meal_id);
    }, [props.match.params.meal_id]);

    const getMealDetails = (meal_id) => {
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + meal_id).then(item => {
            setMeal_details(item.data.meals[0]);
            detectIngredients(item.data.meals[0]);
            detectMeasures(item.data.meals[0]);
            setIsLoading(false);
        })
    }

    const detectIngredients = (meal) => {
        let currentIngredients = [];
        for (var key in meal) {
            if (key.startsWith('strIngredient') && (meal[key] !== "" && meal[key] !== null)) {
                currentIngredients.push(meal[key]);
            }
        }
        setIngredients(currentIngredients);
    }

    const detectMeasures = (meal) => {
        let currentMeasures = [];
        for (var key in meal) {
            if (key.startsWith('strMeasure') && (meal[key] !== "" && meal[key] !== null)) {
                currentMeasures.push(meal[key]);
            }
        }
        setMeasures(currentMeasures);
    }

    const addToFav = () => {
        let isAdded = false;
        let favs = toJS(FavItemsStore.favItems);
        favs.forEach(item => {
            if(item.idMeal === meal_details.idMeal) {
                isAdded = true;
            }
        });

        if(!isAdded) {
            console.log("Ekledi");
            FavItemsStore.addToFav(meal_details);
        }
    }
    return (
        <>
            <Navigation />
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="page-title">{meal_details.strMeal}</h1>
                        <p className="sub-title">{meal_details.strCategory}, {meal_details.strArea}</p>
                    </div>
                    <button onClick={addToFav} id="add-fav" className="focus:outline-none active:outline-none hover:bg-red-200 transition-colors duration-200 rounded-lg py-3 px-8 bg-red-100 text-red-500 text-lg">
                        Add to Favorites
                    </button>

                </div>
                {isLoading && <Loading />}
                {!isLoading && (
                    <div className="container mx-auto">
                        <div className="grid grid-cols-4 gap-10">
                            <div className="col-span-1">
                                <img className="shadow-xl" src={meal_details.strMealThumb} alt="" />
                            </div>
                            <div className="col-span-2 border-r border-gray-100 pr-10">
                                <div className="text-xl font-semibold mb-2">Insturctions</div>
                                <p className="font-thin">{meal_details.strInstructions}</p>
                            </div>
                            <div className="col-span-1 ">
                                <div className="text-xl font-semibold mb-2">Ingredients</div>
                                <div className="flex font-thin items-start space-x-4">
                                    <div id="measures">
                                        {measures.map((item, index) => <p key={index} className="py-0.5">{item}</p>)}
                                    </div>
                                    <div id="ingredients">
                                        {ingredients.map((item, index) => <p key={index} className="py-0.5">{item}</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default observer(MealDetail);
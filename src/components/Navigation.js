import { observer } from 'mobx-react';
import FavItemsStore from '../store/FavItems';
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
    const [showFavDrop, setShowFavDrop] = useState(false);
    const removeFav = (meal_id) => {

    }
    const controlFavDrop = () => {
        setShowFavDrop(!showFavDrop);
    }
    return (
        <div id="navigation" className="w-full shadow-md py-5">
            <div className="container mx-auto flex items-center justify-between relative">
                <Link to="/categories">
                    <div className="text-4xl font-thin">MealsApp</div>
                </Link>
                <div id="menu-items" className="flex items-center space-x-2 justify-end flex-grow">
                    <a href="/categories" className="nav-item hover:bg-gray-100 transition-colors duration-200 text-lg font-light py-3 px-8">
                        All Categories
                    </a>
                    <a href="/random-meal" className="nav-item hover:bg-gray-100 transition-colors duration-200 text-lg font-light py-3 px-8">
                        Random Meal
                    </a>
                    <a href="/contact" className="nav-item hover:bg-gray-100 transition-colors duration-200 text-lg font-light py-3 px-8">
                        Contact Us
                    </a>
                    <div id="favs" className="cursor-pointer relative" onClick={controlFavDrop}>
                        <span className="iconify text-2xl text-red-600 z-20" data-icon="carbon:favorite" data-inline="false"></span>
                        <span className="w-5 h-5 text-xs text-red-600 bg-red-100 rounded-full flex items-center justify-center absolute -top-4 -right-4 z-10">{FavItemsStore.favItems.length}</span>
                    </div>
                </div>
                <div
                    className={`fav-items-dropdown absolute top-16 right-0 p-4 py-2 bg-white shadow-xl rounded-b-lg ${showFavDrop ? 'block' : 'hidden'}`}>
                    {FavItemsStore.favItems.length > 0 && (
                        <div>
                            {FavItemsStore.favItems.map(item => (
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex items-center space-x-2">
                                        <img className="w-10 h-10" src={item.strMealThumb} alt="" />
                                        <div className="text-gray-700 pr-10">{item.strMeal}</div>
                                    </div>
                                    <div onClick={removeFav(item.idMeal)} className="p-2">
                                        <span className="iconify text-red-500 text-2xl" data-icon="clarity:remove-line" data-inline="false"></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {FavItemsStore.favItems.length === 0 && (<p className="py-2 px-8">No meals added to favorite list.</p>)}

                </div>
            </div>


        </div>
    );
};

export default observer(Navigation);
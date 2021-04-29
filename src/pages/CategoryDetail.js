import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

export default function CategoryDetail(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [category_id, setCategory_id] = useState(props.match.params.category_id);
    const [category_items, setCategory_items] = useState([]);

    useEffect(() => {
        getCategoryDetails(category_id);
        return () => {
            console.log("Temizlendi")
        }
    }, [props.match.params.category_id]);

    const getCategoryDetails = (category_id) => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category_id).then(items => {
            setCategory_items(items.data.meals);
            setIsLoading(false);
        })
    };

    return (
        <>
            <Navigation />
            <div className="container mx-auto">
                <h1 className="page-title">{category_id} Meals</h1>
                <p className="sub-title">Select one and see all details about the meal.</p>

                {isLoading && <Loading />}
                {!isLoading && (
                    <div className="grid grid-cols-7 gap-5 items-stretch">
                        {category_items.map(item => (
                            <Link to={'/meal/' + item.idMeal}>
                                <div className="col-span-1 flex flex-col h-full text-xl bg-white border border-gray-100 hover:border-0 rounded-lg transition-all duration-200 hover:shadow-xl p-4">
                                    <img src={item.strMealThumb} alt="" />
                                    <div className="flex-grow flex items-center justify-center">
                                        <div className="font-semibold text-sm text-center mt-3">
                                            {item.strMeal}
                                        </div>

                                    </div>
                                </div>

                            </Link>
                        )
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

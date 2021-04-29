import { useEffect, useState } from "react";
import axios from 'axios'
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => {
                setCategories(res.data.categories);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Navigation />
            {isLoading && <Loading />}
            <div className="container mx-auto">
                <h1 className="page-title">Welcome, this is our all categories</h1>
                <p className="sub-title">Select a category and see our meal recipes.</p>


                {!isLoading && (
                    <div className="grid grid-cols-7 gap-5">
                        {categories.map(item => (
                            <Link to={'/category/' + item.strCategory}>
                                <div className="col-span-1 text-xl bg-white border border-gray-100 hover:border-0 rounded-lg transition-all duration-200 hover:shadow-xl p-4">
                                    <img src={item.strCategoryThumb} alt="" />
                                    <div className="font-semibold text-center mt-3">
                                        {item.strCategory}
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

export default Categories;
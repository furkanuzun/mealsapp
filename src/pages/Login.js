import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container mx-auto h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-2xl p-10 w-1/3">
                <h1 className="text-lg font-semibold text-center">Welcome to MealsApp</h1>
                <h2 className="text-base text-gray-500 text-center">Login to see recipes.</h2>

                <form action="" className="mt-10 space-y-4">
                    <div id="username" className="rounded-lg border border-gray-100 flex items-center space-x-2 px-4">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <input type="text" className="py-3 focus:outline-none flex-grow" placeholder="Username" />
                    </div>
                    <div id="password" className="rounded-lg border border-gray-100 flex items-center space-x-2 px-4">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <input type="password" className="py-3 focus:outline-none flex-grow" placeholder="Password" />
                    </div>

                    <Link to="/categories">
                        <button className="mt-4 bg-green-500 w-full py-3 px-6 text-white rounded-lg hover:bg-green-600 transition-colors duration-200" id="login">Login</button>
                    </Link>

                    {/* Lost pass */}
                    <div className="text-gray-500 text-center">
                        Lost Password?
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
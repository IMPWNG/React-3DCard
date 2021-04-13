import React from "react";
import HeartImg from "../assets/images/heart.png";

export function Card () {

    return (
        <div class="w-2/5 flex justify-center items-center">
            <div class="bg-white rounded-lg shadow-2xl">
                <div class="p-16">
                    <div>
                        <img src={HeartImg} alt="heart" />
                    </div>
                    <div class="mt-8 text-center">
                        <h1 class="font-bold text-lg text-gray-700 mb-1">Quote11 of the Day</h1>
                        <p class="text-gray-600">“I like this girl, as much as she LOVES me.” – GOKU !!</p>
                        <button class="mt-6 bg-blue-500 hover:bg-blue-400 text-white rounded-full px-12 py-3 shadow-xl focus:outline-none">
                            LOVE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


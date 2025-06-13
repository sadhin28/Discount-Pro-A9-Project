import React from 'react';
import { Link } from 'react-router-dom';

const TopCategories = () => {
     const categories = [
        { id: 1, name: "Electronics", image: "https://ecelectronics.com/wp-content/uploads/2020/04/Modern-Electronics-EC-.jpg.webp" },
        { id: 2, name: "Fashion", image: "https://theplanetapp.com/wp-content/uploads/2022/08/fast-fashion-1-scaled-1-1536x1025.webp" },
        { id: 3, name: "Travel", image: "https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?ga=GA1.1.764605549.1740402475&semt=ais_hybrid&w=740" },
        { id: 4, name: "Home & Kitchen", image: "https://www.pickaboo.com/blog/wp-content/uploads/2025/02/1690969614632-1024x576.png" },
    ];
    return (
        <Link to={'/brands'} className="my-12  container mx-auto">
            {/* Title */}
            <h3 className="text-2xl text-center text-gray-700 font-semibold mb-6">
                Top Categories
            </h3>
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories?.map((category) => (
                    <div
                        key={category.id} data-aos="zoom-in-right"
                        className="rounded-2xl shadow-sm flex flex-col items-center bg-white hover:shadow-md transition-shadow"
                    >
                        {/* Category Image */}
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-44 mb-4 rounded-t-2xl"
                        />
                        {/* Category Name */}
                        <h4 className="text-lg font-medium text-gray-800">{category.name}</h4>
                    </div>
                ))}
            </div>
        </Link>
    );
};

export default TopCategories;
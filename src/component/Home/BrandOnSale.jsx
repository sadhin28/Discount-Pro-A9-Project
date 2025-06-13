import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandOnSale = () => {
      const data = useLoaderData();
    const brandsOnSale = data?.filter((brand) => brand.isSaleOn);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])
    return (
         <div className="my-12 container md:mx-auto" >
            <h3 className="text-2xl text-center text-gray-700 font-semibold mb-6 flex justify-center gap-2">
                Brands on  <motion.div
                    animate={{
                        y: [0, 5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    style={{ color: "red", fontWeight: "bold" }}
                >

                    Sale 🔥

                </motion.div>


            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card for Each Brand */}
                {brandsOnSale?.map((brand) => (
                    <Link to={`/brand/details/${brand._id}`}
                        key={brand._id} data-aos="zoom-in"
                        className="rounded-md shadow-md flex flex-col items-center bg-white"
                    >
                        {/* Brand Logo */}
                        <img
                            src={brand.brand_logo}
                            alt={brand.brand_name}
                            className="w-24 h-24 object-contain mb-4"
                        />
                        {/* Brand Name */}
                        <h4 className="text-lg font-medium text-gray-800 mb-4">
                            {brand.brand_name}
                        </h4>
                        <h4 className="text-lg font-medium text-gray-800 mb-4">
                            Total Coupons: {brand.coupons.length}
                        </h4>
                        <button
                            className="w-full py-2 text-white text-sm font-medium bg-[#19BC9B] hover:bg-[#17a386] transition-colors rounded-b-md"
                        >
                            {
                                brand.category
                            }
                        </button>
                    </Link>
                ))}
            </div>
        </div >
    );
};

export default BrandOnSale;
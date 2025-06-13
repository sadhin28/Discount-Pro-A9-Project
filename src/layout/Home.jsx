import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import BrandOnSale from '../component/Home/BrandOnSale';
import FAQSection from '../component/Home/FAQSection';
import FeaturedCupons from '../component/Home/FeaturedCupons';
import SimpleSlider from '../component/Home/SimpleSlider';
import SubscriptionCard from '../component/Home/SubscriptionCard';
import TopBrands from '../component/Home/TopBrands';
import TopCategories from '../component/Home/TopCategories';

const Home = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <div>
           <BrandOnSale></BrandOnSale>
           <FAQSection></FAQSection>
           <FeaturedCupons></FeaturedCupons>
           <SimpleSlider></SimpleSlider>
           <SubscriptionCard></SubscriptionCard>
           <TopBrands></TopBrands>
           <TopCategories></TopCategories>
        </div>
    );
};

export default Home;
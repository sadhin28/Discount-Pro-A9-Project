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
    
    return (
        <div className='w-11/12 mx-auto'>
           <SimpleSlider></SimpleSlider>
           <TopBrands></TopBrands>
           <BrandOnSale></BrandOnSale>
           <TopCategories></TopCategories>
           <FeaturedCupons></FeaturedCupons>
           <FAQSection></FAQSection>
           
          
          
              <SubscriptionCard></SubscriptionCard>
         
           
           
        </div>
    );
};

export default Home;
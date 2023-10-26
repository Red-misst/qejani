import FeaturesSection from "@/components/homepage/featureSession";
import HeroSection from "@/components/homepage/heroSection";
import CategoriesSection from "@/components/homepage/categoriesSection"
import OffersSlider from "@/components/homepage/offerSlider";
import OfferBaner from "@/components/homepage/offerBaner";
import Products from "@/components/homepage/products";
import db from "@/utils/db"
import { useSession } from "next-auth/react";

const Home = () => {
  const {data:session} = useSession()
  const product = [{
    name: 'CHAIR',
    price: '45.00',
    originalPrice: '500.00',
    rating: 4, // Add your rating value
    imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
  }];
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <OffersSlider />
      <OfferBaner />
      <Products products={product}/>
    </>
  );
};

export default Home;


export async function getServerSideProps(context){

  return {props:{}}
}

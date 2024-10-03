import Choice from "./Choice";
import Footer from "./Footer";
import Hero from "./Hero";
// import Navbar from "./Navbar";
import Product from "./Product";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <>

        <Hero
        title="Modern Interior" 
        subtitle="Design Studio" 
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." 
        button1Text="Shop Now" 
        button2Text="Explore"
            />
        <Product/>
        <Choice/>
        <Testimonial/>
        <Footer/>
        </>
    );
}

export default Home;
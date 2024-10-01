import React, { useEffect, useState } from 'react';
import { database } from '../Firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import '../styles/Product.scss';


// Define the type for your product
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Firebase on component mount
  useEffect(() => {
    const productsRef = ref(database, 'products/');
  
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("Products from Firebase:", data);
        const productsArray: Product[] = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].name,
          price: data[key].price,
          image: data[key].image,
        }));
        setProducts(productsArray);
      }
    });
  }, []);
  

  return (
    <>
      <Navbar />
      <Hero
        title="Shop"
        description="Learn about our story and how we have grown to become a leader in modern interior design."
        button1Text="Shop Now"
        button2Text="Explore"
      />
      <div className="product-section before-footer-section">
        <div className="container">
        {products.length > 0 && (
  <div className="row">
    {products.map((product) => (
      <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
        <a className="product-item" href="#">
          <img src={product.image } className="img-fluid product-thumbnail" alt={product.name} />
          <h3 className="product-title">{product.name}</h3>
          <strong className="product-price">${product.price}</strong>
          <span className="icon-cross">
            <img src="src/assets/images/cross.svg" className="img-fluid" alt="cross icon" />
          </span>
        </a>
      </div>
    ))}
  </div>
)}

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

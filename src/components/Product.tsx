import '../styles/Product.scss';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';
import { limitToFirst, onValue, query, ref } from 'firebase/database';
import { database } from '../Firebase/firebaseConfig';



type ProductItem = {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const productsRef = query(ref(database, 'products/'), limitToFirst(3));
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedProducts: ProductItem[] = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].name,
          price: data[key].price,
          image: data[key].image,
        }));
        setProducts(fetchedProducts)
      }
    })
  }, [])
    return (
        <>
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className='mb-4 section-title'>Crafted with excellent material.</h2>
            <p className='mb-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <p><a href="/shop" className="btn">Explore</a></p>
                        </div>
                        
              {products.map((product) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={product.id}>
                  <div className="product-item">
                  <img src={product.image} alt={product.name} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{product.name}</h3>
                    <strong className="product-price">${product.price.toFixed(2)}</strong>
                    <span className="icon-cross" onClick={() => addToCart(product)}>
                    <img src="src/assets/images/cross.svg" className="img-fluid" alt="cross icon" />
                  </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
            </div>
            </>
  );
};

export default Product;

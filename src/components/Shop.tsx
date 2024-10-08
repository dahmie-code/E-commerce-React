import { useEffect, useState } from 'react';
import { database } from '../Firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import Footer from './Footer';
import Hero from './Hero';
import { useCart } from '../hooks/useCart';
import '../styles/Product.scss';

// Define the type for your product
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const Shop: React.FC = () => {
  const { addToCart, cartItems } = useCart();
  console.log("Cart context (from useCart):", { addToCart, cartItems });
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  // const { addToCart } = useCart();

  // Fetch products from Firebase on component mount
  useEffect(() => {
    const productsRef = ref(database, 'products/');
  
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
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
   
  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    addToCart(product); // Trigger the action
  };
  return (
    <>
      <Hero
        title="Shop"
        description="Browse our collection of products"
                button1Text="Shop Now"
        button2Text="Explore"
      />
      <div className="product-section before-footer-section">
        <div className="container">
          {currentProducts.length > 0 && (
            <div className="row">
              {currentProducts.map((product) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                  <a className="product-item" href="#">
                    <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                    <h3 className="product-title">{product.name}</h3>
                    <strong className="product-price">${product.price}</strong>
                    <button className="icon-cross"onClick={() => handleAddToCart(product)} >
                      
                      <img src="src/assets/images/cross.svg" className="img-fluid" alt="cross icon" />
                    </button>
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls with Chevrons */}
          <nav>
            <ul className="pagination justify-content-center">
              {/* Previous Button with Left Chevron */}
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button onClick={handlePrevPage} className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span> 
                </button>
              </li>
              
              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}

              {/* Next Button with Right Chevron */}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button onClick={handleNextPage} className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span> 
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

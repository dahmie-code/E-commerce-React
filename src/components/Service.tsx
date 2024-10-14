import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';
import { limitToLast, onValue, query, ref } from 'firebase/database';
import { database } from '../Firebase/firebaseConfig';
import '../styles/Product.scss';
import Footer from './Footer';
import Hero from './Hero';
import Testimonial from './Testimonial';


type ServiceItem = {
	id: string;
	name: string;
	price: number;
	image: string;
}

const Service: React.FC = () => {
	const [products, setProducts] = useState<ServiceItem[]>([]);
	const { addToCart } = useCart();

	useEffect(() => {
		const productsRef = query(ref(database, 'products/'), limitToLast(3));
		onValue(productsRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				const fetchedProducts: ServiceItem[] = Object.keys(data).map((key) => ({
					id: key,
					name: data[key].name,
					price: data[key].price,
					image: data[key].image,
				}));
				setProducts(fetchedProducts);
			}
		})
	}, [])
    return (
        <>
        <Hero
            title="Our Services"
            description="We offer a wide range of services to help you achieve your goals."
                    button1Text="Shop Now"
        button2Text="Explore"
            />
		<div className="why-choose-section">
			<div className="container">
				<div className="row my-5">
					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/support.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/return.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/support.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="src/assets/images/return.svg" alt="Image" className="imf-fluid"/>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

				</div>
			
			</div>
		</div>

		<div className="product-section pt-0">
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
            <Testimonial />
            <Footer />
        </>
    );
}

export default Service;

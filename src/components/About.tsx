import '../styles/Product.scss';
import Footer from './Footer';
import Hero from './Hero';
import Testimonial from './Testimonial';

const About = () => {
    return (<>
   
        <Hero
        title="About Us"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        button1Text="Shop Now"
        button2Text="Explore"
        />
		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="src/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="src/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="src/assets/images/support.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
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

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="src/assets/images/why-choose-us-img.jpg" alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="untree_co-section">
			<div className="container">

				<div className="row mb-5">
					<div className="col-lg-5 mx-auto text-center">
						<h2 className="section-title">Our Team</h2>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="src/assets/images/person_1.jpg" className="img-fluid mb-5"/>
						<h3><a href="#"><span className="">Lawson</span> Arnold</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
					</div> 

					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="src/assets/images/person_2.jpg" className="img-fluid mb-5"/>

						<h3><a href="#"><span className="">Jeremy</span> Walker</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

					</div> 

					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="src/assets/images/person_3.jpg" className="img-fluid mb-5"/>
						<h3><a href="#"><span className="">Patrik</span> White</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
					</div> 

					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="src/assets/images/person_4.jpg" className="img-fluid mb-5"/>

						<h3><a href="#"><span className="">Kathryn</span> Ryan</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

          
					</div> 
	

					

				</div>
			</div>
        </div>
        <Testimonial />
        <Footer/>
        
 </>
    );
}

export default About;
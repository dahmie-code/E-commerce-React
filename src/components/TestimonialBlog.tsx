import '../styles/Testimonial.scss';
import { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    useEffect(() => {

        const slider = tns({
            container: '.testimonial-slider', 
            items: 1,
            axis: "horizontal",
            controlsContainer: "#testimonial-nav",
            swipeAngle: false,
            speed: 700,
            nav: true,
            controls: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3500,
            autoplayButtonOutput: false
        });
        return () => {
            slider.destroy();
        };
    }, []); 
    return (
        <>
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">

                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev">
                    <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                  </span>
                  <span className="next" data-controls="next">
                    <span><FontAwesomeIcon icon={faChevronRight} /></span>
                  </span>
                </div>

                <div className='testimonial-slider'>
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.&rdquo;</p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img src="src/assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;Suspendisse potenti. Donec felis felis, ultricies nec viverra quis, aliquet sit amet felis.&rdquo;</p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img src="src/assets/images/person-1.png" alt="John Smith" className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">John Smith</h3>
                            <span className="position d-block mb-3">CTO, ABC Corp.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;Phasellus consequat elit ut neque vestibulum, et cursus velit cursus.&rdquo;</p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img src="src/assets/images/person-1.png" alt="Emily Brown" className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">Emily Brown</h3>
                            <span className="position d-block mb-3">COO, DEF Ltd.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
            		<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<a href="#" className="more">View All Posts</a>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src="src/assets/images/post-1.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src="src/assets/images/post-2.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src="src/assets/images/post-3.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
        </>
    );
}
export default Testimonial;
import { Link } from 'react-router-dom';
import '../styles/Hero.scss';


interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  button1Text: string;
  button2Text: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle ="", description, button1Text, button2Text }) => {
  return (
  <>
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>{title} <span className="d-block">{subtitle}</span></h1>
              <p className="mb-4">{description}</p>
              <p>
                <Link to="/shop" className="btn btn-secondary me-2">{button1Text}</Link>
                <Link to="/services" className="btn btn-white-outline">{button2Text}</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="src/assets/images/couch.png" className="img-fluid" alt="Couch"/>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};


export default Hero;

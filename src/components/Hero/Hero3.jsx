import PropTypes from 'prop-types';
import './Hero.scss';
import perser from 'html-react-parser';
import SocialLinks2 from '../SocialLinks/SocialLinks2';

const Hero3 = ({ data, socialData }) => {
  const [WaterWave, setWaterWave] = useState(null);
  const { title, text, imgAuthor, bgImgLink } = data;

  useEffect(() => {
    const loadWaterWave = async () => {
      if (typeof window !== 'undefined') {
        const { default: WaterWaveComponent } = await import('react-water-wave');
        setWaterWave(() => WaterWaveComponent);
      }
    };
    loadWaterWave();
  }, []);

  if (!WaterWave) {
    return (
      <section id="home" className="st-hero st-style2 st-bg st-dynamic-bg" style={{ backgroundImage: `url(${bgImgLink})` }}>
        <div className="container">
          <div className="st-hero-text">
            <div className="st-author" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <img src={imgAuthor} alt="Author Image" />
            </div>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{perser(title)}</h1>
            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{perser(text)}</p>
            <SocialLinks2 data={socialData} />
          </div>
        </div>
      </section>
    );
  }
  return (
    <WaterWave id="home" className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" imageUrl={bgImgLink}>
      {() => (
        <div className="container">
          <div className="st-hero-text">
            <div className="st-author" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <img src={imgAuthor} alt="Author Image" />
            </div>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{perser(title)}</h1>
            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{perser(text)}</p>
            <SocialLinks2 data={socialData} />
          </div>
        </div>
      )}
    </WaterWave>
  )
}

Hero3.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};


export default Hero3;

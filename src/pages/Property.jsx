import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel.jsx';
import { useEffect } from 'react';

const Property = () => {
  const arrayStars = [1, 2, 3, 4, 5];
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      navigate('/error');
      return;
    }
  }, [location.state, id, navigate]);

  if (location.state !== null) {
    const { property } = location.state;
    const equipements = property?.equipments.map((element, index) => (
      <li className="description-content" key={'equip-' + index.toString()}>
        {element}
      </li>
    ));

    return (
      <>
        <Carousel pictures={property.pictures} />

        <section className="property">
          <div className="property-description">
            <h1 className="property-title">{property.title}</h1>
            <h4 className="property-location">{property.location}</h4>
            <div className="property-tags">
              {property.tags.map((element, index) => {
                return (
                  <span className="tags" key={'tags-' + index}>
                    {element}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="property-stars-creator">
            <div className="property-stars">
              {arrayStars.map((element) => {
                const nbreEtoiles = parseInt(property.rating);
                return (
                  <span
                    key={'star-' + element}
                    className={element <= nbreEtoiles ? 'span1' : 'span2'}
                  >
                    ★{' '}
                  </span>
                );
              })}
            </div>
            <div className="property-creator">
              <p>{property.host.name}</p>
              <img src={property.host.picture} alt={property.title} />
            </div>
          </div>
        </section>

        <div className="property-collapse">
          <Collapse title="Description" content={property.description} />
          <Collapse title="Equipements" content={equipements} />
        </div>
      </>
    );
  }
};

export default Property;

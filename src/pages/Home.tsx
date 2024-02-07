import useProperties from '@/services/hooks/useProperties.ts';
import { Link } from 'react-router-dom';

const Home = () => {
  const { properties, isLoading, error } = useProperties();

  if (isLoading) {
    return <span className="loader"></span>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="image-presentation">
        <img loading="lazy" src="/images/landing-image.jpg" className="img-2" alt='image presentation'/>
        <p>Chez vous, partout et ailleurs</p>
      </section>
      <main className="main-content">
        {/* <Link to="/" className="card-link"> */}
        {properties.map((property, index) => (
          <Link
            to={`/property/${property.id}`}
            className="card-link"
            key={property.cover + index}
            state={{ property }}
          >
            <article className="card">
              <img src={property.cover} alt="" className="card-image" />
              <div className="card-text">{property.title}</div>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
};
export default Home;
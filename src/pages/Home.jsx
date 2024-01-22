import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../services/PropertiesContext';

export const Home = () => {
  const { properties, isLoading, error } = useContext(PropertiesContext);

  if (isLoading) {
    return <span className="loader"></span>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="image-presentation">
        <img loading="lazy" src="/images/landing-image.jpg" className="img-2" />
        <p>Chez vous, partout et ailleurs</p>
      </section>
      <main className="main-content">
        {/* <Link to="/" className="card-link"> */}
        {properties.map((res, index) => (
          <Link
            to={`/property/${res.id}`}
            className="card-link"
            key={res.cover + index}
            state={{ property: res }}
          >
            <article className="card">
              <img src={res.cover} alt="" className="card-image" />
              <div className="card-text">{res.title}</div>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
};

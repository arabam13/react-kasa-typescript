import { useState } from 'react';
import { useEffect } from 'react';

export const Home = () => {
  const [results, setResults] = useState([]);
  // console.log(results);

  const fetchData = async () => {
    const data = await fetch('/logements.json');
    const dataJson = await data.json();
    setResults(dataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="image-presentation">
        <img loading="lazy" src="/images/landing-image.jpg" className="img-2" />
        <p>Chez vous, partout et ailleurs</p>
      </section>
      <main className="main-content">
        {/* <Link to="/" className="card-link"> */}
        {results.map((res, index) => (
          <a href="#" className="card-link" key={res.cover + index}>
            <article className="card">
              <img src={res.cover} alt="" className="card-image" />
              <div className="card-text">{res.title}</div>
            </article>
          </a>
        ))}
        {/* </Link> */}
      </main>
    </>
  );
};

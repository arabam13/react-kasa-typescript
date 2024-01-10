import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <img loading="lazy" src="/images/LOGO.jpg" className="img" />
      <nav>
        <ul className="nav-menu">
          <Link to="/">
            <li className="nav-item">Accueil</li>
          </Link>
          <Link to="/about">
            <li className="nav-item">A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

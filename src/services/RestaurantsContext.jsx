import propTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

export const PropertiesContext = createContext(null);

export const PropertiesContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveProperties = async () => {
    setIsLoading(true);
    setError(null);
    setProperties([]);

    // setTimeout(async () => {
    await fetch('/logements.json')
      .then((data) => data.json())
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setProperties(results);
      })
      .catch((err) => {
        setProperties([]);
        setIsLoading(false);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(err);
        }
      });
    // }, 2000);
  };

  useEffect(() => {
    retrieveProperties();
  }, []);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        isLoading,
        error,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

PropertiesContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

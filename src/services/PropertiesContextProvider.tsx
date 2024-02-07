// import propTypes from 'prop-types';
import { PropertiesContextType, PropertyType } from '@/utils/types.ts';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export const PropertiesContext = createContext<PropertiesContextType | null>(
  null
);

export const PropertiesContextProvider = ({ children }: PropsWithChildren) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const retrieveProperties = async () => {
    setIsLoading(true);
    setError(null);
    setProperties([]);

    setTimeout(async () => {
      await fetch('/logements.json')
        .then((data) => data.json())
        .then((results) => {
          setError(null);
          setProperties(results);
        })
        .catch((err) => {
          setProperties([]);
          if (
            err instanceof Error &&
            typeof err === 'object' &&
            'message' in err
          ) {
            setError(err.message);
          } else if (typeof err === 'string') {
            setError(err);
          } else {
            setError('Something went wrong!');
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
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

// PropertiesContextProvider.propTypes = {
//   children: propTypes.node.isRequired,
// };

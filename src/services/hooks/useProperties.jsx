import { useContext } from 'react';
import { PropertiesContext } from '../RestaurantsContext.jsx';

const useProperties = () => {
  const propertiesContext = useContext(PropertiesContext);

  if (!propertiesContext) {
    throw new Error(
      'useProperties must be used within a PropertiesContextProvider'
    );
  }

  return propertiesContext;
};

export default useProperties;

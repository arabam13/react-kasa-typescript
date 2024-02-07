import { PropertiesContext } from '@/services/PropertiesContextProvider';
import { useContext } from 'react';

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

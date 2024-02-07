export type PropertiesContextType = {
  properties: PropertyType[];
  isLoading: boolean;
  error: string | null;
};

export type PropertyType = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

type Host = {
  name: string;
  picture: string;
};

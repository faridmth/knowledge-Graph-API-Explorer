"use client";
import { createContext, useState, useEffect } from "react";

// Create a context with default values
export const EntitiesData = createContext({
  data: [],
  refreshEntities: () => {},
});

// Create the provider component
export const EntitiesProvider = ({ children }) => {
  const [entitiesData, setData] = useState([]);
  const [entitiesRefresher, setEntitiesRefresher] = useState(0);

  // Function to refresh entities data
  const refreshEntities = (num) => {
    setEntitiesRefresher(num);
  };

  // Fetch entities data when entitiesRefresher changes
  useEffect(() => {
    const main = async () => {
      try {
        let response = await fetch('/api/entity');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        let entities = await response.json();
        setData(entities);
      } catch (error) {
        console.error('Failed to fetch entities:', error);
      }
    };

    main();
  }, [entitiesRefresher]);

  return (
    <EntitiesData.Provider value={{ entitiesData, refreshEntities }}>
      {children}
    </EntitiesData.Provider>
  );
};

// Default export for easy import
export default { EntitiesProvider, EntitiesData };

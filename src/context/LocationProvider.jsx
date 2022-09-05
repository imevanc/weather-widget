import React from "react";

export const LocationContext = React.createContext(undefined);

export const LocationProvider = ({ children }) => {
  const [locationDetails, setLocationDetails] = React.useState({
    lat: "",
    lon: "",
  });

  return (
    <LocationContext.Provider value={{ locationDetails, setLocationDetails }}>
      {children}
    </LocationContext.Provider>
  );
};

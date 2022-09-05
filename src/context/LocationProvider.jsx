import React from "react";

const LocationContext = React.createContext(undefined);
const LocationDispatchContext = React.createContext(undefined);

const LocationProvider = ({ children }) => {
  const [locationDetails, setLocationDetails] = React.useState({
    lat: "",
    lon: "",
  });

  return (
    <LocationContext.Provider value={locationDetails}>
      <LocationDispatchContext.Provider value={setLocationDetails}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext, LocationDispatchContext };

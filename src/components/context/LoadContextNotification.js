import { useState } from "react";
import React from "react";

export const LoaderNotifyContext = React.createContext({
  refetchNotifyLoading: false,
  setrefetchNotifyLoading: (value) => {
    //
  },
});

const LoaderNotifyContextProvider = ({ children }) => {
  const [refetchNotifyLoading, setrefetchNotifyLoading] = useState(false);
  const values = {
    refetchNotifyLoading,
    setrefetchNotifyLoading,
  };
  return (
    <LoaderNotifyContext.Provider value={values}>
      {children}
    </LoaderNotifyContext.Provider>
  );
};

export default LoaderNotifyContextProvider;

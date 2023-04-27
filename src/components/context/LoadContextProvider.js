import { useState } from "react";
import Box from "@tds/core-box";
import React from "react";
import styled from "styled-components";
import Spinner from "@tds/core-spinner";
import A11yContent from "@tds/core-a11y-content";

export const LoaderContext = React.createContext({
  loading: false,
  setLoading: (value) => {
    //
  },
});
const LoaderBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  bottom: 0,
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const LoaderContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const values = {
    loading,
    setLoading,
  };
  return (
    <LoaderContext.Provider value={values}>
      {loading && (
        <LoaderBox>
          <Spinner
            variant="secondary"
            size="small"
            spinning={loading}
            label={
              <>
                Loading <A11yContent>Please wait.</A11yContent>
              </>
            }
          />
        </LoaderBox>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;

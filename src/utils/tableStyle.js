import React from "react";
import styled from "styled-components";
import Box from '@tds/core-box'

const MobileTableEndBox = styled(Box)({
  overflowX: `auto`,
  width: `calc(100vw - 1.5rem)`,
  "& table": { tableLayout: "auto" },
});

export const MobileTableEndorsement = ({
  children,
}) => {
  return <MobileTableEndBox>{children}</MobileTableEndBox>;
};
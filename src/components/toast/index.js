import React, { FC } from "react";
import Notification from "@tds/core-notification";
import Text from "@tds/core-text";
import Link from "@tds/core-link";
// import { ToasterProps } from "types/toaster";
import styled from "styled-components";

const ShadowBox = styled.div({
  "& > div": {
    boxShadow: "0 0 15px 1px rgba(0,0,0,0.2)",
    borderRadius: "4px",
    overflow: "hidden",
    marginTop: "4rem",
    padding: "28px",
  },
});

const AppToast = (props) => {
  return (
    <ShadowBox>
      <Notification
        variant={props.variant}
        copy="en"
        dismissible={props?.dismissible || false}
        onExit={() => {
          props.onExit && props.onExit(true);
        }}
      >
        {props?.title && <Text bold>{props.title}</Text>} &nbsp; {props?.desc}
        &nbsp;
        {props.url && (
          <Link
            href={props.url ? props.url.href : "#"}
            target={props.url?.target || "_blank"}
          >
            {props.url ? props.url?.label : "..."}
          </Link>
        )}
      </Notification>
    </ShadowBox>
  );
};

export default AppToast;

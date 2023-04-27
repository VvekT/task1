import React from "react";
import styled from "styled-components";
import Box from "@tds/core-box";
import ChevronLink from "@tds/core-chevron-link";
import { Link } from "react-router-dom";
import SkeletonProvider from "@tds/community-skeleton-provider";
import Avatar from "../common/avatar/index";
import Notification from "@tds/core-notification";
import { colorGreyRaven } from "@tds/core-colours";
import { media } from "@tds/core-responsive";
import { BASE_URL } from "../store/api";
// import { extname } from "path";

export const MOCK_INITIAL_VALUES = {
  working: "",
  priority: "P3",
  shortDescription: "",
  category: "",
  subCategory: "",
  additionalSubcategory: "",
  contact: "",
  callbackNumber: "",
  affectedUser: "",
  workstationNumber: "",
  otherUser: "",
  otherCallbacknumber: "",
  program: "",
  siteLocation: "",
  descriptionOfIssue: "",
  watchLists: [],
  status: "Open",
  assignTo: "",
  ticketType: "tickets"
};

export const TextWrapper = styled(Box)`
  display: ${(props) => (props.inline ? "inline-block" : null)};
  && {
    ${(props) => ({ ...props.wrapperProps })}
  }
  && span {
    color: ${(props) => props.color};
    cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
    ${(props) => ({ ...props.additionalProps })}
  }
`;

export const docAndImageFilter = (file) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|webp|svg|pdf|xls|xlsx|doc|docx|pdf/;
  // Check ext
  // const allowedExt = filetypes.test(extname(file.name).toLowerCase());
  // // Check mime
  const allowedMimeType = filetypes.test(file.type);
  // return allowedMimeType && allowedExt;
  return allowedMimeType;
};

export const IconButtonWrapper = styled(Box)`
  && {
    ${(props) => ({ ...props.additionalProps })}
  }
  && svg {
    ${(props) => ({ ...props.iconProps })}
  }
`;

export const IconWrapper = styled(Box)`
  display: ${(props) => props.inline ? 'inline-block' : "block"};
  && svg {
    fill: ${(props) => props.fillColor};
  }
`;

export const ChevLinkWrapper = styled(Box)`
  && > a {
    ${(props) => ({ ...props.additionalProps })}
  }
  && span {
    ${(props) => ({ ...props.additionalProps })}
  }
`;

export const BackButton = ({ url, text }) => {
  return (
    <ChevLinkWrapper additionalProps={{ cursor: "pointer" }}>
      <ChevronLink
        // to={`${process.env.PUBLIC_URL}${url}`}
        to={url}
        direction="left"
        /*   variant="secondary" */
        reactRouterLinkComponent={Link}
      >
        {text ?? "Back"}
      </ChevronLink>
    </ChevLinkWrapper>
  );
};

export const ProfilePicWithFallback = ({
  profilePic,
  height,
  width,
  name,
  fontSize,
  loading,
}) => {
  if (loading) {
    return (
      <SkeletonProvider show={true}>
        <Image
          rounded="circle"
          width={height ?? 130}
          height={width ?? 130}
          src={""}
          alt="loading"
          skeleton
        />
      </SkeletonProvider>
    );
  }
  return (
    <div
      style={{
        position: "relative",
        height: height ?? 130,
        width: width ?? 130,
        flex: "none",
      }}
    >
      {!profilePic && (
        <Avatar fill fontSize={fontSize ?? "1em"} text={name} withInitials />
      )}
      {profilePic && <ProfilePicComponent src={`${BASE_URL}` + profilePic} />}
    </div>
  );
};

export const NoResultsFound = ({ text }) => {
  return (
    <>
      <Notification variant="error">{text ?? "No results found"}</Notification>
    </>
  );
};

export const CardWrapper = styled(Box)`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const NameText = styled(Box)`
  text-align: center;
`;

export const ProfileInfoBox = styled(Box)`
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const AttachmentContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(1,1fr)`,
  gap: "1rem",
  alignItems: "flex-end",
  borderRadius: "4px",
  minHeight: "200px",
  height: "auto",
  // top: "100px",
  margin: "8px 0 0 30px",
  wordBreak: "break-all",
  // position: "sticky",
  marginleft: "10px",
  border: `1px solid ${colorGreyRaven}`,
  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

//requestSummaryContainer
export const RequestSummaryContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(1,1fr)`,
  gap: "1rem",
  alignItems: "flex-start",
  borderRadius: "4px",
  minHeight: "200px",
  height: "auto",
  textAlign: "left",
  wordBreak: "break-all",
  margin: "8px 0 0 30px",
  // position: "sticky",
  marginleft: "10px",
  paddingTop: "13px",
  border: `1px solid ${colorGreyRaven}`,
  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

export const RequestSummaryBox = styled(Box)`
  padding: 10px;
  background-color: #F4F9F2;
  justify-content: center;
  margin: 0 16px;
`;

export const SingleGridLayout = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(1,1fr)`,
  gap: "1rem",
  marginTop: "25px",
  alignItems: "flex-end",

  "& textarea": {
    minHeight: "unset",
    width: "100%",
  },

  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

export const IconOuterWrapper = styled(Box)({
  padding: "0 20px 20px",
  position: "absolute",
  top: "20px",
  display: "flex",
  flexDirection: "row",
});

export const getDiffInDate = (date) => {
  if (date) {
    console.log(date, "date")
    const date1 = new Date();
    const date2 = new Date(date);
    const diffTime = date2.getTime() - date1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  } else {
    return 0;
  }
};

export const handleScrollToTop = (animate) => {
  // const root = document.querySelector("#root");
  let scrollPayload = { top: 0, left: 0 };
  if (animate) {
    scrollPayload = { ...scrollPayload, behavior: "smooth" };
  }
  window.scroll(scrollPayload);
};

export const getFullName = ({ firstName, lastName }) => {
  return [firstName, lastName].join(" ");
};

export const handleScrollToPostion = (top, left, animate) => {
  // const root = document.querySelector("#root");
  let scrollPayload = { top: top ?? 0, left: left ?? 0 };
  if (animate) {
    scrollPayload = { ...scrollPayload, behavior: "smooth" };
  }
  window.scroll(scrollPayload);
};

export const getRouteUrl = (relativeUrl) => {
  let newRelativeUrl = relativeUrl;
  if (newRelativeUrl.startsWith("/")) {
    newRelativeUrl = newRelativeUrl.slice(1);
  }
  return `${BASE_URL}${relativeUrl}`;
};

export const getTrimmedCount = (count) => {
  const value = Number(count);
  if (value > 99) {
    return "99+";
  }
  return String(count);
};
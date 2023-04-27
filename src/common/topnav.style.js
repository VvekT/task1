import styled from "styled-components";
import {
  colorWhite,
  colorGreyShark,
  colorGreyGainsboro,
  colorGreyRaven,
  colorPanache,
  colorTelusPurple,
  colorCardinal,
  colorTelusGreen,
  colorWhiteLilac,
} from "@tds/core-colours";
import { media } from "@tds/core-responsive";
import Text from "@tds/core-text";
import Box from "@tds/core-box";

export const TopbarContainer = styled.nav`
  min-height: 72px;
  width: 100%;
  background-image: linear-gradient(#4b286d, #1e0e2e);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  ${media
    .from("xs")
    .until("sm")
    .css({
      position: "fixed",
      top: (props) => (props.originalEmpID ? "30px" : "0"),
    })},
`;

export const TopbarLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  ${media.from("xs").until("sm").css({
    flex: 2,
  })},
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colorWhite};
  cursor: pointer;
  font-weight: 200;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  overflow: hidden;
  svg {
    max-width: 100%;
  }
`;

export const HamburgerIconWrap = styled.div`
  margin-right: 20px;
`;

export const FontSemiBold = styled.span`
  font-weight: 600;
`;

export const IconBox = styled.span`
  margin-left: 20px;
`;

export const TopCenter = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 4;
`;

export const Searchbar = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 10px;
  position: relative;
  color: white;
  ${media.from("sm").css({
    maxWidth: "100%",
  })}
`;

export const SearchIconBox = styled.span`
  position: absolute;
  top: calc(50% - 12px);
  left: 16px;
  color: ${colorWhite};
  margin-left: 4px;
  ${media.from("xs").css({
    "& > svg": {
      fill: colorGreyRaven,
    },
  })}
  ${media.from("md").css({
    "& > svg": {
      fill: colorWhite,
    },
  })}
`;

export const SearchBox = styled.input`
  padding: 8px 8px 8px ${(props) => (props.focused ? "16px" : "40px")};
  background: transparent;
  font-weight: 400;
  font-size: 15px;
  border-radius: 50px;
  overflow: hidden;
  width: 100%;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: ${colorWhite};
  ${media.from("xs").css({
    color: colorGreyRaven,
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    "&::placeholder": {
      color: colorGreyGainsboro,
      opacity: 1 /* Firefox */,
    },
    "&:hover": {
      borderColor: "#d9c0f1",
    },
  })};
  ${media.from("md").css({
    border: "1px solid rgba(255, 255, 255, 0.5)",
    color: colorWhite,
    "&::placeholder": {
      color: colorWhite,
      opacity: 1 /* Firefox */,
    },
    "&:hover": {
      borderColor: "#d9c0f1",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  })};
`;

export const TopRightContainer = styled.ul`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  padding-right: 20px;
  list-style: none;
  ${media.from("xs").until("sm").css({
    flex: 1,
  })},
`;

export const TopRightLinkItem = styled.li`
  :first-child {
    margin-right: 10px;
  }
  position: relative;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > * > svg {
    width: 24px;
    height: 24px;
    fill: ${colorWhite};
  }
`;
export const SupportWrapper = styled.button`
  position: relative;
  cursor: pointer;
  color: ${colorGreyGainsboro};
  border: 0;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SupportPopup = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colorWhite};
  position: absolute;
  top: 50px;
  min-width: max-content;
  align-items: flex-start;
  border: 1px solid #d8d8d8;
  box-shadow: 0 0 16px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  div {
    width: 100%;
    text-align: start;
    a {
      text-decoration: none !important;
    }
  }
  div:hover {
    width: 100%;
    background: ${colorGreyGainsboro};
    a span {
      color: ${colorTelusPurple};
    }
  }
`;

export const NotifyWrapper = styled.button`
  position: relative;
  cursor: pointer;
  color: ${colorGreyGainsboro};
  border: 0;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  .ringBell{
    -webkit-animation: ring 6s .10s ease-in-out infinite;
  -webkit-transform-origin: 50% 4px;
  -moz-animation: ring 6s .10s ease-in-out infinite;
  -moz-transform-origin: 50% 4px;
  animation: ring 6s .10s ease-in-out infinite;
  transform-origin: 50% 4px;
  animation-iteration-count: 2;
  
}
.displayNone {
  display: none;
  span {
    display: none;
  }
}


@-webkit-keyframes ring {
  0% { -webkit-transform: rotateZ(0); }
  1% { -webkit-transform: rotateZ(30deg); }
  3% { -webkit-transform: rotateZ(-28deg); }
  5% { -webkit-transform: rotateZ(34deg); }
  7% { -webkit-transform: rotateZ(-32deg); }
  9% { -webkit-transform: rotateZ(30deg); }
  11% { -webkit-transform: rotateZ(-28deg); }
  13% { -webkit-transform: rotateZ(26deg); }
  15% { -webkit-transform: rotateZ(-24deg); }
  17% { -webkit-transform: rotateZ(22deg); }
  19% { -webkit-transform: rotateZ(-20deg); }
  21% { -webkit-transform: rotateZ(18deg); }
  23% { -webkit-transform: rotateZ(-16deg); }
  25% { -webkit-transform: rotateZ(14deg); }
  27% { -webkit-transform: rotateZ(-12deg); }
  29% { -webkit-transform: rotateZ(10deg); }
  31% { -webkit-transform: rotateZ(-8deg); }
  33% { -webkit-transform: rotateZ(6deg); }
  35% { -webkit-transform: rotateZ(-4deg); }
  37% { -webkit-transform: rotateZ(2deg); }
  39% { -webkit-transform: rotateZ(-1deg); }
  41% { -webkit-transform: rotateZ(1deg); }

  43% { -webkit-transform: rotateZ(0); }
  100% { -webkit-transform: rotateZ(0); }
}

@-moz-keyframes ring {
  0% { -moz-transform: rotate(0); }
  1% { -moz-transform: rotate(30deg); }
  3% { -moz-transform: rotate(-28deg); }
  5% { -moz-transform: rotate(34deg); }
  7% { -moz-transform: rotate(-32deg); }
  9% { -moz-transform: rotate(30deg); }
  11% { -moz-transform: rotate(-28deg); }
  13% { -moz-transform: rotate(26deg); }
  15% { -moz-transform: rotate(-24deg); }
  17% { -moz-transform: rotate(22deg); }
  19% { -moz-transform: rotate(-20deg); }
  21% { -moz-transform: rotate(18deg); }
  23% { -moz-transform: rotate(-16deg); }
  25% { -moz-transform: rotate(14deg); }
  27% { -moz-transform: rotate(-12deg); }
  29% { -moz-transform: rotate(10deg); }
  31% { -moz-transform: rotate(-8deg); }
  33% { -moz-transform: rotate(6deg); }
  35% { -moz-transform: rotate(-4deg); }
  37% { -moz-transform: rotate(2deg); }
  39% { -moz-transform: rotate(-1deg); }
  41% { -moz-transform: rotate(1deg); }

  43% { -moz-transform: rotate(0); }
  100% { -moz-transform: rotate(0); }
}

@keyframes ring {
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }

  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
}
  }
`;
export const NotifyPopup = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colorGreyGainsboro};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colorGreyGainsboro};
  }
  position: absolute;
  max-height: 90vh;
  height: auto;
  overflow-y: scroll;
  width: 28rem;
  top: 98px;
  right: 25px;
  border: 1px solid ${colorGreyGainsboro};
  box-shadow: 0 0 16px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  background-color: ${colorWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  padding-right: 0px;
  ${media
    .from("xs")
    .until("sm")
    .css({
      width: "100vw",
      /* transform: translate(10px, 10px); */
      /* right: -201px; */
      position: "fixed",
      top: (props) => (props.originalEmpID ? "100px" : "72px"),
      left: 0,
    })},
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// export const ProfilePopup = styled.div`
//   position: absolute;
//   height: auto;
//   overflow-y: scroll;
//   width: 10rem;
//   top: 49px;
//   right: -31px;
//   border: 1px solid ${colorPanache};
//   background-color: ${colorWhite};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   ${media.from("xs").until("sm").css({
//     width: "100vw",
//   })},
// `;
export const NotifyContainer = styled.div`
  max-height: 90vh;
  width: inherit;
  -webkit-scrollbar {
    width: 8px;
  }
`;
export const CaretWrapper = styled.div`
  p {
    display: flex;
    justify-content: center;
  }
  p svg {
    margin-top: -5px;
  }
`;
export const NotifyIconWrapper = styled.div`
  background-color: ${colorTelusPurple};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  flex: none;
  position: relative;
`;
export const NotifyIconActive = styled.div`
  border-radius: 50%;
  display: block;
  place-items: center;
  position: absolute;
  left: 19px;
  top: -10px;
  min-height: 24px;
  min-width: 24px;
  padding: 4px 4px;
  background-color: #c12335;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  ${media
    .from("xs")
    .until("md")
    .css({
      zIndex: 10,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      paddingLeft: "10px",
      paddingRight: "10px",
      backgroundColor: "#FFFFFF",
      visibility: (props) => (props.display ? "visible" : "hidden"),
    })},
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const NotifyPopupIcon = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  src: "NotifyBell";
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const LinkItem = styled.button`
  position: relative;
  cursor: pointer;
  color: ${colorGreyGainsboro};
  border: 0;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerIcon = styled.img`
  vertical-align: middle;
`;

export const AvatarButton = styled(LinkItem)`
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;
  padding: 0;
  width: 32px;
  height: 32px;
  overflow: hidden;
  background-position: center;
  background-size: 100%;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props?.url});
`;

export const SearchMobileContainer = styled.div`
  position: fixed;
  z-index: 999;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  width: 100%;
`;

export const ResButton = styled.button`
  border: 0;
  border-radius: 50%;
  outline: none;
  color: black;
  height: 32px;
  width: 32px;
  text-align: center;
`;

export const ProfilePopup = styled.div`
  ::-webkit-scrollbar {
    width: 5px;
    height: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colorGreyGainsboro};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colorGreyGainsboro};
  }
  position: absolute;
  max-height: 90vh;
  height: auto;
  overflow-y: auto;
  width: 150px;
  top: 52px;
  left: 0px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: ${colorWhite};
  display: flex;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
`;

export const ProfileDetails = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colorGreyGainsboro};
  padding-bottom: 10px;
`;

export const ProfileContainer = styled.div`
  max-height: 90vh;
  overflow: hidden;
`;
export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  .iTTawZ {
    width: 100%;
  }
`;
export const ImageWrapper = styled.div`
  svg {
    width: 20px;
    height: 20px;
    fill: ${colorCardinal};
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${colorWhite};
  padding: 10px 10px;
  ${media.from("xs").until("sm").css({
    width: "100vw",
  })},
  a span {
    color: ${colorGreyShark};
    padding-left: 10px;
    text-decoration: none;
  }
  a {
    display: flex;
    text-decoration: none !important;
  }
  svg {
    stroke: ${colorGreyRaven};
    path,
    polyline,
    line {
      stroke: ${colorGreyRaven};
    }
  }

  :hover {
    background: ${colorGreyGainsboro};
    a span {
      color: ${colorTelusPurple};
    }
    svg {
      fill: ${colorTelusPurple};
      stroke: ${colorTelusPurple};
      path,
      polyline,
      line {
        stroke: ${colorTelusPurple};
      }
    }
  }
  .active {
    background: ${colorTelusPurple};
    a span {
      color: ${colorWhite};
    }
    svg {
      fill: ${colorWhite};
      stroke: ${colorWhite};
      path,
      polyline,
      line {
        stroke: ${colorWhite};
      }
    }
  }
`;

export const UserRightContainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  color: ${colorWhite};
  aling-item: center;
`;

export const TextHeader = styled(Text)`
  color: ${colorWhite};
`;
export const NotificationWrapper = styled(Box)`
  background: ${colorWhiteLilac};
  &.active {
    background: ${colorWhite};
    div: first-child {
      div:nth-child(3) {
        display: none;
      }
    }
  }
  & > div:first-child {
    padding: 1rem;
  }
  & div {
    align-items: flex-start;
  }
  & span {
    align-items: start;
    text-align: left;
    margin-bottom: 0px !important;
  }
`;
export const CircularRead = styled.div`
  ::before {
    content: "";
    display: block;
    background: ${colorGreyShark};
    border-radius: 50%;
    width: 8px !important;
    height: 8px !important;
  }
`;

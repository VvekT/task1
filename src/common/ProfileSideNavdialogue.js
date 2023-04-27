import React, {useRef, useEffect, MouseEvent, useState } from "react";
// import { ReactComponent as Profilelogo } from "../../assets/Icon-profile-inactive.svg";
// import { ReactComponent as LogOutIcon } from "../../assets/Icon_Logout.svg";
import Text from "@tds/core-text";
import TdsLink from "@tds/core-link";
import { colorCardinal } from "@tds/core-colours";
import styled from "styled-components";
import {
  colorWhite,
  colorGreyShark,
  colorGreyGainsboro,
  colorGreyRaven,
  colorTelusPurple,
} from "@tds/core-colours";
import { customPageData } from "../utils/customPageData";
import Icon from "./icons/Icon";

const ProfilePopup = styled.div`
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

    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {

  }
  position: absolute;
  max-height: 90vh;
  height: auto;
  overflow-y: auto;
  width: auto;
  top: 63px;
  border: 1px solid ${colorGreyGainsboro};
  left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  z-index: 20;
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

const ProfileContainer = styled.div`
  max-height: 90vh;
  overflow: hidden;
`;

const ProfileSideNavdialogue = ({ onProfileClick }) => {
  // const [activeClass, setClass] = useState("");
  // const { data } = useProfile
  const profileRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      const container =
        profileRef?.current &&
        profileRef.current?.contains((event?.target) || null);
      if (!container) {
        onProfileClick(false);
      }
    };
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [onProfileClick]);

  return (
    <>
      <ProfilePopup>
        <ProfileContainer ref={profileRef}>
        <ListItems>
            {
                customPageData && customPageData["sidebar"].map((option)=>{
                    return(
                      <Item>
                            <TdsLink
                              href={option.link}
                              onClick={() => onProfileClick(false)}
                            >
                            <Icon name={option.icon}  iconClass="sz32" text={option.title} iconSize={"small"}/>
                          </TdsLink>
                      </Item>
                    )
                })
            }
          </ListItems>

        </ProfileContainer>
      </ProfilePopup>
    </>
  );
};
export default ProfileSideNavdialogue;

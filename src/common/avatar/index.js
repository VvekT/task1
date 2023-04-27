import React from "react";
import Box from "@tds/core-box";
import {
  colorGreyShark,
  colorTelusGreen,
  colorTelusPurple,
  colorWhite,
} from "@tds/core-colours";
import Text from "@tds/core-text";
import styled from "styled-components";
import { TextWrapper } from "../../utils";

const AvatarBox = styled(Box)`
  cursor: ${(props) => (props.onClick ? "pointer" : "initial")};
  position: ${(props) => (props.fill ? "absolute" : "initial")};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex: none;
  background: ${(props) => props.color ?? colorTelusPurple};
  height: ${(props) =>
    props.fill ? "100%" : props.height ? props.height + "px" : "50px"};
  width: ${(props) =>
    props.fill ? "100%" : props.width ? props.width + "px" : "50px"};
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
const Avatar = ({
  text,
  withInitials,
  fill,
  width,
  color,
  height,
  fontSize,
  onClick,
}) => {
  const avatarText = withInitials
    ? text
        .split(" ")
        .slice(0, 3)
        .map((item) => item.charAt(0).toUpperCase())
        .join("")
    : text.charAt(0).toUpperCase();

  return (
    <AvatarBox
      color={color}
      onClick={onClick}
      fill={fill}
      height={height}
      width={width}
    >
      <TextWrapper
        color={colorWhite}
        additionalProps={{
          fontSize: fontSize ? fontSize : fill ? "3rem" : null,
          cursor: "inherit",
        }}
      >
        <Text size="large">{avatarText}</Text>
      </TextWrapper>
    </AvatarBox>
  );
};

export default Avatar;

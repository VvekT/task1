import React from "react";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import Text from "@tds/core-text";
import { media } from "@tds/core-responsive";
import styled from "styled-components";
import Avatar from "../../common/avatar/index";
import { NameText, ProfileInfoBox, TextWrapper } from "../../utils";
import Heading from "@tds/core-heading";
import Icon from "../../common/icons/Icon";
import Paragraph from "@tds/core-paragraph";
import Link from "@tds/core-link";
import FlexGrid from "@tds/core-flex-grid";
import {
  colorGreyShuttle,
  colorTelusPurple,
  colorTelusGreen,
} from "@tds/core-colours";
import documentIcon from "../../components/images/icon-document.svg";
import Image from "@tds/core-image";
import HairlineDivider from "@tds/core-hairline-divider";

const ProfileBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  ${media.from("xs").until("md").css({
    flexDirection: "column",
  })}
`;
const ProfileTextBox = styled(Box)({
  marginLeft: "-13px",
});
const HeadingLeft = styled(Box)({
  textAlign: "left",
});
const TextLeft = styled.span`
  //   padding-left: 30px;
  word-break: break-word;
`;

const PostionRelativeImage = styled.span`
  position: absolute;
`;

const TextLeftWIthRegion = styled.span`
  word-break: break-word;
`;

const ProfileCard = ({ data }) => {
  const profileData = { ...data };
  return (
    <Box vertical={2}>
      <div
        style={{
          position: "relative",
          height: 130,
          width: 130,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {!profileData?.profilePicture && (
          <Avatar
            text={profileData?.firstName + " " + profileData?.lastName}
            fill
            withInitials
          />
        )}
        {/* {profileData?.profilePicture && (
        <ProfilePicComponent
          src={`${BASE_URL}` + profileData.profilePicture}
        />
      )} */}
      </div>
      <TextWrapper style={{ textAlign: "center" }}>
        <Heading level="h1">
          {profileData?.firstName + " " + profileData?.lastName}
        </Heading>
      </TextWrapper>
      <Box vertical={2}>
        <HairlineDivider />
      </Box>

      <FlexGrid>
        <ProfileTextBox>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={7}>
              <Box vertical={2}>
                <Text>Customer ID:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={5}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.customerId ?? 'N/A'}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={7}>
              <Box vertical={2}>
                <Text>Phone No:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={5}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.phoneNo ?? 'N/A'}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={7}>
              <Box vertical={2}>
                <Text>Location:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={5}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.site}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </ProfileTextBox>
      </FlexGrid>

      <HairlineDivider />
      <Box vertical={2}>
        <div className="profile-quick-link">
          <ProfileInfoBox between={2}>
            <HeadingLeft>
              <TextWrapper>
                <Text size="medium" bold>
                  Quick Links{" "}
                </Text>
              </TextWrapper>
            </HeadingLeft>
            <Paragraph size="small">
              <Link href="/coming-soon">
                Update Email
                <Icon name="Icon-Union8" className="svg-green" />
              </Link>
            </Paragraph>
            <Paragraph size="small">
              <Link href="/coming-soon">
                Change Password
                <Icon name="Icon-Union8" className="svg-green" />
              </Link>
            </Paragraph>
          </ProfileInfoBox>
        </div>
      </Box>
    </Box>
  );
};
export default ProfileCard;

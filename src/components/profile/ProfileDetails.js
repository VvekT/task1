import React from "react";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import Text from "@tds/core-text";
import { media } from "@tds/core-responsive";
import styled from "styled-components";
import { getFullName, NameText, ProfileInfoBox, TextWrapper } from "../../utils";
import Heading from "@tds/core-heading";
import Button from "@tds/core-button";
import FlexGrid from "@tds/core-flex-grid";
import {
  colorGreyShuttle,
  colorTelusPurple,
  colorTelusGreen,
} from "@tds/core-colours";
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

const CutomerdetailsBox = styled(Box)({
  marginLeft: "-13px",
});

const HeadingTopSpace = styled(Box)({
  marginTop: "-27px",
});
const HeadingLeft = styled(Box)({
  textAlign: "left",
});
const ProfileDetails = ({ data }) => {
  const profileData = { ...data };
  return (
    <>
      <Box>
        <HeadingTopSpace>
          <TextWrapper>
            <Heading level="h3">Customer Details</Heading>
          </TextWrapper>
        </HeadingTopSpace>
      </Box>
      <Box vertical={2}>
        <HairlineDivider />
      </Box>

      <FlexGrid>
        <CutomerdetailsBox>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={3}>
              <Box vertical={2}>
                <Text>Customer ID:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={9}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.customerId ?? 'N/A'}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={3}>
              <Box vertical={2}>
                <Text>Name:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={9}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.firstName + " " + profileData?.lastName}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={3}>
              <Box vertical={2}>
                <Text>Email:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={9}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.email}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={3}>
              <Box vertical={2}>
                <Text>Phone No:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={9}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.phoneNo ?? 'N/A'}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </CutomerdetailsBox>
      </FlexGrid>

      <Box>
        <ProfileInfoBox between={1}>
          <HeadingLeft>
            <TextWrapper>
              <Heading level="h3">Communication Details</Heading>
            </TextWrapper>
          </HeadingLeft>
          <Box vertical={2}>
            <HairlineDivider />
          </Box>
        </ProfileInfoBox>
      </Box>

      <FlexGrid>
        <CutomerdetailsBox>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={5}>
              <Box vertical={2}>
                <Text>Billing Address:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={7}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.billingAddress ?? "N/A"}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={5}>
              <Box vertical={2}>
                <Text>Communication Address:</Text>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={7}>
              <Box vertical={2}>
                <Text size="small" bold>
                  {profileData?.communicationAddress ?? "N/A"}
                </Text>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </CutomerdetailsBox>
      </FlexGrid>

      <Box vertical={2}>
        {" "}
        <Button size="small">Edit</Button>
      </Box>
    </>
  );
};
export default ProfileDetails;

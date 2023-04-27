import React, { useState } from "react";
import Greeting from "../../common/Greeting";
import { BackButton, ProfileInfoBox, TextWrapper } from "../../utils";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import Heading from "@tds/core-heading";
import { ButtonTextWrapper } from "@tds/core-button";
import { colorGreyRaven, colorTelusGreen } from "@tds/core-colours";
import styled from "styled-components";
import Card from "@tds/core-card";
import { media } from "@tds/core-responsive";
import Text from "@tds/core-text";
import ProfileCard from "./ProfileCard";
import UnorderedList from "@tds/core-unordered-list";
import ProfileDetails from "./ProfileDetails";

import "./profile.scss";
import { useGetUserQuery } from "../../store/profileSlice";
import ChevronLink from "@tds/core-chevron-link";
import SkeletonProvider from "@tds/community-skeleton-provider";
import Divider from "@tds/core-hairline-divider";

const ProfileOuterContainer = styled(Box)({
  padding: "0 10px",
});

const ProfileOuterContainer1 = styled(Box)({
  padding: "20px 10px",
});
const ProfileHeading = styled(Box)({
  margin: "15px 9px",
});
const ServiceListBox = styled(Box)({
  padding: "20px 0px",
});
const HeadingTopSpace = styled(Box)({
  marginTop: "-27px",
});
const ProfileContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(1,1fr)`,
  gap: "1rem",
  borderRadius: "12px",
  minHeight: "250px",
  height: "auto",
  position: "relative",
  padding: "20px",
  border: `1px solid ${colorGreyRaven}`,
  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

const Profile = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserQuery('getUsers')
  console.log(users)
  const [showGreeting, setShowGreeting] = useState(true);

  const activatedService = [
    "AWS Documentation",
    "CCL Service Assurance Support",
    "Telus Private Cloud",
  ];
  return (
    <>
      {/* {showGreeting && <Greeting showModal={setShowGreeting} />} */}
      <div className="profileBackbtn">
      </div>
      <Box>
        <ProfileHeading>
          <ButtonTextWrapper>
            <ChevronLink direction="left" onClick={() => history.back(-1)}>
              Back
            </ChevronLink>
          </ButtonTextWrapper>
          <Box >
            <Heading level="h1">My Profile</Heading>
          </Box>
        </ProfileHeading>
      </Box>
      <FlexGrid.Row>
        <FlexGrid.Col xs={12} md={8} lg={8}>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={12} lg={12}>
              <ProfileOuterContainer>
                {isLoading && (
                  <SkeletonProvider show={isLoading}>
                    <Text skeleton></Text>
                    <Text skeleton></Text>
                    <Box vertical={3}>
                      <Divider />
                    </Box>
                    <Text skeleton></Text>
                    <Text skeleton></Text>
                  </SkeletonProvider>
                )}
                {!isLoading && (
                  <Card variant="defaultOnlyBorder">
                    {users?.services && (
                      <Box>
                        <HeadingTopSpace>
                          <TextWrapper>
                            <Heading level="h3">3 Services Activated</Heading>
                          </TextWrapper>
                        </HeadingTopSpace>
                      </Box>
                    )}
                    <ServiceListBox>
                      {users?.services && (
                        <TextWrapper>
                          <UnorderedList>
                            {activatedService.map((serviceName) => {
                              return (
                                <UnorderedList.Item>
                                  {serviceName}
                                </UnorderedList.Item>
                              );
                            })}
                          </UnorderedList>
                        </TextWrapper>
                      )}
                      {!users?.services && <Heading level="h1">No Service Activated</Heading>}
                    </ServiceListBox>
                    <Box verticle={4}>
                      <div style={{ float: "right" }}>
                        <ProfileInfoBox between={4} inline>
                          <TextWrapper color={colorTelusGreen}>
                            <Text size="small">View Billing Cycle</Text>
                          </TextWrapper>
                          <TextWrapper color={colorTelusGreen}>
                            <Text size="small">Add Service</Text>
                          </TextWrapper>
                        </ProfileInfoBox>
                      </div>
                    </Box>
                  </Card>
                )}
              </ProfileOuterContainer>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={12} lg={12}>
              <ProfileOuterContainer1>
                {isLoading && (
                  <SkeletonProvider show={isLoading}>
                    <Text skeleton></Text>
                    <Text skeleton></Text>
                    <Box vertical={3}>
                      <Divider />
                    </Box>
                    <Text skeleton></Text>
                    <Text skeleton></Text>
                  </SkeletonProvider>
                )}
                {!isLoading && (
                  <Card variant="defaultOnlyBorder">
                    <ProfileDetails data={users} />
                  </Card>
                )}
              </ProfileOuterContainer1>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid.Col>
        <FlexGrid.Col distribute="between" xs={12} md={4} lg={4}>
          <ProfileOuterContainer>
            {isLoading && (
              <SkeletonProvider show={isLoading}>
                <Text skeleton></Text>
                <Text skeleton></Text>
                <Box vertical={3}>
                  <Divider />
                </Box>
                <Text skeleton></Text>
                <Text skeleton></Text>
              </SkeletonProvider>
            )}
            {!isLoading && (
              <Card variant="defaultOnlyBorder">
                <ProfileCard data={users} />
              </Card>
            )}
          </ProfileOuterContainer>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </>
  );
};

export default Profile;

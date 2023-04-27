import React, { useEffect, useState } from "react";
import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Heading from "@tds/core-heading";
import Paragraph from "@tds/core-paragraph";
import Box from "@tds/core-box";
// import DecorativeIcon from '@tds/core-decorative-icon'
import { Close } from "@tds/core-interactive-icon";
import Link from "@tds/core-link";
import Text from "@tds/core-text";
import { useGetUserQuery } from "../store/profileSlice";

import "./index.scss";
import { useGetCountBackNotificationQuery } from "../store/ticketsPostSlice";

const Greeting = ({ showModal }) => {
  const { data: users } = useGetUserQuery('getUser');
  const { data: countData, isLoading } = useGetCountBackNotificationQuery();
  const closeModal = () => {
    showModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      showModal(false);
    }, 5000);
  }, []);

  return (
    <>
      <Box className="greeting-card">
        <div className="card-content">
          <Card>
            <FlexGrid.Row>
              <FlexGrid.Col
                horizontalAlign="right"
                xs={12}
                md={12}
                lg={12}
                sm={12}
              >
                <Link
                  icon={Close}
                  iconPosition="right"
                  onClick={closeModal}
                >
                  Close
                </Link>
              </FlexGrid.Col>
            </FlexGrid.Row>
            <Box className="greetingBox" between={1}>
              <Heading level="h3">Welcome back {users?.firstName} !</Heading>
              <Text>Since your last login on the system, there were:</Text>
              <div className="dashboard-para-activities">
                <Box><Text bold>{countData?.data?.openTicket ?? 0}</Text> New Open tickets</Box>
                <Box><Text bold>{countData?.data?.closedTicket ?? 0}</Text> New Resolved/Closed tickets</Box>
                <Box><Text bold>0 </Text>New Reopened tickets</Box>
              </div>
            </Box>
          </Card>
        </div>
      </Box>
    </>
  );
};

export default Greeting;

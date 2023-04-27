import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import Tabs from "@tds/community-tabs";
import FlexGrid from "@tds/core-flex-grid";
import Button from "@tds/core-button";
import { CaretDown } from "@tds/core-interactive-icon";

import * as HomeAction from "../../store/home/home.action";
import Greeting from "../../common/Greeting";
const Dashboard = lazy(() => import("./Home"));

// import "./home.scss";
import '../service-request/index.scss'

const Homepage = (props) => {
  const [showGreeting, setShowGreeting] = useState(true);
  const { contentFullData, home, dispatch } = props;

  const initFetch = useCallback(() => {
    dispatch(HomeAction.showMessage());
  });
  useEffect(() => {
    initFetch();
  }, []);
  const [open, setOpen] = useState("dashboard");

  const handleOpen = (id) => {
    setOpen(id);
  };

  return (

    <>
      <div className="dashboard-middle-section">
        <Suspense fallback={<div>Loading...</div>}>
          <FlexGrid limitWidth={false}>
            {showGreeting && <Greeting showModal={setShowGreeting} />}
            <FlexGrid.Col horizontalAlign="right">
              <div className="dashboard-counter-button">
                <span className="count-view-text">View:</span>{" "}
                <Button variant="brand">
                  Last 24 hours&nbsp;&nbsp;&nbsp;
                  <CaretDown />
                </Button>
              </div>
            </FlexGrid.Col>
            <FlexGrid.Col>
              <Tabs copy="en" open={open} onOpen={handleOpen}>
                <Tabs.Panel id="dashboard" heading="DASHBOARD" />
                <Tabs.Panel id="analytics" heading="ANALYTICS" />
                <Tabs.Panel id="activity" heading="ACTIVITY" />
              </Tabs>
            </FlexGrid.Col>
            {open === "dashboard" && <Dashboard {...props} />}
          </FlexGrid>
        </Suspense>
      </div>
    </>
  );
};

export default Homepage;

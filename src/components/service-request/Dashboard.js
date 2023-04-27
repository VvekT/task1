import React, { useState, useEffect } from "react";
import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Text from "@tds/core-text";
import Heading from "@tds/core-heading";
import Paragraph from "@tds/core-paragraph";
import Box from "@tds/core-box";
import ChevronLink from "@tds/core-chevron-link";
import {
  Contract,
  Document,
  Helpdesk,
  CallForward,
  CartEmptyBold,
  Bookmark,
  RemoteControl,
} from "@tds/core-decorative-icon";
import HairlineDivider from "@tds/core-hairline-divider";
import { BenefitWithHeading, BenefitNoHeading } from "@tds/core-benefit";
import Tabs from "@tds/community-tabs";
import Notification from "@tds/core-notification";

// import DecorativeIcon from '@tds/core-decorative-icon'
import {
  DownloadPDF,
  SettingsBold,
  SupportBold,
  Settings,
  LinkExternal,
  QuestionMarkCircle,
} from "@tds/core-interactive-icon";
import Link from "@tds/core-link";

import CustomTable from "../../common/table";
import "./dashboard.scss";
import Icon from "../../common/icons/Icon";
import { useGetTicketsQuery } from "../../store/ticketsPostSlice";
import styled from "styled-components";
import { media } from "@tds/core-responsive";

const ThreeGridLayout = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(3,1fr)`,
  gap: "1rem",
  marginTop: "15px",
  alignItems: "flex-end",

  "& H3": {
    fontSize: "16px",
  },

  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

const TwoGridLayout = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(2,1fr)`,
  gap: "1rem",
  alignItems: "flex-end",

  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

const head = [
  "Number",
  "Item",
  "State",
  "Opened",
  "Due Time/Date",
  "Opened by",
];
const tableData = [
  {
    number: "RITM0034950",
    item: "Need something for AWS",
    state: "Complete",
    opened: new Date().toLocaleString(),
    dueTimeDate: new Date().toLocaleString(),
    openedBy: "Will Demo",
  },
  {
    number: "RITM0034950",
    item: "Need something for AWS",
    state: "Complete",
    opened: new Date().toLocaleString(),
    dueTimeDate: new Date().toLocaleString(),
    openedBy: "Will Demo",
  },
  {
    number: "RITM0034950",
    item: "Need something for AWS",
    state: "Complete",
    opened: new Date().toLocaleString(),
    dueTimeDate: new Date().toLocaleString(),
    openedBy: "Will Demo",
  },
  {
    number: "RITM0034950",
    item: "Need something for AWS",
    state: "Complete",
    opened: new Date().toLocaleString(),
    dueTimeDate: new Date().toLocaleString(),
    openedBy: "Will Demo",
  },
  {
    number: "RITM0034950",
    item: "Need something for AWS",
    state: "Complete",
    opened: new Date().toLocaleString(),
    dueTimeDate: new Date().toLocaleString(),
    openedBy: "Will Demo",
  },
];

const Dashboard = (props) => {
  const { dashboard } = props.customPageData;
  const [status, setStatus] = useState("Open");
  const [open, setOpen] = useState("my-open-requests");

  const [pageVal, setPage] = useState(1);
  const [statusVal, setStatusVal] = useState({
    status: status,
    page: 1,
    isInclude: true
  });
  const { data: posts, isLoading, isFetching } = useGetTicketsQuery(statusVal);

  useEffect(() => {
    setStatusVal({
      status: status,
      page: pageVal,
      isInclude: true
    });
  }, [status, pageVal])

  const handleOpen = (id) => {
    setOpen(id);
    if (id === 'my-open-request') setStatus("Open")
    else setStatus("Closed")
  }
  const renderIcon = (key) => {
    switch (key) {
      case "report":
        return <Helpdesk size="48" />;
      case "service":
        return <Document size="48" />;
      case "knowledge":
        return <Contract size="48" />;
    }
  };

  const renderInfoCard = () => {
    return (
      <>
        {dashboard &&
          dashboard.services &&
          dashboard.services.map((service) => {
            return (
              // <FlexGrid.Col xs={12} sm={6} md={4} lg={4}>
              <Card spacing="compact" variant="defaultOnlyBorder" fullHeight>
                <FlexGrid gutter={false}>
                  <FlexGrid.Row horizontalAlign="center">
                    <FlexGrid.Col md={4} xs={0}>
                      <Box inset={3} between={3}>
                        <Icon name={service.icon} className="" />
                      </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col md={8} xs={12} horizontalAlign="left">
                      <Box between={2}>
                        <Heading level="h4">{service.title}</Heading>

                        <Paragraph>{service.text}</Paragraph>

                        <div>
                          <ChevronLink
                            variant="primary"
                            href={"/service-request/catalogue/0"}
                          >
                            {service.linkText}
                          </ChevronLink>
                          {service.link2 && (
                            <ChevronLink
                              variant="primary"
                              href={service.link2}
                            >
                              {service.linkText2}
                            </ChevronLink>
                          )}
                        </div>
                      </Box>
                    </FlexGrid.Col>
                  </FlexGrid.Row>
                </FlexGrid>
              </Card>
              // </FlexGrid.Col>
            );
          })}
      </>
    );
  };

  const renderServiceCard = () => {
    return (
      <>
        <div>
          <Card variant="defaultOnlyBorder">
            <div className="heading-text">
              <span>
                <Icon
                  name="Icon-Support"
                  className="svg-black"
                  text={"Support"}
                  iconBold={true}
                  subtText="( last 24 hrs )"
                />
              </span>
              <span className="heading-icon-more">
                <Icon name="Icon-Options" className="svg-black" option />
              </span>
            </div>
            <div className="status-card">
              <div className="status-card-box">
                <Paragraph>New Cases</Paragraph>
                <Text bold size={"large"}>
                  {" "}
                  15
                </Text>
              </div>
              <div className="status-card-box">
                <Paragraph>Resolved Cases</Paragraph>
                <Text bold size={"large"}>
                  {" "}
                  8
                </Text>
              </div>
            </div>
            <Box vertical={3}>
              <div className="status-redirect-link">
                <span className="badge">5</span>
                <Link href="/coming-soon">
                  Requests that need immediate response
                </Link>
                <Icon name="Icon-Next" className="svg-green" />
              </div>
            </Box>
            <HairlineDivider />
            <div className="status-accessible-link">
              <FlexGrid gutter={false}>
                <FlexGrid.Row>
                  <FlexGrid.Col md={6} xs={12}>
                    <Box between={1} vertical={2}>
                      <Link href="/coming-soon">
                        <Icon
                          name="Icon-OpenNewIncidents"
                          className="svg-green"
                          text={"Open new incidents"}
                          iconSize={"small"}
                        />
                      </Link>
                    </Box>
                  </FlexGrid.Col>
                  <FlexGrid.Col md={6} xs={12}>
                    <Box between={1} vertical={2}>
                      <Link href="/coming-soon">
                        <Icon
                          name="Icon-ManageIncidents"
                          className="svg-green"
                          text={"Manage Incidents"}
                          iconSize={"medium"}
                        />
                      </Link>
                    </Box>
                  </FlexGrid.Col>

                  <FlexGrid.Col md={6} xs={12}>
                    <Box between={1} vertical={2}>
                      <Link href="/coming-soon">
                        <Icon
                          name="Icon-FAQs"
                          className="svg-green"
                          text={"FAQs"}
                          iconSize={"medium"}
                        />
                      </Link>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </div>
            <HairlineDivider />
            <div className="status-contact-box">
              <Box inline between={3}>
                <Box between={1}>
                  <Heading level="h5">Billing Support</Heading>
                  <Paragraph size="small">All region except Quebec</Paragraph>
                  <Text size="bold">1-866-512-8744</Text>
                  <Paragraph size="small">Quebec</Paragraph>
                  <Text size="bold">1-877-520-1212</Text>
                  <Paragraph size="small">
                    8am - 5pm local time, Monday - Friday
                  </Paragraph>
                </Box>
                <HairlineDivider vertical />
                <Box inline between={1}>
                  <Box between={1}>
                    <Heading level="h5">Technical Support</Heading>
                    <Text size="bold">1-877-710-0404</Text>
                    <Paragraph size="small">
                      Technical support available 24/7
                    </Paragraph>
                  </Box>
                </Box>
              </Box>
            </div>
          </Card>
        </div>

        {/*  <FlexGrid.Col xs={12} md={4} lg={4} sm={6}>
          <Card variant="defaultOnlyBorder">
            <div className="heading-text">
              <span>
                <Icon
                  name="Icon-TELUSServiceRequestCatalogue"
                  className="svg-black"
                  text={"TELUS Service Request Catalogue"}
                  iconBold={true}
                />
              </span>
              <span className="heading-icon-more">
                <Icon name="Icon-Options" className="svg-black" />
              </span>
            </div>
            <div className="status-card">
              <div className="status-card-box">
                <Paragraph>Open Request</Paragraph>
                <Text bold size={"large"}>
                  {" "}
                  15
                </Text>
              </div>
              <div className="status-card-box">
                <Paragraph>Closed Request</Paragraph>
                <Text bold size={"large"}>
                  {" "}
                  8
                </Text>
              </div>
              <div className="status-card-box">
                <Paragraph>Draft Request</Paragraph>
                <Text bold size={"large"}>
                  {" "}
                  8
                </Text>
              </div>
            </div>
            <Box vertical={3}>
              <div className="status-redirect-link">
                <span className="badge badge-black">2</span>
                <Link href="/coming-soon">Items pending in your cart</Link>
                <Icon name="Icon-Next" className="svg-green" />
              </div>
            </Box>
            <HairlineDivider />
            <Box vertical={2}>
              <Paragraph>
                You have access to more than one Service request system. Choose
                one to direct access.
              </Paragraph>
            </Box>
            <div className="serice-request-link">
              <Box between={1}>
                <Paragraph size="medium">
                  <Link href="/coming-soon">Telus</Link>
                </Paragraph>
 
                <Paragraph size="small">
                  <Link href="/coming-soon">CCL Service Assurance Support</Link>
                </Paragraph>
                <Paragraph size="small">
                  <Link href="/coming-soon">
                    Procurement and Supply Chain (CSS)
                  </Link>
                </Paragraph>
              </Box>
            </div>
            <HairlineDivider />
 
            <div className="status-accessible-link">
              <FlexGrid gutter={false}>
                <FlexGrid.Row>
                  <FlexGrid.Col md={6} xs={12}>
                    <Box between={3} vertical={2}>
                      <Link href="/coming-soon">
                        <Icon
                          name="Icon-CatalogueHelp"
                          className="svg-green"
                          text={"Catalogue help"}
                          iconSize={"medium"}
                        />
                      </Link>
                    </Box>
                  </FlexGrid.Col>
 
                  <FlexGrid.Col md={6} xs={12}>
                    <Box between={3} vertical={2}>
                      <Link href="/coming-soon">
                        <Icon
                          name="Icon-MakeARequest"
                          className="svg-green"
                          text={"Make a request"}
                          iconSize={"medium"}
                        />
                      </Link>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </div>
          </Card>
        </FlexGrid.Col>
        */}
        <div>
          <Card variant="defaultOnlyBorder">
            <div className="heading-text">
              <span>
                <Icon
                  name="Icon-RecommendedForYou"
                  className="svg-black"
                  text="Recommended for you"
                  iconBold={true}
                />
              </span>

              <span className="heading-icon-more">
                <Icon name="Icon-Options" className="svg-black" />
              </span>
            </div>

            <div className="serice-request-link">
              <Box between={2}>
                <Paragraph size="medium">
                  <Link href="/coming-soon">
                    Explore TELUS Services Management
                  </Link>
                </Paragraph>

                <Paragraph size="small">
                  <Link href="/coming-soon">AWS Documentation</Link>
                </Paragraph>
                <Paragraph size="small">
                  <Link href="/coming-soon">GCP Documentation</Link>
                </Paragraph>
                <Paragraph size="small">
                  <Link href="/coming-soon">Azure Documentation</Link>
                </Paragraph>

                <Paragraph size="small">
                  <Link href="/coming-soon">
                    Getting started with Data Protection
                  </Link>
                </Paragraph>
                <Paragraph size="small">
                  <Link href="/coming-soon">VCP - Hosted Cloud Dashboard</Link>
                </Paragraph>
                <Paragraph size="small">
                  <Link href="/coming-soon">
                    VCP - Copying, moving and deleting VMs
                  </Link>
                </Paragraph>
                <Paragraph size="small">
                  <Link href="/coming-soon">
                    Using Certificates with Load Balancing
                  </Link>
                </Paragraph>
              </Box>
            </div>
            <HairlineDivider />
            <Box vertical={2}>
              <Paragraph>Popular serives tagged in articles</Paragraph>
              <div className="services-tag-contianer">
                <span className="services-tags">Mainframe</span>
                <span className="services-tags">Data Collection</span>
                <span className="services-tags">Serive Desk</span>
                <span className="services-tags">Fraud Management</span>
              </div>
            </Box>
            <HairlineDivider />
            <Box between={1} vertical={1}>
              <div className="status-redirect-link">
                <Link href="/coming-soon">
                  <span className=" cl-green">
                    View all knowledge base articles
                  </span>
                </Link>
                <Icon name="Icon-Next" className="svg-green" />
              </div>
            </Box>
          </Card>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="dashboard-tab-container">
        <ThreeGridLayout>
          {renderInfoCard()}
        </ThreeGridLayout>
        <div className="service-container">{renderServiceCard()}</div>

        <div className="service-table-container">
          <Box vertical={4}>
            <Heading level="h1" tag="h1">
              Active Requests
            </Heading>
            <Tabs copy="en" open={open} onOpen={handleOpen}>
              <Tabs.Panel
                id="my-open-requests"
                heading="Open Requests"
              />
              <Tabs.Panel
                id="my-closed-requests"
                heading="Resolved Requests"
              />
              <Tabs.Panel
                id="all-open-requests"
                heading="All Open Requests"
              />
              <Tabs.Panel
                id="all-closed-requests"
                heading="All Closed Requests"
              />
            </Tabs>
            {open === "my-open-requests" && (
              <CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
            )}
            {open === "my-closed-requests" && (
              <CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
            )}
            {open === "all-open-requests" && (
              <CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
            )}
            {open === "all-closed-requests" && (
              <CustomTable posts={posts} isLoading={isLoading} head={head} data={[]} pagination />
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

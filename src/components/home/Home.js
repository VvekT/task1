import React, { useState } from "react";
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

import "./home.scss";
import Icon from "../../common/icons/Icon";
import ResponsiveWithResize from "../../utils/responsiveWithResize";

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

const FlexGridResponsive = ({ children }) => {
  return (
    <>
      <ResponsiveWithResize
        minWidth="md"
        render={() => {
          return <FlexGrid>{children}</FlexGrid>;
        }}
      />
      <ResponsiveWithResize
        maxWidth="md"
        render={() => {
          return <FlexGrid outsideGutter={false}>{children}</FlexGrid>;
        }}
      />
    </>
  );
};

const Dashboard = ({ customPageData }) => {
  const {
    dashboard,
    Home: { digitalItServices, digitalCXM },
  } = customPageData;
  const [open, setOpen] = useState("my-open-request");

  const handleOpen = (id) => {
    setOpen(id);
  };

  const renderStatusCard = (services) => {
    return (
      <>
        {services &&
          services.services.map((service) => {
            return (
              <div className="status-card-box">
                <div className="status-icon-text-wrapper">
                  <span className="icon-box">
                    <Icon name={service.icon} className="svg-black" />
                  </span>
                  <p>{service.title}</p>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  const renderServiceCard = () => {
    return (
      // <FlexGridResponsive>
      <FlexGrid.Row>
        <FlexGrid.Col xs={12} md={12} lg={4} sm={12}>
          <div className="CardmediumSmallSpace">
            <Card variant="defaultOnlyBorder">
              <div className="heading-text">
                <span>
                  <Icon
                    name="Icon-Support"
                    className="svg-black"
                    text={"Support"}
                    iconBold={true}
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
                            iconSize={"medium"}
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
                    <Paragraph size={"small"}>
                      All region except Quebec
                    </Paragraph>
                    <Text size={"small"}>1-866-512-8744</Text>
                    <Paragraph size={"small"}>Quebec</Paragraph>
                    <Text size={"small"}>1-877-520-1212</Text>
                    <Paragraph size={"small"}>
                      8am - 5pm local time, Monday - Friday
                    </Paragraph>
                  </Box>
                  <HairlineDivider vertical />
                  <Box inline between={1}>
                    <Box between={1}>
                      <Heading level="h5">Technical Support</Heading>
                      <Text size={"small"}>1-877-710-0404</Text>
                      <Paragraph size={"small"}>
                        Technical support available 24/7
                      </Paragraph>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Card>
          </div>
        </FlexGrid.Col>

        <FlexGrid.Col xs={12} md={12} lg={4.5} sm={12}>
          <div className="CardmediumSmallSpace">
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
                  You have access to more than one Service request system.
                  Choose one to direct access.
                </Paragraph>
              </Box>
              <div className="serice-request-link">
                <Box between={1}>
                  <Paragraph size="medium">
                    <Link href="/coming-soon">Telus</Link>
                  </Paragraph>

                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      CCL Service Assurance Support
                    </Link>
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
          </div>
        </FlexGrid.Col>

        <FlexGrid.Col xs={12} md={12} lg={3.5} sm={12}>
          <div className="CardmediumSmallSpace">
            <Card variant="defaultOnlyBorder">
              <div className="heading-text">
                <span>
                  <Icon
                    name="Icon-Quicklinks"
                    className="svg-black"
                    text="Quick Links"
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
                      GCP Portal
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>

                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      Azure Portal
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>

                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      AWS Portal
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>
                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      VCP Portal
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>

                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      Sales Training
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>
                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      Brochures
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>
                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      Case Studies & Demos
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>
                  <Paragraph size="small">
                    <Link href="/coming-soon">
                      Handbook / Information Sheet
                      <Icon name="Icon-Union8" className="svg-green" />
                    </Link>
                  </Paragraph>
                </Box>
              </div>
            </Card>
          </div>
          <div style={{ margin: "25px 0px" }}>
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
                    <Link href="/coming-soon">
                      VCP - Hosted Cloud Dashboard
                    </Link>
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
        </FlexGrid.Col>
      </FlexGrid.Row>
      // </FlexGridResponsive>
    );
  };

  return (
    // <Box vertical={{ xs: 2, md: 1 }} horizontal={{ xs: 2, md: 0 }}>
    <div className="dashboard-tab-container">
      <FlexGrid limitWidth={false}>
        <div className="service-container">{renderServiceCard()}</div>
      </FlexGrid>
      <div className="digital-service-container">
        <FlexGrid limitWidth={false}>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={11} lg={12} sm={12}>
              <Heading level={"h1"}>Digital IT Services</Heading>
              <div className="status-card">
                {renderStatusCard(digitalItServices)}
                <div className="status-card-box">
                  <div className="status-icon-text-wrapper">
                    <Paragraph>View all 16 products</Paragraph>
                    <span className="icon-box">
                      <Icon name="Icon-Next" className="svg-green" />
                    </span>
                  </div>
                </div>
              </div>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </div>
      <Box vertical={4} className="digital-cxm-container">
        <FlexGrid limitWidth={false}>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={8} lg={6} sm={12}>
              <Heading level={"h1"}>Digital CXM</Heading>
              <div className="status-card">{renderStatusCard(digitalCXM)}</div>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </Box>
    </div>
    // </Box>
  );
};

export default Dashboard;

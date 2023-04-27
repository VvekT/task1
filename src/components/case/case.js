import React from "react";
// import './style.css';
import Heading from "@tds/core-heading";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ChevronLink from "@tds/core-chevron-link";
import StepTracker from "@tds/core-step-tracker";
// import TextButton from "@tds/core-text-button";
import InputGroup from '@tds/community-input-group';
import CalloutParagraph from '@tds/community-callout-paragraph';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import FlexGrid from '@tds/core-flex-grid';
import Paragraph from '@tds/core-paragraph';

const Case = () => {
  return (
    <>
      <Breadcrumbs baseUrl="http://localhost:9000/">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/">My Cases</Breadcrumbs.Item>
      </Breadcrumbs>

      <ChevronLink href="#" direction="left">
        Back
      </ChevronLink>

      <Heading level="h2">Need something for AWS</Heading>
      <Text>Request Number: RITM004267</Text>
      
      <small>Estmated Completion</small>
      
      

       
        {/* initialState = {
      current}: `{'0'}`,   */}
{/* 
        <div>
          <StepTracker
          copy="en"
           current={state.current}
          steps={[
            "Request Created",
            "Request Approve",
            "Fulfillment",
            "Completed",
          ]}
        />
      </div>   */}
      initialState = {
  current} : 0,

;<div>
  <StepTracker
    copy="en"
    current={state.current}
    steps={['Plans & Addons', 'Account Creation', 'Phone Information', 'Payment Setup', 'Submit']}
  />
  <br />
  <Button
    variant="secondary"
    onClick={() => {
      setState({ current: state.current - 1 })
    }}
  >
    Previous Step
  </Button>
  <Button
    variant="secondary"
    onClick={() => {
      setState({ current: state.current + 1 })
    }}
  >
    Next Step
  </Button>
</div>

      {/* <TextButton
        onClick={() =>
          alert(
            "This is where you could launch a modal, make an api call to delete or update something, etc."
          )
        }
      >
        <A11yContent>testing</A11yContent>
        With A11y Content
      </TextButton> */}
      {/* <InputGroup label="Send"/> */}

      <div className="flex-container">
          <div className="flex-item-left">
                {/* <InputGroup label="Label" plceholder="Type your message here"/>
                 */}
                 <input type="text" placeholder="Type your message here" />
                 <button type="Submit">Send</button>
           </div>     

<FlexGrid className="flex-item-right">
  <FlexGrid.Row>
    <FlexGrid.Col xs={10} md={6}>
      <Card variant="defaultWithBorder">
        <Box between={3}>
          <Heading level="h3">Request placed on June 10, 2021</Heading>
          <Paragraph><b>Updated</b> 3days ago</Paragraph>
          <Paragraph><b>State</b>  Closed</Paragraph>
          <Paragraph><b>Priority</b> 4-Low </Paragraph>
          <CalloutParagraph roundedCorners>Attachments </CalloutParagraph>
          {/* <HairlineDivider /> */}
          {/* <Text size="medium">Good for basic browsing, and posting to social media.</Text> */}
          {/* <Button>Add to cart</Button> */}
          {/* <ChevronLink href="#">Learn more</ChevronLink> */}
          <CalloutParagraph roundedCorners>Request Summary </CalloutParagraph>

        </Box>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
</div>

    </>
  );
}

export default Case;

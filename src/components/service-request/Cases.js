import React, { useContext, useEffect, useState } from "react";
import Tracker from "./tracker";
import "./cases.scss";
import Heading from "@tds/core-heading";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ChevronLink from "@tds/core-chevron-link";
import Text from "@tds/core-text";
// import Small from "@tds/core-small";
import Button from "@tds/core-button";
import StepTracker from "@tds/core-step-tracker";
import Link from '@tds/core-link'
// import TextButton from "@tds/core-text-button";
import InputGroup from '@tds/community-input-group';
import CalloutParagraph from "@tds/community-callout-paragraph";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import Paragraph from "@tds/core-paragraph";
import Image from "@tds/core-image";
import IconAttachement from "../../../public/images/icon/Icon-Attachments.svg";
import * as yup from "yup";
import toaster from "../../utils/toaster";

// import Input from "@tds/core-input";
// import "node_modules/progress-tracker/src/styles/progress-tracker.scss";

import LogoAttachment from '../../../public/images/icon/Icon-Attachments.svg'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useGetTicketByIdQuery, useUpdateTicketMutation } from "../../store/ticketsPostSlice";
import { useGetUserQuery } from "../../store/profileSlice";
import { AttachmentContainer, IconOuterWrapper, IconWrapper, RequestSummaryContainer, SingleGridLayout, TextWrapper, RequestSummaryBox } from "../../utils";
import { CasesIncidentFormConfig } from "../../utils/casesFormData";
import { Field, Form, Formik } from "formik";
import FileInput from "../../utils/forms/file-input";
import TextInput from "../../utils/forms/text-input"
import Spinner from "@tds/core-spinner";
import EditFileInput from "../../utils/forms/Edit-fileInput";
import SkeletonProvider from "@tds/community-skeleton-provider";
import Divider from "@tds/core-hairline-divider";
import { colorTelusGreen } from '@tds/core-colours'
import { format } from 'date-fns';
import { LoaderContext } from "../context/LoadContextProvider";

const CasesFormData = (
  {
    setFieldValue,
    values,
    ticketDetails,
    ticketState,
    comment,
    sendMessage,
    isLoadingTicketById,
    setComment,
    submitForm
  }) => {
  console.log("ticketDetials", ticketDetails)
  const navigate = useNavigate();
  return (
    <Form autoComplete="off">
      <FlexGrid gutter={false} limitWidth={false}>
        {/* <FlexGrid> */}
        <div className="submit-cases">
          <Breadcrumbs baseUrl="http://localhost:9000/">
            <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="/">My Cases</Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
        <br />
        <ChevronLink direction="left" onClick={() => navigate("/service-request")}>
          Back
        </ChevronLink>
        <br />
        <Heading level="h2">{ticketDetails?.data?.shortDescription}</Heading>
        <small>Request Number: RITM{ticketDetails?.data?.id}</small>
        <br />
        <Text size="small">Estmated Completion</Text>
        <Box vertical={2}>
          <Text>{format(new Date(ticketDetails?.data?.estimatedCompletion), 'PPP')}</Text>
        </Box>
        <FlexGrid.Row>
          <FlexGrid.Col md={6} horizontalAlign="left">
            <Box>
              <StepTracker
                copy="en"
                current={ticketState}
                steps={[
                  "Request Created",
                  "Request Approved",
                  "Fulfillment",
                  "Completed",
                ]}
              />
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>

        <FlexGrid.Row>

          <FlexGrid.Col horizontalAlign="left" md={9}>
            <Box>
              <div className="msg">
                <Box style={{ width: "98%" }}>
                  <TextInput
                    type="text"
                    label=" "
                    disabled={false}
                    value={comment}
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    error=""
                  />
                </Box>
                {/* <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className="input-msg" placeholder="Type your message here" /> */}
                <Box className="send-button">
                  <Button disabled={!comment} onClick={sendMessage} className="button-msg">Send</Button>
                </Box>
              </div>

              <Box vertical={2}></Box>
              {isLoadingTicketById && (
                <Spinner
                  spinning
                  label={
                    <>
                      Loading{" "}
                      <Text size="small">
                        the chats are loading. Please wait.
                      </Text>
                    </>
                  }
                />
              )}
              {!isLoadingTicketById && (
                <Card variant="alternative">
                  <Tracker comments={ticketDetails?.data?.comments} />
                </Card>
              )}
            </Box>
          </FlexGrid.Col>
          <FlexGrid.Col horizontalAlign="right" md={3}>
            <Box style={{ position: "sticky", top: "120px" }}>
              <AttachmentContainer>
                <IconOuterWrapper>
                  <IconWrapper fillColor="#FFD700">
                    <Image
                      height={20}
                      width={20}
                      alt="Attachment icon"
                      src={IconAttachement}
                    />
                  </IconWrapper>
                  <TextWrapper inline additionalProps={{ paddingLeft: "10px" }}>
                    <Text>Attachment</Text>
                  </TextWrapper>
                </IconOuterWrapper>
                <Box style={{ padding: "0 20px 20px" }}>
                  {console.log(values, "vales")}
                  <Field
                    as={EditFileInput}
                    label="testimonials"
                    setFieldValue={(
                      field,
                      value,
                      shouldValidate
                    ) => {
                      setFieldValue(field, value);
                      // validateField(field);
                    }}
                    removetestimonials={values.removetestimonials}
                    value={values.testimonials}
                    name="testimonials"
                  // errors={touched["testimonials"] && errors["testimonials"]}
                  />
                </Box>
              </AttachmentContainer>
              <SingleGridLayout style={{ margin: "20px 0 0 30px" }}>
                <Button variant="primary" rank="main" onClick={() => submitForm()}>
                  Update
                </Button>
              </SingleGridLayout>
              <SingleGridLayout>
                <RequestSummaryContainer>
                  <Box>
                    <TextWrapper
                      additionalProps={{
                        paddingLeft: "16px"
                      }}>
                      <Text size="small" bold>Request placed on {format(new Date(ticketDetails?.data?.createdAt) , 'PP')}</Text>
                    </TextWrapper>
                  </Box>
                  <FlexGrid>
                    <FlexGrid.Row>
                      <FlexGrid.Col xs={6} md={4}>
                        <Box>
                          <Text size="small">Updated</Text>
                        </Box>
                      </FlexGrid.Col>
                      <FlexGrid.Col xs={6} md={8}>
                        <Box>
                          <Text size="small" bold>
                            {format(new Date(ticketDetails?.data?.modifiedAt) , 'PP')}
                          </Text>
                        </Box>
                      </FlexGrid.Col>
                    </FlexGrid.Row>
                    <FlexGrid.Row>
                      <FlexGrid.Col xs={6} md={4}>
                        <Box vertical={2}>
                          <Text size="small">State</Text>
                        </Box>
                      </FlexGrid.Col>
                      <FlexGrid.Col xs={6} md={8}>
                        <Box vertical={2}>
                          <Text size="small" bold>
                            {ticketDetails?.data?.status}
                          </Text>
                        </Box>
                      </FlexGrid.Col>
                    </FlexGrid.Row>
                    <FlexGrid.Row>
                      <FlexGrid.Col xs={6} md={4}>
                        <Box>
                          <Text size="small">Priority</Text>
                        </Box>
                      </FlexGrid.Col>
                      <FlexGrid.Col xs={6} md={8}>
                        <Box>
                          <Text size="small" bold>
                            {ticketDetails?.data?.priority}
                          </Text>
                        </Box>
                      </FlexGrid.Col>
                    </FlexGrid.Row>
                  </FlexGrid>

                  <Box vertical={2}>
                    <RequestSummaryBox between={4} inline>
                      <TextWrapper>
                        <Text size="small">Request summary</Text>
                      </TextWrapper>
                      <TextWrapper color={colorTelusGreen}>
                        <Text size="small">View More</Text>
                      </TextWrapper>
                    </RequestSummaryBox>
                  </Box>
                </RequestSummaryContainer>
              </SingleGridLayout>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
        {/* </FlexGrid> */}

      </FlexGrid>
    </Form>
  )
}


const Cases = () => {
  const { id } = useLocation().state;
  let [ticketId, setTicketId] = useState(0);
  let [comment, setComment] = useState('');
  let [skipById, setSkipById] = useState(false);
  const [ticketState, setTicketState] = useState(0);
  const { setLoading } = useContext(LoaderContext); 
  useEffect(() => {
    setSkipById(true);
  }, [id])

  const { data: user } = useGetUserQuery('getUser');
  const [updateTicket, { isLoading }] = useUpdateTicketMutation()
  const { data: ticketDetails, isLoading: isLoadingTicketById, error, refetch } = useGetTicketByIdQuery(id);

  useEffect(() => {
    setTicketState(ticketDetails?.ticketState ?? 0)
  }, [ticketDetails])

  const ticketFormValidationSchema = yup.object().shape({
  });

  const initValues = {
    testimonials: ticketDetails?.data?.testimonials ?? [],
    removetestimonials: []
  };

  const sendMessage = async () => {
    if (!comment) return
    let arrComment = []
    const commentDetail = {
      comment,
      commenter: `${user.firstName} ${user.lastName}`,
      date: new Date()
    }
    arrComment.push(commentDetail)
    const updatedata = {
      comments: JSON.stringify(arrComment),
      id: ticketDetails?.data.id,
    }

    try {
      await updateTicket(updatedata).unwrap()
      refetch();
    } catch (err) {
      console.error('Failed to save the post', err)
      return;
    }
    setComment('')
  }
  const handleSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    const formKeys = Object.keys(data)
    formKeys.forEach((keyVal) => {
      const value = data[keyVal];
      if (!value) return;
      if (Array.isArray(value) && keyVal === "testimonials") {
        value.forEach((item) => {
          if (item) {
            if (Object.getOwnPropertyNames(item).includes("file")) {
              formData.append(keyVal, item.file);
            }
          }
        });
      } else if (Array.isArray(value) && keyVal === "removetestimonials") {
        value.forEach((item) => {
          if (item) {
            formData.append(keyVal, item);
          }
        });
      } else if (!Array.isArray(value)) {
        formData.append(keyVal, value);
      }
    });
    formData.append("id",ticketDetails?.data.id)
    try {
      await updateTicket(formData, {}).unwrap()
      refetch()
      setLoading(false);
      toaster({
        title: "Ticket has been updated successfully",
        variant: "success",
        duration: 2000,
      })
    } catch (err) {
      setLoading(false);
      toaster({
        title: "Failed to save the post",
        variant: "error",
        duration: 2000,
      })
      console.error('Failed to save the post', err)
      return;
    }
  }
  if (isLoadingTicketById) {
    return (
      <SkeletonProvider show={isLoading}>
        <Text skeleton></Text>
        <Text skeleton></Text>
        <Box vertical={3}>
          <Divider />
        </Box>
        <Text skeleton></Text>
        <Text skeleton></Text>
      </SkeletonProvider>
    )
  }
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        enableReintialize
        initialValues={initValues}
        validationSchema={ticketFormValidationSchema}
      >
        {(props) => {
          return (
            <CasesFormData
              {...props}
              ticketDetails={ticketDetails}
              ticketState={ticketState}
              comment={comment}
              sendMessage={sendMessage}
              isLoadingTicketById={isLoadingTicketById}
              setComment={setComment}
            />
          )
        }}
      </Formik >
    </>
  );
};

export default Cases;
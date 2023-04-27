import React, { useState, useEffect } from "react";
import Heading from "@tds/core-heading";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ChevronLink from "@tds/core-chevron-link";
import Input from "@tds/core-input";
import Button from "@tds/core-button";
import Small from "@tds/core-small";
import Box from "@tds/core-box";
import HairlineDivider from "@tds/core-hairline-divider";
import Select from "@tds/core-select";
import FlexGrid from "@tds/core-flex-grid";
import InputGroup from "@tds/community-input-group";
import TextArea from "@tds/core-text-area";
import Link from "@tds/core-link";
import Text from "@tds/core-text";
import Paragraph from "@tds/core-paragraph";
import LogoUpload from "../../../public/images/icon/Icon-Upload.svg";
import styled from "styled-components";
import { media } from "@tds/core-responsive";
import {
  colorGreyShuttle,
  colorLavenderBlush,
  colorGreyRaven,
  colorCardinal,
  colorTelusGreen,
} from "@tds/core-colours";
import Notification from "@tds/core-notification";
import {
  AttachmentContainer,
  BackButton,
  handleScrollToTop,
  IconOuterWrapper,
  IconWrapper,
  MOCK_INITIAL_VALUES,
  SingleGridLayout,
  RequestSummaryContainer,
  RequestSummaryBox,
} from "../../utils";
import {
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikProps,
  FormikTouched,
  setNestedObjectValues,
} from "formik";
import * as yup from "yup";
import { CasesIncidentFormConfig } from "../../utils/casesFormData";
import IconAttachement from "../../../public/images/icon/Icon-Attachments.svg";

import "./cases.scss";
import { TextWrapper } from "../../utils";
import SelectInput from "../../utils/forms/select-input";
import RadioCard from "@tds/community-radio-card";
import Radio from "@tds/core-radio";
import TextAreaInput from "../../utils/forms/textarea-input";
import TextInput from "../../utils/forms/text-input";
import FileInput from "../../utils/forms/file-input";
import Image from "@tds/core-image";
import { useAddNewTicketMutation } from "../../store/ticketsPostSlice";
import { useGetUserQuery } from "../../store/profileSlice";
import AutoComplete from "../../utils/autocomplete/Autocomplete";
import EmailInput from "../../utils/forms/collaborator-input";
import { useContext } from "react";
import { LoaderContext } from "../context/LoadContextProvider";
import toaster from "../../utils/toaster";
import { useNavigate } from "react-router-dom";
import { LoaderNotifyContext } from "../context/LoadContextNotification";
import "./index.scss"

const TwoGridLayout = styled(Box)({
  display: "grid",
  marginTop: "25px",
  gridTemplateColumns: `repeat(2,1fr)`,
  gap: "1rem",
  alignItems: "flex-end",

  ...media.from("xs").until("lg").css({
    gridTemplateColumns: "auto",
  }),
});

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

const CustomNotification = styled(Box)`
  max-width: 100%;
  && > div {
    background-color: ${colorLavenderBlush};
  }
`;

const CommentArea = styled(Box)({
  position: "relative",
  "& textarea": {
    minHeight: "unset",
  },
  "&  div": {
    minHeight: "unset",
  },
});

const InfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  "& input": {
    minHeight: "unset",
    padding: "11px 0 11px 0",
  },
});

const IncidentFormValidationSchema = yup.object().shape({
  working: yup.string().oneOf(["Home", "Office"]).defined(),
  shortDescription: yup
    .string()
    .min(1, "Please enter at least 1 characters")
    .max(500, "Summary should not exceed 1500 characters")
    .required("Please enter a valid description"),
  // category: yup.string().required(""),
  // subCategory: yup.string().required(`Please select a valid subcategory`),
  // callbackNumber: yup
  //   .string()
  //   .min(10, "Please enter at least 10 characters")
  //   .max(10, "Number should not exceed 10 characters")
  //   .required("Please enter the callback number"),
  // affectedUser: yup.string().required("Please select affected user"),
  // otherCallbacknumber: yup
  // .string()
  // .min(10, "Please enter at least 10 characters")
  // .max(10, "Number should not exceed 10 characters")
  // .required("Please enter the callback number"),
  // program: yup.string().required(`Please select a valid program`),
  // siteLocation: yup.string().required(`Please select a valid location`),
  // descriptionOfIssue: yup
  //   .string()
  //   .min(10, "Please enter at least 10 characters")
  //   .max(1500, "Summary should not exceed 1500 characters")
  //   .required("Please enter a valid description"),
  // testimonials: yup
  //   .array()
  //   .of(yup.mixed())
  //   .max(3, "You can only attach upto 3 attacments"),
  // collaborators: yup.array().of(
  //   yup.object().shape({
  //     empID: yup.string().required(),
  //   })
  // )
});
const RequestSummaryData = {
  updated: "3 days ago",
  state: "Closed complete",
  priority: "4 - Low",
};
const IncidentFormInner = ({
  setFieldValue,
  touched,
  errors,
  values,
  validateField,
  submitForm,
  fullName,
}) => {
  useEffect(() => {});

  console.log("dfddfd", values);
  return (
    <Form autoComplete="off">
      <Box
        style={{ padding: "0 0 0 20px" }}
        vertical={{ xs: 2, md: 1 }}
        horizontal={{ xs: 2, md: 0 }}
      >
        <FlexGrid gutter={false} limitWidth={false} outsideGutter={false}>
          <FlexGrid.Row>
            <FlexGrid.Col xs={12} md={8} lg={9} horizontalAlign="left">
              {CasesIncidentFormConfig["working"].type === "select" && (
                <TwoGridLayout>
                  <Field
                    as={SelectInput}
                    value={values.working}
                    setFieldValue={setFieldValue}
                    label={CasesIncidentFormConfig["working"].label}
                    options={CasesIncidentFormConfig["working"].options}
                    name="working"
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                    errors={touched["working"] && errors["working"]}
                  />
                </TwoGridLayout>
              )}
              <Box vertical="2"></Box>
              {CasesIncidentFormConfig["priority"].type === "select" && (
                <>
                  <Box>
                    <legend>
                      <Text bold size="medium">
                        Priority
                      </Text>
                    </legend>
                  </Box>
                  <ThreeGridLayout>
                    {CasesIncidentFormConfig["priority"].options.map(
                      (option, id) => {
                        return (
                          <Radio
                            label={option.text}
                            key={id}
                            name={option.text}
                            value={option.value}
                            fullHeight={true}
                            checked={values.priority === option.value}
                            onChange={() => {
                              setFieldValue("priority", option.value);
                            }}
                            tooltip={
                              <div style={{ color: colorCardinal }}>*</div>
                            }
                          ></Radio>
                        );
                      }
                    )}
                  </ThreeGridLayout>
                </>
              )}

              <SingleGridLayout>
                <CommentArea>
                  <Field
                    as={TextAreaInput}
                    label={CasesIncidentFormConfig["shortdescription"].label}
                    name="shortDescription"
                    errors={
                      touched["shortDescription"] && errors["shortDescription"]
                    }
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                  />
                </CommentArea>
              </SingleGridLayout>

              {CasesIncidentFormConfig["category"].type === "select" && (
                <SingleGridLayout>
                  <Field
                    as={SelectInput}
                    value={values.category}
                    setFieldValue={setFieldValue}
                    label={CasesIncidentFormConfig["category"].label}
                    options={CasesIncidentFormConfig["category"].options}
                    name="category"
                    errors={touched["category"] && errors["category"]}
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                  />
                </SingleGridLayout>
              )}

              {CasesIncidentFormConfig["subcategory"].type === "select" && (
                <SingleGridLayout>
                  <Field
                    as={SelectInput}
                    setFieldValue={setFieldValue}
                    label={CasesIncidentFormConfig["subcategory"].label}
                    options={CasesIncidentFormConfig["subcategory"].options}
                    name="subCategory"
                    // errors={errors["subCategory"]}
                  />
                </SingleGridLayout>
              )}

              {CasesIncidentFormConfig["additionalsubcategory"].type ===
                "select" && (
                <SingleGridLayout>
                  <Field
                    as={SelectInput}
                    setFieldValue={setFieldValue}
                    label={
                      CasesIncidentFormConfig["additionalsubcategory"].label
                    }
                    options={
                      CasesIncidentFormConfig["additionalsubcategory"].options
                    }
                    name="additionalSubcategory"
                    // errors={errors["additionalsubcategory"]}
                  />
                </SingleGridLayout>
              )}
              {CasesIncidentFormConfig["contact"].type === "text" && (
                <TwoGridLayout>
                  <Field
                    as={TextInput}
                    label={CasesIncidentFormConfig?.["contact"]?.label}
                    disabled
                    value={fullName}
                    type="text"
                    name="contact"
                  />
                  <Field
                    as={TextInput}
                    label={CasesIncidentFormConfig?.["callbacknumber"]?.label}
                    onChange={(e) => {
                      setFieldValue("callbackNumber", e.target.value);
                    }}
                    // errors={
                    //   touched["callbacknumber"] && errors["callbacknumber"]
                    // }
                    name="callbackNumber"
                    setFieldValue={setFieldValue}
                    type="number"
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                  />
                </TwoGridLayout>
              )}

              {CasesIncidentFormConfig["affecteduser"].type === "select" && (
                <TwoGridLayout>
                  <AutoComplete
                    defaultValue={fullName ? fullName : undefined}
                    // disabled={Boolean(nomineeId)}
                    // clearValue={clearValue}
                    // isTeam={isTeam}
                    // setNomineeVerify={setNomineeVerify}
                    onClear={() => {
                      setFieldValue("affectedUser", "");
                      // setNomineeValue("");
                      // setNomineeVerify("");
                    }}
                    onSelect={(value) => {
                      setFieldValue("affectedUser", value.id);
                    }}
                    name="affectedUser"
                    label={CasesIncidentFormConfig["affecteduser"].label}
                    // errors={touched["contact"] && errors["contact"]}
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                  ></AutoComplete>
                  <Field
                    as={TextInput}
                    label={
                      CasesIncidentFormConfig?.["workstationnumber"]?.label
                    }
                    type="text"
                    onChange={(e) => {
                      setFieldValue("workstationNumber", e.target.value);
                    }}
                    // errors={
                    //   touched["workstationnumber"] && errors["workstationnumber"]
                    // }
                    name="workstationNumber"
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                  />
                </TwoGridLayout>
              )}

              {CasesIncidentFormConfig["otheruser"].type === "select" && (
                <TwoGridLayout>
                  <Field
                    as={TextInput}
                    label={CasesIncidentFormConfig?.["otheruser"]?.label}
                    onChange={(e) => {
                      setFieldValue("otherUser", e.target.value);
                    }}
                    // errors={
                    //   touched["otheruser"] && errors["otheruser"]
                    // }
                    name="otherUser"
                    setFieldValue={setFieldValue}
                    type="text"
                  />
                  <Field
                    as={TextInput}
                    label={
                      CasesIncidentFormConfig?.["otherusercallbacknumber"]
                        ?.label
                    }
                    onChange={(e) => {
                      setFieldValue("otherCallbacknumber", e.target.value);
                    }}
                    // errors={
                    //   touched["otherusercallbacknumber"] && errors["otherusercallbacknumber"]
                    // }
                    name="otherCallbacknumber"
                    setFieldValue={setFieldValue}
                    type="number"
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                  />
                </TwoGridLayout>
              )}

              {CasesIncidentFormConfig["program"].type === "select" && (
                <TwoGridLayout>
                  <Field
                    as={SelectInput}
                    setFieldValue={setFieldValue}
                    label={CasesIncidentFormConfig["program"].label}
                    options={CasesIncidentFormConfig["program"].options}
                    name="program"
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                    // errors={errors["program"]}
                  />
                  <InfoContainer>
                    <Field
                      as={SelectInput}
                      setFieldValue={setFieldValue}
                      label={CasesIncidentFormConfig["sitelocation"].label}
                      options={CasesIncidentFormConfig["sitelocation"].options}
                      name="siteLocation"
                      errors={errors["sitelocation"]}
                      tooltip={<div style={{ color: colorCardinal }}>*</div>}
                    />
                  </InfoContainer>
                </TwoGridLayout>
              )}

              {CasesIncidentFormConfig["assignto"].type === "select" && (
                <TwoGridLayout>
                  <Field
                    as={SelectInput}
                    setFieldValue={setFieldValue}
                    label={CasesIncidentFormConfig["assignto"].label}
                    options={CasesIncidentFormConfig["assignto"].options}
                    name="assignTo"
                    tooltip={<div style={{ color: colorCardinal }}>*</div>}
                    // errors={errors["program"]}
                  />
                </TwoGridLayout>
              )}

              <SingleGridLayout>
                <CommentArea>
                  <Box>
                    <Field
                      as={TextAreaInput}
                      label={
                        CasesIncidentFormConfig["descriptionofissue"].label
                      }
                      name="descriptionOfIssue"
                      tooltip={<div style={{ color: colorCardinal }}>*</div>}
                      // errors={
                      //   touched["descriptionofissue"] &&
                      //   errors["descriptionofissue"]
                      // }
                    />
                  </Box>
                </CommentArea>
              </SingleGridLayout>
              <SingleGridLayout>
                {CasesIncidentFormConfig["watchlist"]?.type === "email" && (
                  <Field
                    as={EmailInput}
                    nominees={10091599}
                    // isTeam={isTeam || isLuminary}
                    label={CasesIncidentFormConfig["watchlist"].label}
                    subtitle={CasesIncidentFormConfig["watchlist"].subtitle}
                    setFieldValue={setFieldValue}
                    onValidateField={() => validateField("watchLists")}
                    // setFieldError={setFieldError}
                    // setFieldValue={setFieldValue}
                    //   options={NominationFieldsConfig["achievmentScale"].options}
                    name="watchLists"
                    // errors={errors["watchlist"]}
                  />
                )}
              </SingleGridLayout>
            </FlexGrid.Col>
            <FlexGrid.Col
              // xsOffset={1}
              xs={12}
              md={4}
              lg={3}
              horizontalAlign="left"
            >
              <Box
                style={{
                  position: "sticky",
                  top: "120px",
                  marginRight: "15px",
                }}
              >
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
                    <TextWrapper
                      inline
                      additionalProps={{ paddingLeft: "10px" }}
                    >
                      <Text>Attachment</Text>
                    </TextWrapper>
                  </IconOuterWrapper>
                  <Box style={{ padding: "0 20px 20px" }}>
                    {CasesIncidentFormConfig["testimonials"]?.type ===
                      "file" && (
                      <Field
                        as={FileInput}
                        label={CasesIncidentFormConfig["testimonials"].label}
                        setFieldValue={(field, value, shouldValidate) => {
                          setFieldValue(field, value);
                          validateField(field);
                        }}
                        name="testimonials"
                      />
                    )}
                  </Box>
                </AttachmentContainer>

                <SingleGridLayout style={{ margin: "20px 0 0 30px" }}>
                  <Button
                    variant="primary"
                    rank="main"
                    onClick={() => submitForm()}
                  >
                    Submit
                  </Button>
                </SingleGridLayout>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </Box>
    </Form>
  );
};

const Scase = () => {
  const { loading, setLoading } = useContext(LoaderContext);
  const { setrefetchNotifyLoading } = useContext(LoaderNotifyContext);
  const navigate = useNavigate();
  const { data: user } = useGetUserQuery("getUser");
  const fullName = (user?.firstName ?? "") + " " + (user?.lastName ?? "");
  const [addNewPost, { isLoading }] = useAddNewTicketMutation();

  const initialValues = {
    ...MOCK_INITIAL_VALUES,
    contact: user?.employeeID ?? "",
    working: "Office",
  };
  const handleSubmit = async (data) => {
    setLoading(true);
    handleScrollToTop();
    const formData = new FormData();
    const formKeys = Object.keys(data);
    try {
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
        } else if (keyVal === "watchLists" && value.length !== 0) {
          formData.append(keyVal, JSON.stringify(value));
        } else if (!Array.isArray(value)) {
          formData.append(keyVal, value);
        }
      });
      for (var key of formData.entries()) {
        console.log("entry", key[0] + ", " + key[1]);
      }
      await addNewPost(formData, {}).unwrap();
      setLoading(false);
      toaster({
        title: "Ticket has been created successfully",
        variant: "success",
        duration: 3000,
      });
        navigate('/service-request');
      setrefetchNotifyLoading();
      // setTimeout(() => {
      navigate("/service-request");
      // }, 3000);
    } catch (err) {
      console.error("Failed to save the post", err);
      setLoading(false);
      toaster({
        title: "Please Enter and Select all fields",
        variant: "error",
        duration: 3000,
      });
      return;
    }
  };

  return (
    <>
      <FlexGrid limitWidth={false}>
        <Box className="submit-cases">
          <Breadcrumbs baseUrl="http://localhost:9000/">
            <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="/">Service Catalogue</Breadcrumbs.Item>
            <Breadcrumbs.Item href="/">Submit New Cases </Breadcrumbs.Item>
          </Breadcrumbs>
        </Box>
        <Box vertical={3} onClick={() => history.back(-1)}>
          <ChevronLink direction="left" variant="primary">
            Back
          </ChevronLink>
        </Box>
        <Box>
          <TextWrapper
            additionalProps={{
              letterSpacing: "0.3px",
              padding: 0,
              margin: 0,
            }}
          >
            <Heading level="h1">Submit Incident</Heading>
          </TextWrapper>
          <TextWrapper color={colorGreyShuttle}>
            <Text size="small" style={{ display: "block" }}>
              How can we help you resolve an issue?
            </Text>
          </TextWrapper>
        </Box>

        <Box between={4}>
          <Box>
            <SingleGridLayout>
              <CustomNotification>
                <Notification copy="en">
                  <TextWrapper
                    additionalProps={{
                      fontWeight: 400,
                    }}
                  >
                    <Text size="small">
                      Please Note: Tickets opened electronically are
                      automatically assinged a low serverity.
                      <br />
                      You should report high incidents by phone to ensure
                      immediate attention. To report an incident affecting more
                      than one user please call the Serivce Desk: 138-0911
                      +866-201-4571 <br />
                      Also note: The "IS Applications" Category is intented to
                      be used for those for those applications that were
                      formerly submitted using the IS HelpDesk tool. A list of
                      these applications will appear within the subcategory
                      field.
                      <br />
                      Do not include confidential information in the description
                      of the incident. like passwords, client personal data,
                      credit card numbers, etc. If that information is neede,
                      you will be able to provide it directly to the personal
                      who manages the incident.
                    </Text>
                  </TextWrapper>
                </Notification>
              </CustomNotification>
            </SingleGridLayout>
          </Box>
          <HairlineDivider />
        </Box>

        <Small horizontalAlign="left">
          <Box vertical={3} className="text-red">
            *Fields with asterisks are mandatory
          </Box>
        </Small>
        <Formik
          validationSchema={IncidentFormValidationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReintialize
        >
          {(props) => {
            return <IncidentFormInner fullName={fullName} {...props} />;
          }}
        </Formik>
      </FlexGrid>
    </>
  );
};

export default Scase;

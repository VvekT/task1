import React, { useEffect, useRef, useState } from "react";
import Box from "@tds/core-box";
import styled from "styled-components";
import Text from "@tds/core-text";
import Image from "@tds/core-image";
import Button from "@tds/core-button";
import { Add, Close } from "@tds/core-interactive-icon";
import documentIcon from "../../components/images/icon-document.svg";

import Notification from "@tds/core-notification";

import {
  colorGreyGainsboro,
  colorGreyRaven,
  colorGreyShark,
  colorLavenderBlush,
  colorWhite,
  colorTelusGreen,
  colorAthensGrey
} from "@tds/core-colours";
import toaster from "../toaster";
import { docAndImageFilter, IconButtonWrapper, TextWrapper } from "..";
import IconAttachement from '../../../public/images/icon/Icon-Attachments.svg'
import AttachmentComp from "./attachment-comp";

const FileBox = styled(Box)`
  max-width: 75rem;
  background: ${(props) =>
    props.incomingDrop ? colorLavenderBlush : colorWhite};
  height: 200px;
  //   padding: 16px;
  border: dashed 1px ${colorGreyShark};
  border-radius: 4px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const AttachFileBox = styled(Box)`
  align-items: center;
`;
const AttachButtonBox = styled(Box)`
  position: relative;
`;
export const FileInputElement = styled.input`
  display: none;
  pointer-events: none;
`;
const ImagePreviewBox = styled(Box)`
  display: inline-flex;
  // border: solid 1px ${colorGreyGainsboro};
`;
const ImageContainerBox = styled(Box)`
  align-items: center;
  background-color: ${colorAthensGrey}
`;
export const CustomImage = styled(Box)`
  display: flex;
  border-radius: 8px;
  && > img {
    height: ${(props) => props.height ?? "100px"};
    width: ${(props) => props.width ?? "100px"};
  }
`;
const FileDetailsBox = styled(Box)`
  align-items: center;
  color: ${colorTelusGreen}
`;
const PreviewFilesBox = styled(Box)`
  flex-wrap: wrap;
  row-gap: 1rem;
  width: auto;
  max-width: inherit;
  margin-top: ${(props) => props.margintop ?? 0};
`;
const EditFileInput = ({
  name,
  value,
  setFieldValue,
  errors,
  removetestimonials
}) => {
  const [previewFiles, setPreviewFiles] = useState([]);
  const [incomingDrop, setIncomingDrop] = useState(false);
  const fileRef = useRef(null);
  const handleAttachFiles = () => {
    if (fileRef.current) {
      fileRef.current.value = "";
      fileRef.current?.click();
    }
  };
  // const handleRemoveFile = (index) => {
  //   setFieldValue(name, [
  //     ...previewFiles.slice(0, index),
  //     ...previewFiles.slice(index + 1),
  //   ]);
  //   // setPreviewFiles([]);
  // };
  // const handleError = (e) => {
  //   const target = e.target;
  //   target.src = documentIcon;
  //   target.style.padding = "16px";
  // };

  const handleFiles = (files) => {
    if (
      [...files]
        .map((file) => file.size)
        .reduce((acc, curr) => acc + curr) >
      1024 * 1024 * 10
    ) {
      return alert("Maximum attachment size is 10MB");
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!docAndImageFilter(file)) {
        alert(`${file.name} file type is not supported`);
        continue;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue("testimonials", [
          ...value,
          { data: reader.result, name: file.name, file: file },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const onFileChange = (event) => {

    handleFiles(event.target.files);
  };

  const handleDrop = (e) => {
    // console.log("Handle drop");
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
    setIncomingDrop(false);
  };

  useEffect(() => {
    setPreviewFiles(value ?? []);
  }, [value]);

  console.log(value, "valuess")

  return (
    <>
      <AttachmentComp
        attachments={value}
        onDelete={(index) => {
          setFieldValue("testimonials", [
            ...value.slice(0, index),
            ...value.slice(index + 1),
          ]);
          const valueRemoveId = value[index].id;
          setFieldValue("removetestimonials", [
            valueRemoveId.toString(),
            ...(removetestimonials),
          ]);
        }}
      />
      <FileBox
        incomingDrop={incomingDrop}
        onDrop={handleDrop}
        onDragEnter={(event) => {
          event.preventDefault();
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIncomingDrop(true);
        }}
        onDragLeave={() => {
          setIncomingDrop(false);
        }}
        // onClick={() => console.log("text")}
        between={2}
      >
        <IconButtonWrapper
          iconProps={{ fill: colorGreyRaven }}
          additionalProps={{ transform: "scale(1.5)" }}
        >
          <Add />
        </IconButtonWrapper>
        <TextWrapper color={colorGreyRaven}>
          <Text bold>Drag and Drop file here</Text>
        </TextWrapper>
        <TextWrapper color={colorGreyRaven}>
          {/* <Text size="small">
            (doc/pdf/jpg/png/jpeg/docx files only upto 10MB)
          </Text> */}
        </TextWrapper>
        <AttachFileBox inline between={2}>
          <Text>Or</Text>
          <AttachButtonBox>
            <Button onClick={handleAttachFiles} variant="standard">
              Attach File
            </Button>
          </AttachButtonBox>
        </AttachFileBox>
        <FileInputElement
          autoFocus={false}
          onChange={onFileChange}
          multiple
          ref={fileRef}
          type="file"
          accept="application/msword,application/vnd.ms-excel,application/pdf,image/*,	application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </FileBox>

      {errors && (
        <Box vertical={2}>
          <Notification variant="error">{errors}</Notification>
        </Box>
      )}
    </>
  );
};
export default EditFileInput;

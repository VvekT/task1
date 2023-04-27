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
const FileInput = ({
  name,
  value,
  setFieldValue,
  errors,
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
  const handleRemoveFile = (index) => {
    setFieldValue(name, [
      ...previewFiles.slice(0, index),
      ...previewFiles.slice(index + 1),
    ]);
    // setPreviewFiles([]);
  };
  const handleError = (e) => {
    const target = e.target;
    target.src = documentIcon;
    target.style.padding = "16px";
  };

  const handleFiles = (files) => {
    if (previewFiles.length >= 3) {
      return toaster({
        title: "You can only attach upto 3 attachments",
        variant: "error",
        duration: 3000,
      });
    }
    if (
      [...files].map((file) => file.size).reduce((acc, curr) => acc + curr) >
      1024 * 1024 * 10
    ) {
      return toaster({
        title: "Maximum attachment size is 10MB",
        variant: "error",
        duration: 3000,
      });
    }
    if (
      previewFiles
        ?.map((file) => file.file.size)
        .reduce((acc, curr) => acc + curr, 0) >
      1024 * 1024 * 10
    ) {
      return toaster({
        title: "Maximum attachment size is 10MB",
        variant: "error",
        duration: 3000,
      });
    }
    const fileArray = [...previewFiles];
    for (let i = 0; i < files.length; i++) {
      if (files.length > 3) {
        return toaster({
          title: "You can only attach upto 3 attachments",
          variant: "error",
          duration: 3000,
        });
      }
      const file = files[i];
      if (!docAndImageFilter(file)) {
        alert(`${file.name} file type is not supported`);
        continue;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        // console.log({ r: reader.result });
        fileArray.push({ data: reader.result, name: file.name, file: file });
        setFieldValue(name, fileArray);
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

  return (
    <>
      <PreviewFilesBox margintop="45px" inline between={4} vertical={3}>
        {previewFiles.map((previewFile, index) => {
          return (
            <Box key={`ImagePreviewForFile-${index}`}>
              {previewFile && (
                <ImageContainerBox inline between={2}>
                  <ImagePreviewBox>
                    <CustomImage
                      height="13px"
                      width="13px">
                      <Image
                        //   style={{ height: 100, width: 100 }}
                        height={9}
                        width={9}
                        // rounded="corners"
                        src={IconAttachement}
                        alt={`attachment ${index}`}
                        onError={handleError}
                      />
                    </CustomImage>
                  </ImagePreviewBox>
                  <FileDetailsBox inline between={2}>
                    <TextWrapper additionalProps={{ color: colorTelusGreen, fontSize: "12px" }}>
                      <Text size="small">{previewFile.name}</Text>
                    </TextWrapper>
                    <IconButtonWrapper
                      additionalProps={{
                        cursor: "pointer",
                        marginTop: 8,
                        fontSize: "12px"
                      }}
                    >
                      <Close
                        color="telusPurple"
                        onClick={() => handleRemoveFile(index)}
                      />
                    </IconButtonWrapper>
                  </FileDetailsBox>
                </ImageContainerBox>
              )}
            </Box>
          );
        })}
      </PreviewFilesBox>
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
export default FileInput;

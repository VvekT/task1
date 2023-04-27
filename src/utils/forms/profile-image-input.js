import React, { useEffect, useRef, useState } from "react";
import Button from "@tds/core-button";
import { FileInputElement } from "./file-input";
import { IconButton, Close } from "@tds/core-interactive-icon";
import { media } from "@tds/core-responsive";
import styled from "styled-components";
import Box from "@tds/core-box";

const CloseWrapper = styled(Box)`
  right: 58px;
  top: 114px;
  left: 40px;
  ${media.from("xs").until("md").css({
    right: "8px",
    top: "90px",
  })};
`;
const ProfileImageInput = ({
  name,
  value,
  setFieldValue,
}) => {
  const [previewFile, setPreviewFile] = useState<any>();
  const fileRef = useRef<HTMLInputElement>(null);
  const handleAttachFile = () => {
    if (fileRef.current) {
      fileRef.current.value = "";
      fileRef.current?.click();
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // console.log({ r: reader.result });
      setFieldValue(name, { data: reader.result, name: file.name, file: file });
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (event) => {
    handleFile(event.target.files[0]);
  };

  useEffect(() => {
    setPreviewFile(value);
  }, [value]);
  return (
    <>
      <Button onClick={handleAttachFile} variant="brand">
        Change Profile Image
      </Button>
      <FileInputElement
        autoFocus={false}
        onChange={onFileChange}
        ref={fileRef}
        type="file"
      />
    </>
  );
};
export default ProfileImageInput;

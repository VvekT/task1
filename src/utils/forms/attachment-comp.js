import React from "react";
import Image from "@tds/core-image";
import Text from "@tds/core-text";
import Box from "@tds/core-box";
import IconAttachement from '../../../public/images/icon/Icon-Attachments.svg'
import IconDownload from '../../../public/images/icon/Icon-Download.svg'

import { Close } from "@tds/core-interactive-icon";

// import { getAbsoluteURL } from "../../utils";
import {
    colorGreyGainsboro,
    colorGreyRaven,
    colorGreyShark,
    colorLavenderBlush,
    colorWhite,
    colorTelusGreen,
    colorAthensGrey
} from "@tds/core-colours";
import styled from "styled-components";
import { getFullName, IconButtonWrapper, TextWrapper } from "..";
import { useGetUserQuery } from "../../store/profileSlice";
import { BASE_URL } from "../../store/api";
// import { useProfile } from "hooks/api/profile";

const getAbsoluteURL = (url) => {
    return `${BASE_URL}${url}`;
};

const AttachmentBox = styled(Box)({
    alignItems: "center",
    backgroundColor: `${colorAthensGrey}`,
    "&:last-child": {
        marginBottom: "10px"
    }
});
const AttachmentsContainer = styled(Box)`
display: flex;
flex-wrap: wrap;
row-gap: 1rem;
width: auto;
justify-content: flex-start;
align-items: flex-start;
max-width: inherit;
margin-top: ${(props) => props.margintop ?? 0};
`;
const ActionsBox = styled(Box)({
    marginLeft: "auto",
    flex: "none",
});
const FileNameBox = styled(Box)({
    "& span": {
        color: colorTelusGreen
    }
});
const FileDetailsBox = styled(Box)`
  align-items: center;
  color: ${colorTelusGreen}
`;
export const CustomImage = styled(Box)`
  display: flex;
  border-radius: 8px;
  && > img {
    height: ${(props) => props.height ?? "100px"};
    width: ${(props) => props.width ?? "100px"};
  }
`;

const AttachmentComp = ({
    attachments,
    onDelete,
}) => {
    const { data: profileData } = useGetUserQuery();
    const downloadItem = (url, name) => {
        if (!url) {
            return;
        }
        if (typeof url === "string") {
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank"
            a.download = name;
            a.click();
        }
    };
    const handleError = (e) => {
        const target = e.target;
        target.src = documentIcon;
        target.style.border = "none";
    };
    const isIFile = (item) => {
        return Object.keys(item).includes("name");
    };
    return (
        <AttachmentsContainer margintop="60px">
            {attachments.map(
                (item, index) => {
                    const fullName = isIFile(item)
                        ? profileData
                            ? getFullName(profileData)
                            : ""
                        : getFullName(item.createdBy);
                    const fileName = isIFile(item)
                        ? item.name
                        : item.url.split("/").slice(-1)?.[0] ?? "document";
                    const url = !isIFile(item) ? getAbsoluteURL(item.url) : item.data;
                    return (
                        <AttachmentBox
                            key={`attachments_ById_${index}`}
                            inline
                            between={3}
                        >
                            <CustomImage
                                height="13px"
                                width="13px">
                                <Image
                                    height={9}
                                    width={9}
                                    src={IconAttachement}
                                    alt={`attachment ${index}`}
                                    onError={handleError}
                                />
                            </CustomImage>
                            <FileDetailsBox>
                                <FileNameBox title={fileName}>
                                    <Text size="small" bold>
                                        {fileName}
                                    </Text>
                                </FileNameBox>
                            </FileDetailsBox>
                            <ActionsBox inline between={1}>
                                <Box onClick={() => downloadItem(url, fileName)}>
                                    <Image src={IconDownload} />
                                </Box>
                                {typeof item !== "string" && (
                                    <Close
                                        color="telusPurple"
                                        onClick={() => onDelete(index)}
                                    />
                                    // <Box onClick={() => onDelete(index)}>
                                    //     <Image src={deleteIcon} />
                                    // </Box>
                                )}
                            </ActionsBox>
                        </AttachmentBox>
                    );
                }
            )}
            {attachments.length === 0 && <Text size="small">No attachments found</Text>}
        </AttachmentsContainer>
    );
};
export default AttachmentComp;
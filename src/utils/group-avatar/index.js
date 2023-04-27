import { useProfile } from "hooks/api/profile";
import Box from "@tds/core-box";
import Text from "@tds/core-text";
import styled from 'styled-components'

import {
  ProfilePicWithFallback,
  getFullName,
  BoxAlign,
  TextWrapper,
} from "utils";

const GroupAvatarBox = styled(Box)((props) => ({
  marginLeft: parseInt(props.length) * 10,
  position: "relative",
  flexDirection: "row-reverse",
  display: "inline-flex",
  "& >div": {
    position: "relative",
    border: "1px solid #fff",
    borderRadius: "50%",
    marginLeft: -parseInt(props.length) * 10,
  },
}));
const GroupAvatarUser = ({ user }) => {
  const { data: userProfileData, isLoading } = useProfile(
    typeof user === "string" ? user : undefined,
    !user || typeof user !== "string"
  );
  const userData = typeof user === "string" ? userProfileData : user;
  return (
    <>
      {
        <ProfilePicWithFallback
          loading={isLoading}
          name={userData ? getFullName(userData) : ""}
          profilePic={userData?.profilePicture ?? ""}
          width={40}
          height={40}
        />
      }
    </>
  );
};
const GroupAvatar = ({
  data,
}) => {
  const length = data.length > 3 ? 3 : data.length;
  return (
    <GroupAvatarBox length={length}>
      {data
        // .concat(nomEndorsements)
        // .concat(nomEndorsements)
        .slice(0, 3)
        .map((data) => (
          <GroupAvatarUser user={data.user} />
        ))}
    </GroupAvatarBox>
  );
};
const getGroupName = (nomineeDetails) => {
  const total = nomineeDetails.length;
  const suffix =
    total > 1 ? ` and ${total - 1} other${total - 1 > 1 ? "s" : ""}` : "";
  return nomineeDetails[0].name + suffix;
};
const NomineeText = ({ data, total, hideAvatars, boldText }) => {
  //   const { data: profileData } = useProfile();
  const user = data?.[0]?.user;
  const { data: firstUserData } = useProfile(
    typeof user === "string" ? user : undefined,
    !user || typeof user !== "string"
  );
  const firstUser = typeof user === "string" ? firstUserData : user;

  return (
    <>
      {" "}
      {data.length > 0 && firstUser && (
        <TextWrapper
          additionalProps={{
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          <Text bold={boldText}>
            {getFullName(firstUser)}
            {total > 1 && ` and ${total - 1} other${total - 1 > 1 ? "s" : ""}`}
          </Text>
        </TextWrapper>
      )}
    </>
  );
};

const GroupAvatars = (props) => {
  const { data, hideAvatars, hideText, block } = props;

  return (
    <>
      {!hideAvatars && (
        <BoxAlign alignItems="center" inline={!block} between={1}>
          {data.length > 0 && <GroupAvatar data={data} />}
          {!hideText && (
            <Box horizontal={2}>
              <NomineeText {...props} />
            </Box>
          )}
        </BoxAlign>
      )}
      {hideAvatars && <NomineeText {...props} />}
    </>
  );
};

export { GroupAvatars, GroupAvatar, GroupAvatarBox, getGroupName };

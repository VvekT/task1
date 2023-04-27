import React, { useRef, useEffect } from "react";
import {
  ProfilePop,
  ListItems,
  Item,
  ProfileContainer,
  ImageWrapper,
} from "./profile.style";
// import { ReactComponent as Profilelogo } from "../../assets/Icon-profile-inactive.svg";
// import { ReactComponent as LogOutIcon } from "../../assets/Icon_Logout.svg";
// import { ReactComponent as EditProfileIcon } from "../../assets/svgexport-6.svg";
import Text from "@tds/core-text";
import TdsLink from "@tds/core-link";
import { Link } from "react-router-dom";
// import { LOGOUT_URL } from "config/api";
import { colorCardinal } from "@tds/core-colours";


const Profiledialogue = ({ onProfileClick }) => {
  // const [activeClass, setClass] = useState("");
  const profileRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      const container =
        profileRef?.current &&
        profileRef.current?.contains((event?.target) || null);
      if (!container) {
        onProfileClick(false);
      }
    };
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [onProfileClick]);

  return (
    <>
      <ProfilePop>
        <ProfileContainer ref={profileRef}>
          <ListItems>
            <Item>
              <Link
                // href={`${process.env.PUBLIC_URL}/profile`}
                to="/profile"
                onClick={() => onProfileClick(false)}
              >
                <ImageWrapper>
                  {/* <Profilelogo /> */}
                </ImageWrapper>
                <Text size="small">Profile Settings</Text>
              </Link>
            </Item>

            {/* <Item>
              <Link to={`${process.env.PUBLIC_URL}/profile`}>
                <ImageWrapper>
                  <EditProfileIcon />
                </ImageWrapper>
                <Text size="small">Edit My Profile</Text>
              </Link>
            </Item> */}
            {/* <Box vertical={2}>
              <HairlineDivider />
            </Box> */}
            <Item>
              {/* <TdsLink href={LOGOUT_URL}> */}
              <TdsLink>
                <ImageWrapper color={colorCardinal}>
                  {/* <LogOutIcon /> */}
                </ImageWrapper>
                <Text size="small">Log Out</Text>
              </TdsLink>
            </Item>
          </ListItems>
        </ProfileContainer>
      </ProfilePop>
    </>
  );
};
export default Profiledialogue;

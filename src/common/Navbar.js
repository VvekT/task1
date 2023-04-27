import React, { useState, useEffect, useContext } from "react";
import Link from "@tds/core-link";
import FlexGrid from "@tds/core-flex-grid";
import {
  CaretDown,
  Search,
  ProfileBold,
  NotifyBold,
} from "@tds/core-interactive-icon";
import {
  colorWhite,
} from "@tds/core-colours";
import Text from '@tds/core-text';
import NotificationPopup from "../components/home/notification/Notification";

import Icon from "./icons/Icon";
import IconCollpaseMobile from "../components/images/icon-menu-svg-inactive.svg";
import Logo from "../../public/images/Logo_telus.svg";
import "./navbar.scss";
import ProfileSideNavdialogue from "./ProfileSideNavdialogue";
import Profiledialogue from "../components/profile/ProfileDialogue";
import { NotifyIconActive, NotifyWrapper, TopRightContainer } from "./topnav.style";
import { ReactComponent as Notify } from "../../public/images/icon/Icon-Notification.svg";
import { getTrimmedCount, TextWrapper } from "../utils";
import { NotifyPopup } from "../components/profile/profile.style";
import { useGetUnreadNotificationsQuery, usePrefetch } from "../store/notificationSlice";
import { LoaderNotifyContext } from "../components/context/LoadContextNotification";

const Navbar = (props) => {
  const { navbar_header } = props.customPageData;
  const [navProfile, setNavProfile] = useState(false);
  const [profile, setProfile] = useState(false);
  const [show, setShow] = useState(false);
  const { data: unreadNotifications, refetch } = useGetUnreadNotificationsQuery();
  const preFetchNotification = usePrefetch('getNotifications') ;

  const { refetchNotifyLoading, setrefetchNotifyLoading } = useContext(LoaderNotifyContext)

  const [isBellRinging, setBellRinging] = useState(false);

  const notficationCount = unreadNotifications?.count ?? 0;

  useEffect(() => {
    refetch()
    preFetchNotification()
   return () => setrefetchNotifyLoading(false)
  }, [refetchNotifyLoading])

  useEffect(() => {
    if (notficationCount !== null) {
      setBellRinging(true);
    }
    const timer = setTimeout(() => {
      setBellRinging(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [notficationCount]);

  const topNavDropVisible = (title) => {
    title === "profile" ? setProfile(!profile) : "";
  };

  return (
    <>
      <div className="navbar-container">
        <span className="nav-logo">
          <img
            className="nav-img_1"
            onClick={() => setNavProfile(!navProfile)}
            src={IconCollpaseMobile}
            alt="mobile-View-Icon"
            width="30px"
          />
          <img
            className="nav-img_1"
            onClick={() => setProfile(!profile)}
            src={IconCollpaseMobile}
            alt="mobile-View-Icon"
            width="30px"
          />
          <img className="nav-img_2" src={Logo} alt="nav-logo" />
        </span>


        <ul className="navbar-container_lang">
          {/* {navbar_header &&
            navbar_header.navbar_header_option &&
            navbar_header.navbar_header_option.data &&
            navbar_header.navbar_header_option.data.map((option, index) => { */}
          {/* return ( */}
          <li >
            <Link>
              <Icon name={"Icon-Search"} className="svg-white" />
            </Link>
          </li>
          <li>
            <Link>
              <Icon name="Icon-Help" className="svg-white" />
              <TextWrapper additionalProps={{ color: colorWhite }}>
                <Text size="small">help</Text>
              </TextWrapper>
            </Link>
          </li>
          <li>
            <TopRightContainer>
              <NotifyWrapper>
                <Notify
                  // eslint-disable-next-line no-template-curly-in-string
                  className={`${isBellRinging ? "ringBell" : ""}`}
                  onClick={() => setShow(!show)}
                />
                <NotifyIconActive
                  className={`${notficationCount === 0 ? "displayNone" : ""}`}
                >
                  {unreadNotifications && (
                    <TextWrapper
                      color={colorWhite}
                      additionalProps={{
                        display: "grid",
                        placeItems: "center",
                        fontSize: 12,
                      }}
                    >
                      <Text size="small">
                        {getTrimmedCount(unreadNotifications.count)}
                      </Text>
                    </TextWrapper>
                  )}
                </NotifyIconActive>
              </NotifyWrapper>

              {/* <NotifyPopup originalEmpID="10091599" /> */}
            </TopRightContainer>
          </li>
          <li onClick={() => topNavDropVisible("profile")}>
            <Icon name="Icon-Profile" className="svg-white" />
          </li>
          {/* );
            })} */}
        </ul>
        {navProfile && (
          <ProfileSideNavdialogue onProfileClick={(e) => setNavProfile(e)} />
        )}
        {profile && <Profiledialogue onProfileClick={(e) => setProfile(e)} />}

        {show && (
          <NotificationPopup onProfileClick={(e) => setShow(e)} />
        )}
      </div>
    </>
  );
};

export default Navbar;

import React, { useRef, useEffect, useState } from "react";
import {
  NotifyPopup,
  NotifyIconWrapper,
  NotifyPopupIcon,
  NotifyContainer,
  HeaderWrapper,
  NotificationWrapper,
  CircularRead,
} from "../../../common/topnav.style";
import Box from "@tds/core-box";
import HairlineDivider from "@tds/core-hairline-divider";
import Text from "@tds/core-text";
import Image from "@tds/core-image";
import Paragraph from "@tds/core-paragraph";
import Link from "@tds/core-link";
import { colorWhiteLilac, colorWhite } from "@tds/core-colours";
import A11yContent from "@tds/core-a11y-content";
import NotifyBold from "../../../../public/images/icon/Icon_NotifyBold.svg";
// import { MOCK_NOTIFICATION } from "config/notification";
import TdsNotification from "@tds/core-notification";
import SkeletonProvider from "@tds/community-skeleton-provider";
import Heading from "@tds/core-heading";
import styled from "styled-components";
// import SettingNotification from "assets/notification_setting.svg";
import { media } from "@tds/core-responsive";
// import NotificationComp from "components/activity/notification-comp";
import { getRouteUrl, handleScrollToPostion } from "../../../utils";
import { useGetNotificationsQuery, useReadAllNotificationMutation, useReadNotificationMutation } from "../../../store/notificationSlice";
import NotificationComp from "./NotificationComp";
// import {
//   INotification,
//   SUPPORTED_NOTIFICATION_TYPES,ƒž
// } from "types/notification";
// import InfiniteScroll from "react-infinite-scroller";

const SUPPORTED_NOTIFICATION_TYPES = [
    'MyTicket',
    'MyTicketAssignee'
  ];

const FilterNotificationEnum = {
    ALL :"all",
    TICKETS :"tickets",
    INCIDENTS :"incidents"
  }

const CLICK_TO_ACTION_MAP = {
  [FilterNotificationEnum.NOMINATION]: getRouteUrl(
    "/reward-and-recognition/nomination"
  ),
  [FilterNotificationEnum.ENDORSEMENT]: getRouteUrl(
    "/reward-and-recognition/endorsement"
  ),
  [FilterNotificationEnum.COLLABORATOR]: getRouteUrl(
    "/reward-and-recognition/endorsement"
  ),
  [FilterNotificationEnum.REWARDS]: getRouteUrl(
    "/reward-and-recognition/reward/redemption"
  ),
  [FilterNotificationEnum.DASHBOARD]: getRouteUrl("/dashboard"),

  [FilterNotificationEnum.ADMIN]: getRouteUrl("/admin"),
  [FilterNotificationEnum.ADMINEND]: getRouteUrl("/admin"),
  [FilterNotificationEnum.ADMINDSLTAPPROVE]: getRouteUrl("/admin"),
  [FilterNotificationEnum.ADMINPUBLISH]: getRouteUrl("/admin"),
};

const filterNotificationValue = [
  {
    id: FilterNotificationEnum.ALL,
    text: "All",
  },
  { id: FilterNotificationEnum.TICKETS, text: "Tickets" },
  { id: FilterNotificationEnum.INCIDENTS, text: "Incidents" },
];

const FilterWrapper = styled(Box)`
  display: grid;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${(props) => (props.active ? colorWhiteLilac : colorWhite)};
  color: ${colorWhite};
  &:hover {
    background: ${colorWhiteLilac};
  }
  text-align: center;
  ${media.from("xs").until("md").css({
    gridTemplateColumns: "1fr 1fr 1fr",
  })}
`;

const NotificationBox = styled(Box)`
  display: ${(props) => (props.setting ? "none" : "flex")};
`;

const Notification = ({ onProfileClick }) => {
  const { data, fetchNextPage, hasNextPage, error, isLoading } =
    useGetNotificationsQuery(1);

    console.log("getNOtification", data);

// let isLoading = false;
// let error = false;
// let data = []

  const notificationRef = useRef(null);
  const [setting, setSetting] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    FilterNotificationEnum.ALL
  );
  const [readAllNotification ] = useReadAllNotificationMutation();
  const [ readNotification ] = useReadNotificationMutation();

  const filteredData = (
    data?.results?.reduce((prev, curr) => {
      return [...prev, curr];
    }, []) ?? []
  )
    .filter((notification) =>
      SUPPORTED_NOTIFICATION_TYPES.includes(notification.type)
    )
    .filter((notification) => {
      return (
        selectedFilter === FilterNotificationEnum.ALL ||
        notification.ticket.ticketType.toLowerCase().includes(selectedFilter)
      );
    });

  useEffect(() => {
    const handleOutSideClick = (event) => {
      const container =
        notificationRef?.current &&
        notificationRef.current?.contains((event?.target) || null);
      if (!container) {
        onProfileClick(false);
      }
    };
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [onProfileClick]);

  const useScrollRef = useRef(null);

  useEffect(() => {
    let fetching = false;
    const onScroll = async (e) => {
      const scrollHeight = e?.target?.scrollHeight;
      const scrollTop = e?.target?.scrollTop;
      const clientHeight = e?.target?.clientHeight;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    const div = useScrollRef?.current;
    if (div) {
      div.addEventListener("scroll", onScroll);
      return () => {
        div.removeEventListener("scroll", onScroll);
      };
    }
  }, [useScrollRef, useScrollRef.current]);

  const handlePrefSettings = () => {
    setSetting(true);
  };
  const handleClickNotification = (notification) => {
    // activeClass(true);
    readNotification(String(notification.id)).unwrap();

    const filters = Object.values(FilterNotificationEnum);
    const type = filters.find(
      (filter) =>
        notification.type.toLowerCase().includes(filter) &&
        filter !== FilterNotificationEnum.ALL
    );
    if (
      type &&
      type !== FilterNotificationEnum.ALL &&
      notification.type !== "EndorsementSentBack"
    ) {
      if (
        notification.type === "NominationAdmin" ||
        notification.type === "EndorsementAdmin" ||
        notification.type === "EndorsementPublishedAdmin" ||
        notification.type === "EndorsementDslt"
      ) {
        history.push(CLICK_TO_ACTION_MAP[notification.type]);
        handleScrollToPostion(50, 0, true);
        onProfileClick(false);
        return;
      } else if (notification.type === "NominationCollaborator") {
        history.push(CLICK_TO_ACTION_MAP[FilterNotificationEnum.COLLABORATOR]);
        if (!notification.read) {
          readNotification({ id: String(notification.id) }).unwrap();
        }
        handleScrollToPostion(900, 0, true);
        onProfileClick(false);
        return;
      } else {
        history.push(CLICK_TO_ACTION_MAP[type]);
      }
      if (!notification.read) {
        readNotification({ id: String(notification.id) }).unwrap();
      }
      onProfileClick(false);
    }

    if (notification.type === "EndorsementSentBack") {
      history.push(CLICK_TO_ACTION_MAP[FilterNotificationEnum.COLLABORATOR]);
      if (!notification.read) {
        readNotification({ id: String(notification.id) }).unwrap();
      }
      onProfileClick(false);
    }
    handleScrollToPostion(500, 0, true);

    if (notification.type === "EndorsementPending") {
      history.push(CLICK_TO_ACTION_MAP[FilterNotificationEnum.DASHBOARD]);
      if (!notification.read) {
        readNotification.mutate({ id: String(notification.id) });
      }
      onProfileClick(false);
      handleScrollToPostion(100, 0, true);
    }
  };
  const handleFilterRequest = (filterValue) => {
      console.log(filterValue, "filterVaLUE")
    setSelectedFilter(filterValue);
  };
  const handleClickAllReadNotification = () => {
    readAllNotification();
  };
  return (
    <NotifyPopup ref={useScrollRef}>
      <NotifyContainer ref={notificationRef}>
        <Box vertical={4} horizontal={0}>
          <NotificationBox setting={setting}>
            <Box vertical={2} horizontal={3} inline between="space-between">
              <HeaderWrapper>
                <Heading level="h2">Notifications</Heading>
              </HeaderWrapper>
              <div style={{ marginTop: "0.5rem", marginLeft: "5.5rem" }}>
                <Text
                  size="small"
                  onClick={() => handleClickAllReadNotification()}
                >
                  Mark All As Read
                </Text>
              </div>
              {/* <div onClick={handlePrefSettings} style={{ marginTop: "0.5rem" }}>
                <Image
                  height="20"
                  width="20"
                  src={SettingNotification}
                  alt="preferences and notification settings"
                />
                <A11yContent>notification settings</A11yContent>
              </div> */}
            </Box>
            <Box inline between="space-between" horizontal={3} vertical={2}>
              {filterNotificationValue.map((filter, index) => {
                return (
                  <FilterWrapper
                    key={filter.id}
                    active={selectedFilter === filter.id}
                    onClick={() => handleFilterRequest(filter.id)}
                  >
                    <Text size="small">{filter.text}</Text>
                  </FilterWrapper>
                );
              })}
            </Box>
            <Box vertical={2}>
              <HairlineDivider />
            </Box>
            {isLoading && (
              <SkeletonProvider show={true}>
                <Box vertical={2}>
                  <HairlineDivider />
                </Box>
                <Text skeleton={{ characters: 20, lines: 2 }}></Text>
                <Box vertical={2}>
                  <HairlineDivider />
                </Box>
                <Text skeleton={{ characters: 20, lines: 2 }}></Text>
              </SkeletonProvider>
            )}
            {error && !isLoading && (
              <TdsNotification variant="error">
                Couldn't fetch notifications.Please try again later.
              </TdsNotification>
            )}
            {data && filteredData.length === 0 && (
              <>
                <TdsNotification variant="warning">
                  All caught up.
                </TdsNotification>
              </>
            )}
            {!isLoading &&
              !error &&
              data &&
              filteredData.map((notification) => {
                const { createdAt, type, read } = notification;
                return (
                  <>
                    <NotificationWrapper
                      below={1}
                      onClick={() => handleClickNotification(notification)}
                      className={`${read ? "active" : ""}`}
                    >
                      <Box between={2} inline>
                        <NotifyIconWrapper>
                          <NotifyPopupIcon>
                            <Image
                              src={NotifyBold}
                              rounded="circle"
                              width={20}
                              height={20}
                              alt="Profile image"
                            />
                          </NotifyPopupIcon>
                        </NotifyIconWrapper>
                        <Box between={4}>
                          <Text size="small">
                            <NotificationComp
                              hideProfile
                              notification={notification}
                              date={new Date(createdAt)}
                            />
                          </Text>{" "}
                        </Box>
                        <Box>
                          <CircularRead />
                        </Box>
                      </Box>
                    </NotificationWrapper>
                  </>
                );
              })}
          </NotificationBox>

        </Box>
      </NotifyContainer>
    </NotifyPopup>
  );
};
export default Notification;

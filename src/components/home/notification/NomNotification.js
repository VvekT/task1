import React from "react";
import Text from "@tds/core-text";
import Box from "@tds/core-box";

import { getFullName, ProfilePicWithFallback, TextWrapper } from "../../../utils";
import { colorGreyRaven } from "@tds/core-colours";
import { formatDistance } from "date-fns";
import { useGetUseProfileQuery } from "../../../store/profileUserSlice";
import SkeletonProvider from "@tds/community-skeleton-provider";
import Divider from "@tds/core-hairline-divider";

const NomNotification = ({
    date,
    hideProfile,
    type,
    ticket
}) => {

    const { data: nomineeDetails, isLoading } = useGetUseProfileQuery(
        ticket.affectedUser
    );

    if (isLoading) {
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

    console.log(nomineeDetails, "nominationdataaa")
    console.log(hideProfile, "hideprofiles")
    console.log(type, "type")

    const nomineeData = nomineeDetails;
    const fullName = [ticket?.ticketCreatedBy?.firstName, ticket?.ticketCreatedBy?.lastName].join(" ");
    const nominees = JSON.parse(ticket.affectedUser)
    const NomineeName = () => {
        console.log("nominess", nominees);
        return (
            <>
                <GroupAvatars
                    hideAvatars
                    boldText
                    total={nominees.length}
                    data={nominees.map((user) => ({ user: user.empID }))}
                />
            </>
        );
    };
    return (
        <>
            {!hideProfile && type === "MyTicket" && (
                <ProfilePicWithFallback
                    loading={isLoading}
                    height={50}
                    width={50}
                    name={[nomineeData?.firstName, nomineeData?.lastName].join(" ")}
                    profilePic={nomineeData.profilePicture}
                />
            )}
            {/* {!hideProfile && type === "Nomination" && isTeam !== "team" && (
        <ProfilePicWithFallback
          loading={nomineeDetails.isLoading}
          height={50}
          width={50}
          name={getFullName(nomination.nominatedBy)}
          profilePic={nomination.nominatedBy.profilePicture}
        />
      )} */}
            {hideProfile && type === "NominationAdmin" && isTeam !== "team" && (
                <ProfilePicWithFallback
                    loading={nomineeDetails.isLoading}
                    height={50}
                    width={50}
                    name={getFullName(nomination.nominatedBy)}
                    profilePic={nomination.nominatedBy.profilePicture}
                />
            )}
            {!hideProfile &&
                type === "NominationCollaborator" &&
                isTeam !== "team" && (
                    <ProfilePicWithFallback
                        loading={nomineeDetails.isLoading}
                        height={50}
                        width={50}
                        name={getFullName(nomination.nominatedBy)}
                        profilePic={nomination.nominatedBy.profilePicture}
                    />
                )}
            <Box between={1}>
                <>
                    {type === "MyTicket" && (
                        <Text>
                            <Text bold>Your</Text> Ticket has been raised sucessfully for issue
                            <Text bold> {ticket.shortDescription}</Text>
                        </Text>
                    )}
                    {type === "MyTicketAssignee" && (
                        <Text>
                            <Text bold>{fullName} </Text> have been raised a ticket for issue
                            <Text bold> {ticket.shortDescription}</Text>
                        </Text>
                    )}
                    <TextWrapper color={colorGreyRaven}>
                        <Text size="small">
                            {formatDistance(date, new Date(), { addSuffix: true })
                                .replace("about", "")
                                .trim()}
                        </Text>
                    </TextWrapper>
                </>
            </Box>
        </>
    );
};
export default NomNotification;

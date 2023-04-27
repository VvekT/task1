// import { INotification } from "types/notification";
// import EndNotification from "./end-notification";
import React from "react";
import NomNotification from "./NomNotification";
// import NomRequestNotification from "./nom-request-notification";

const NotificationComp = ({ notification, date, hideProfile }) => {
    return (
        <>
            {((notification?.type === "MyTicket" ||
                notification?.type === "MyTicketAssignee") && (
                    <NomNotification
                        date={date}
                        ticket={notification.ticket}
                        hideProfile={hideProfile}
                        type={notification.type}
                    />
                ))}
        </>
    );
};
export default NotificationComp;

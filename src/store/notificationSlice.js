import { createEntityAdapter } from "@reduxjs/toolkit";
// import { sub } from 'date-fns';
import { apiSlice } from "./api/apiSlice";

const postsAdapter = createEntityAdapter()
const initialState = postsAdapter.getInitialState()

export const extendedApiSliceNotifications = apiSlice
.enhanceEndpoints({ addTagTypes: ["Notifications"] })
.injectEndpoints({
    endpoints: builder => ({
        getNotifications: builder.query({
            query: (page = 1) => ({
                url: `/notification`,
                params: {
                    page              
                },
                credentials: "include",
            }),
            providesTags: ['Notifications'],
        }),
        getUnreadNotifications: builder.query({
            query: () => ({
                url: `/notification/unread`,
                credentials: "include",
            }),
            providesTags: ['Notifications']
        }),
        readAllNotification: builder.mutation({
            query: () => ({
                url: `/notification/readall`,
                credentials: "include",
                method: "PATCH",
            }),
            invalidatesTags: ["Notifications"]

        }),
        readNotification: builder.mutation({
            query: (id) => ({
                url: `/notification/${id}`,
                method: 'PATCH',
                credentials: "include",
                extraOptions: { maxRetries: 3 },
            }),
            invalidatesTags: ["Notifications"]
        }),
    })
})

export const {
    useGetNotificationsQuery,
    useGetUnreadNotificationsQuery,
    useReadAllNotificationMutation,
    useReadNotificationMutation,
    usePrefetch
} = extendedApiSliceNotifications
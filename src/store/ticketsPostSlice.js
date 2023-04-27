import { createEntityAdapter } from "@reduxjs/toolkit";
// import { sub } from 'date-fns';
import { apiSlice } from "./api/apiSlice";

const postsAdapter = createEntityAdapter()
const initialState = postsAdapter.getInitialState({})

// apiSlice.enhanceEndpoints({ addTagTypes: ["Ticket"] })

export const extendedApiSliceTicket = apiSlice
.enhanceEndpoints({ addTagTypes: ["Ticket"] })
.injectEndpoints({
    endpoints: builder => ({
        getTickets: builder.query({
            query: ({ status, page, isInclude }) => ({
                url: `/ticket`,
                params: {
                    page,
                    status,
                    isInclude
                },
                credentials: "include",
            }),
            providesTags: ['Ticket'],
        }),
        addNewTicket: builder.mutation({
            query: (initialPost) => ({
                url: '/ticket',
                method: 'POST',
                credentials: "include",
                extraOptions: { maxRetries: 3 },
                body: initialPost
            }),
            invalidatesTags: ['Ticket']
        }),
        updateTicket: builder.mutation({
            query: (values) => ({
                url: `/ticket`,
                method: 'PUT',
                credentials: "include",
                extraOptions: { maxRetries: 3 },
                body: values
            }),
            invalidatesTags: ['Ticket']
        }),
        getTicketById: builder.query({
            query: (id) => ({
                url: `/ticket/${id}`,
                method: 'GET',
                credentials: "include",
                extraOptions: { maxRetries: 3 },
            }),
            invalidatesTags: ['Ticket']
        }),
        getCountBackNotification: builder.query({
            query: (id) => ({
                url: `/ticket/count`,
                method: 'GET',
                credentials: "include",
                extraOptions: { maxRetries: 3 },
            }),
            providesTags: ['Ticket'],
        }),
    })
})

export const {
    useGetTicketsQuery,
    useAddNewTicketMutation,
    useUpdateTicketMutation,
    useGetTicketByIdQuery,
    useGetCountBackNotificationQuery
} = extendedApiSliceTicket
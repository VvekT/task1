import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState()

export const extendedApiSliceProfile = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: () => ({
        url: '/me',
        method: 'GET',
        credentials: "include",
        extraOptions: { maxRetries: 3 },
      }),
      // transformResponse: responseData => {
      //   return userAdapter.setAll(initialState, responseData)
      // },
      // providesTags: (result, error, arg) => [
      //   ...result.ids.map(id => ({ type: 'Me', id }))
      // ]
    }),
  })
})

export const {
  useGetUserQuery
} = extendedApiSliceProfile
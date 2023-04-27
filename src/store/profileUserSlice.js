import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState()

export const extendedApiSliceUseProfile = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUseProfile: builder.query({
      query: (id = 'me') => ({
        url: `/${id ? "profile/" + id : "me"}`,
        method: 'GET',
        credentials: "include",
        extraOptions: { maxRetries: 3 },
      }),
    }),
  })
})

export const {
  useGetUseProfileQuery
} = extendedApiSliceUseProfile
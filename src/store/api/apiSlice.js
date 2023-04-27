import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ONELOGIN_URL } from '.'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  console.log("spliceJS", result);
  if (result.error && result.error.status === 401 || result.error && result.error.status === 403) {
    window.location.href = ONELOGIN_URL;
  }
  return result;
}

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Ticket", "Notifications"],
    refetchOnReconnect: true,
    refetchOnFocus: true,
    prepareHeaders(headers) {
        return headers;
    },
    endpoints: builder => ({})
})
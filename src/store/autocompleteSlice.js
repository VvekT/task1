import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

const postsAdapter = createEntityAdapter()

const initialState = postsAdapter.getInitialState()

export const extendedApiSliceAutoComplete = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAutocomplete: builder.query({
            query: (query) => `/search/autocomplete?q=${query}`,
            credentials: "include",
            refetchOnReconnect: true,
            transformResponse: responseData => {
                return postsAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'Autocomplete', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Autocomplete', id }))
            ]
        })
    })
})

export const {
  useGetAutocompleteQuery
} = extendedApiSliceAutoComplete
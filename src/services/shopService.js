import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getMoviles: builder.query({
            query: () => 'autosDisp.json'
        }),
        getMovilesById: builder.query({
            query: (carId) => `autosDisp.json?orderBy="id"&equalTo=${carId}`
        })
    })
})

export const {useGetMovilesQuery, useGetMovilesByIdQuery} = shopApi;
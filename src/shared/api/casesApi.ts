import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'


export const casesApi = createApi({
  reducerPath: 'casesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.test.cyberia.studio/api/v1' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/project-categories`,
    }),
    getProjects: builder.query({
      query: () => `/projects`,
    }),
  }),
})


export const { useGetCategoriesQuery, useGetProjectsQuery } = casesApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Categories, ProjectsCards } from './types';

export const casesApi = createApi({
  reducerPath: 'casesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.test.cyberia.studio/api/v1' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Categories, string>({
      query: () => `/project-categories`,
    }),
    getProjects: builder.query<ProjectsCards, string>({
      query: () => `/projects`,
    }),
    submitForms: builder.mutation({
      query: (formData) => ({
        url: `/feedbacks`,
        method: 'POST',
        body: formData,
      })
    })
  }),
})


export const { useGetCategoriesQuery, useGetProjectsQuery, useSubmitFormsMutation } = casesApi
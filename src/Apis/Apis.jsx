import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_TEST_BASE_URL;

const getQuestions = import.meta.env.VITE_TEST_FETCH_QUESTIONS;

const submit_answers = import.meta.env.VITE_TEST_SUBMIT_ANSWERS;

// const API_KEY1 = import.meta.env.VITE_TEST_REGISTER_USER;

// const API_KEY2 = import.meta.env.VITE_TEST_LOGIN_USER

export const Apis = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers) => {
        // const token = getState().auth.token;
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getQuestions: builder.query({
        query: () => getQuestions,
      }),
      submitAnswers: builder.mutation({
        query: (answers) => ({
          url: submit_answers,
          method: 'POST',
          body: answers,
        }),
      }),
    }),
  });

 export const { useGetQuestionsQuery, useSubmitAnswersMutation } = Apis;
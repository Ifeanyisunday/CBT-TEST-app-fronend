import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const BASE_URL = import.meta.env.VITE_TEST_BASE_URL;

const register = import.meta.env.VITE_TEST_REGISTER_USER;

const login = import.meta.env.VITE_TEST_LOGIN_USER;


const UserApi = createApi({
    reducerPath: 'authentication',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (reguser) => ({
                url: register,
                method: 'POST',
                body: reguser,
            }),
        }),
        loginUser: builder.mutation({
            query: (loguser) => ({
                url: login,
                method: 'POST',
                body: loguser,
            }),
        }),
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = UserApi
export default UserApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/users"
    }),
    reducerPath: "userApi",
    endpoints(builder) {
        return {
            getAllUser: builder.query({
                query: () => '',
            }),
            getUserById: builder.query({
                query: (id) => id
            }),
            createUser: builder.mutation({
                query(arg) {
                    return {
                        url: "add",
                        method: 'POST',
                        body: arg
                    }
                }
            })
        }
    }
})

export default userApi;
export const { useGetAllUserQuery, useLazyGetUserByIdQuery, useCreateUserMutation } = userApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://electronics-store-api.vercel.app/api/products"
    }),
    reducerPath: "productsApi",
    endpoints(builder) {
        return {
            getAllProducts: builder.query({
                query: () => '',
            }),
            getProductById: builder.query({
                query: (id) => id
            }),
        }
    }
})

export default productsApi;
export const { useGetAllProductsQuery, useLazyGetProductByIdQuery } = productsApi

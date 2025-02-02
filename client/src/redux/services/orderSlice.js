import { apiSlice } from "./apiSlice";
const product = "/api/order"

export const orderSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        createOrder: builder.mutation({
            query: ({ user, shippingAddress, paymentMethod }) => ({
                url:`${product}/neworder`,
                method:"POST",
                body:{ user, shippingAddress, paymentMethod }
            }),
        })
    })
})

export const {useCreateOrderMutation} = orderSlice
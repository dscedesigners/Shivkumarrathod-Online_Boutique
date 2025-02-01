import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createUser :builder.mutation({
            query:({phone})=>({
                url:'/api/users/signup',
                method:"POST",
                body:{phone}
            })
        })
    })
})

export const {useCreateUserMutation} = userApiSlice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001"
    }),
    endpoints: (builder)=>({
        createCourse:builder.mutation({
            query:(credentials)=>({
                url:'/course',
                method:"POST",
                body: credentials,
            })
        }),
        updateCourse:builder.mutation({
            query:(data)=>({
                url:`/course/${data.id}`,
                method:"PUT",
                body: data,
            })
        }),
        deleteCourse:builder.mutation({
            query:(data)=>({
                url:`/course/${data.id}`,
                method:"DELETE",
            })
        }),
        getAllCourses:builder.query({
            query:()=>({
                url:`/course/`,
                method: `GET`,
            })
        }),
        getCourseId:builder.query({
            query:(id)=>({
                url:`/course/${id}`,
                method: `GET`,
            })
        })
    })
})

export const{useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation, useGetAllCoursesQuery, useGetCourseIdQuery}= courseApi
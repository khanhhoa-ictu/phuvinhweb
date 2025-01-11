import http from "@/lib/http"

export const getListPost = (page) =>{
    return http.get(`api/post?page=${page}`)
}

export const addPost = (data) =>{
    return http.post(`api/post`, data)
}

export const deletePost = (id) =>{
    return http.delete(`api/post?delete=${Number(id)}`)
}
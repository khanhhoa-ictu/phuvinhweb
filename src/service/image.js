import http from "@/lib/http"

export const uploadFile = (data) =>{
    return http.post(`api/upload-image`, data)
}

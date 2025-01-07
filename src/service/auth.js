import http from "@/lib/http"

export const login = (infoUser) =>{
    return http.post('api/login',infoUser)
}
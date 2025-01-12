import http from "@/lib/http"

export const addProduct = (data) =>{
    return http.post(`api/product`, data)
}

export const getListProduct = (page) =>{
    return http.get(`api/product?page=${page}`)
}

export const deleteProduct = (id) =>{
    return http.delete(`api/product/${id}`)
}

export const getProductDetail = (id) =>{
    return http.get(`api/product/${id}`)
}

export const editProduct = (data) =>{
    return http.put(`api/product`, data)
}


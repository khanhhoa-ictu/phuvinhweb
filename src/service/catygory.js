import http from "@/lib/http";

export const addCategory = (data) => {
  return http.post(`api/category`, data);
};

export const getListCategory = (page) => {
  return http.get(`api/category?page=${page}`);
};
export const deleteCategory = (id) => {
  return http.delete(`api/category/${id}`);
};

export const getCategoryDetail = (id) =>{
  return http.get(`api/category/${id}`)
}
export const editCategory = (data) =>{
  return http.put(`api/category/`,data)
}

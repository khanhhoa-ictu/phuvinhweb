import http from "@/lib/http";

export const addCategory = (data) => {
  return http.post(`api/category`, data);
};

export const getListCategory = (page, sort = "DESC") => {
  return http.get(`api/category?page=${page}&sort=${sort}`, {
    cache: "no-store",
  });
};
export const deleteCategory = (id) => {
  return http.delete(`api/category/${id}`);
};

export const getCategoryDetail = (id) => {
  return http.get(`api/category/${id}`, { cache: "no-store" });
};
export const editCategory = (data) => {
  return http.put(`api/category/`, data);
};

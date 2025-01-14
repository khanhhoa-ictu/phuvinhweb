import http from "@/lib/http";

export const getListPost = (page, pageSize) => {
  return http.get(`api/post?page=${page}&page-size=${pageSize}`);
};

export const addPost = (data) => {
  return http.post(`api/post`, data);
};

export const deletePost = (id) => {
  return http.delete(`api/post?delete=${Number(id)}`);
};
export const getPostDetail = (id) => {
  return http.get(`api/post/${id}`);
};
export const editPost = (data) => {
  return http.put(`api/post/`, data);
};

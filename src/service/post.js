import http from "@/lib/http";

export const getListPost = (page, pageSize, isHome = false) => {
  return http.get(
    `api/post?page=${page}&page-size=${pageSize}&is_homepage=${isHome}`,
    { cache: "no-store" },
  );
};

export const addPost = (data) => {
  return http.post(`api/post`, data);
};

export const deletePost = (id) => {
  return http.delete(`api/post?delete=${Number(id)}`);
};
export const getPostDetail = (id) => {
  return http.get(`api/post/${id}`, { cache: "no-store" });
};
export const editPost = (data) => {
  return http.put(`api/post/`, data);
};

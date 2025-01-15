import http from "@/lib/http";

export const addProduct = (data) => {
  return http.post(`api/product`, data);
};

export const getListProduct = (page, pageSize, isHome = false) => {
  return http.get(
    `api/product?page=${page}&page-size=${pageSize}&is_homepage=${isHome}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteProduct = (id) => {
  return http.delete(`api/product/${id}`);
};

export const getProductDetail = (id) => {
  return http.get(`api/product/${id}`, {
    cache: "no-store",
  });
};

export const editProduct = (data) => {
  return http.put(`api/product`, data);
};

export const getListProductByCategory = (page, pageSize, category) => {
  return http.get(
    `api/product/category?page=${page}&page-size=${pageSize}&category=${category}`,
    { cache: "no-store" }
  );
};

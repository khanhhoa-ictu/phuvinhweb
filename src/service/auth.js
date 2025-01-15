import http from "@/lib/http";

export const login = (infoUser) => {
  return http.post("api/login", infoUser);
};

export const register = (infoUser) => {
  return http.post("api/register", infoUser);
};

export const logoutServer = (force) => {
  return http.post(
    "api/logout",
    {
      force,
    },
    {
      baseUrl: "",
    },
  );
};

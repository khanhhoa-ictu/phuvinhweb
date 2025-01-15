import { isClient } from "@/common";

export class HttpError extends Error {
  status;
  payload;

  constructor({ status, payload }) {
    super("Http Error");
    this.status = status;
    this.payload = payload;
  }
}

export class EntityError extends HttpError {
  status;
  payload;

  constructor({ status, payload }) {
    super({ status, payload });
    if (status !== 422) {
      throw new Error("EntityError must have status 422");
    }
    this.status = status;
    this.payload = payload;
  }
}

const request = async (method, url, option) => {
  const body = option?.body
    ? option?.body instanceof FormData
      ? option?.body
      : JSON.stringify(option.body)
    : undefined;

  const baseHeaders =
    option?.body instanceof FormData
      ? {
          Authorization: "",
        }
      : {
          "Content-Type": "application/json",
          Authorization: "",
        };
  if (isClient) {
    const token = localStorage.getItem("token");
    if (token) {
      baseHeaders.Authorization = `Bearer ${token}`;
    }
  }

  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/${url}`, {
    ...option,
    headers: {
      ...baseHeaders,
      ...option?.headers,
    },
    body,
    method,
  });

  const payload = await res.json();
  const data = {
    status: res.status,
    payload,
  };
  if (!res?.ok) {
    if (res.status === 422) {
      throw new EntityError(data);
    } else if (res.status === 401) {
      if (isClient) {
        await fetch("/api/auth/logout", {
          method: "POST",
          body: JSON.stringify({ force: true }),
          headers: baseHeaders,
        });
        localStorage.removeItem("token");
        location.href = "/login";
      } else {
        const token = option?.headers?.Authorization.split("Bearer ")[1];
        redirect(`/logout/?token=${token}`);
      }
    } else {
      throw new HttpError(data);
    }
  }
  return data;
};

const http = {
  get(url, option) {
    return request("GET", url, option);
  },

  post(url, body, option) {
    return request("POST", url, { ...option, body });
  },
  put(url, body, option) {
    return request("PUT", url, { ...option, body });
  },
  delete(url, option) {
    return request("DELETE", url, { ...option });
  },
};

export default http;

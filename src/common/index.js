import { message } from "antd";

export const isClient = typeof window !== "undefined";

export const getErrorMessage = (error) => {
  return error?.payload?.message || "Something went wrong!";
};

export const handleErrorMessage = (error) => {
    message.destroy();
    message.error(getErrorMessage(error));
  };
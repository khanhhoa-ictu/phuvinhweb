import { message } from "antd";

export const isClient = typeof window !== "undefined";

export const getErrorMessage = (error) => {
  return error?.payload?.message || "Something went wrong!";
};

export const handleErrorMessage = (error) => {
  message.destroy();
  if (typeof error === "string") {
    message.error(error);
    return;
  }
  message.error(getErrorMessage(error));
};

export const isValidateFile = (file) => {
  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

  if (!validImageTypes.includes(file.type)) {
    return false;
  }
  if (file.size > maxSizeInBytes) {
    return false;
  }
  return true;
};

export const handleSuccessMessage = (messageText) => {
  message.destroy();
  message.success(messageText);
};

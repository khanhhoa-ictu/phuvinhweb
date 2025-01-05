export const isClient = typeof window !== "undefined";

export const handleErrorMessage = (error) => {
    message.destroy();
    message.error(getErrorMessage(error));
  };
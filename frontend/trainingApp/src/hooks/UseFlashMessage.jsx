import bus from "../utils/bus";

export const UseFlashMessage = () => {
  const setFlashMessage = (msg, type) => {
    bus.emit("flash", {
      message: msg,
      type: type,
    });
  };
  return { setFlashMessage };
};

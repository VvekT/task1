// import { ToasterProps } from "types/toaster";
import toast from "react-hot-toast";
import AppToast from "../../components/toast";
import React from "react";

const toaster = (config) => {
  let toastId = "";
  const handleExit = () => {
    toast.remove(toastId);
    if (config.onExit) {
      config.onExit(true);
    }
  };
  toastId = toast.custom(<AppToast {...config} onExit={handleExit} />, {
    duration: config.dismissible ? 300000 : config.duration ?? 5000,
    position: config.position ?? "top-center",
  });

  return toastId;
};

export default toaster;

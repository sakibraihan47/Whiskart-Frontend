import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = () =>
  toast.success("Updated Artwork!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });

export const notifyFail = () =>
  toast.error("Update Failed!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });

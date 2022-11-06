import axios from "axios";

export const signup = async (payload) => {
  try {
    const res = await axios.post("http://localhost:3002/signup", payload);
    console.log({ res });
  } catch (error) {}
};

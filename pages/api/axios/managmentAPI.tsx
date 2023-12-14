import axios from "axios";

export const getManagment = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "/users",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

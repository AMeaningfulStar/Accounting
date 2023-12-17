import axios from "axios";

// get all users
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

interface UserDataType {
  department: string;
  name: string;
  contactNumber: string;
  email: string;
  role: string;
  id: string;
  password: string;
  status: string;
  registrationDate: string;
  remarks: string;
}

// create a new user
export const postManagment = async (userData: UserDataType) => {
  try {
    const response = await axios({
      method: "post",
      url: "/users/",
      data: userData,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// get user by ID
export const getManagmentID = async (userID: number) => {
  try {
    const response = await axios({
      method: "get",
      url: `/users/${userID}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update user by ID
export const putManagmentID = async (userData: UserDataType, userID: number) => {
  try {
    const response = await axios({
      method: "put",
      url: `/users/${userID}`,
      data: userData,
    });

    return response.data;
  } catch (error) {
    throw Error;
  }
};

// Delete user by ID
export const deleteManagmentID = async (userID: number) => {
  try{
    const response = await axios({
      method: "delete",
      url: `/users/${userID}`
    })

    return response.data;
  } catch (error) {
    throw Error
  }
}

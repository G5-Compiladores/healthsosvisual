import axios from "axios";
const URL_API = "";

export async function getFile(id) {
    try {
      const response = await axios.get(`${URL_API}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error in the request:', error);
    }
  };

export async function createFile(dataUser) {
try {
    
    const response = await axios.post(URL_API, dataUser)
    .then((response) =>{
    console.log(response);
    });
    return response;
} catch(e) {console.error("ERROR",e);
}
};

export const updateFile = async (id, dataUser) => {
    try {
      const response = await axios.put(`${URL_API}/${id}`, dataUser);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error);
      throw error;
    }
  };

export async function deleteFile(id) {
    try {
      const response = await axios.delete(`${URL_API}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error in the request:', error); 
    }
  };
  
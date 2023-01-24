import axios from 'axios';

const loginApi = async (userData) => {
    const response = await axios.post("http://localhost:3000/login", userData);
    return response.data;
  };


export default loginApi;
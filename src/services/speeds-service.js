import axios from "axios";

const SERVER = "https://f1-node-server-app.onrender.com/";

const BASE_API = `${SERVER}/api`;

const request = axios.create({
  withCredentials: true,
});

export const createSpeed = async (speed) => {
  const response = await request.post(`${BASE_API}/speeds`, speed);
  return response.data;
};

export const findMySpeeds = async () => {
  const response = await request.get(`${BASE_API}/my-speeds`);
  return response.data;
};

export const findAllSpeeds = async () => {
  const response = await request.get(`${BASE_API}/speeds`);
  return response.data;
};

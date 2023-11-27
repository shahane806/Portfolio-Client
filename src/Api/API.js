import axios from 'axios';
export const API = axios.create({baseURL:"https://railway.app/project/e585e30f-3275-44d1-9673-6e1e87543a5f/service/a116771e-0ab8-4160-9714-aca6bad17b11/"});

export const SendMessage = (data)=> API.post("/message",data);

import axios from 'axios';
export const API = axios.create({baseURL:"https://portfolio-server-production.up.railway.app/"});

export const SendMessage = (data)=> API.post("/message",data);

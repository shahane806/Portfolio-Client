import axios from 'axios';
export const API = axios.create({baseURL:"http://localhost:5000/"});

export const SendMessage = (data)=> API.post("/message",data);

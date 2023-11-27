import axios from 'axios';
export const API = axios.create({baseURL:"https://localhost:3000/"});

export const SendMessage = (data)=> API.post("/message",data);

import axios from 'axios';


const api = axios.create({baseURL: "https://project-leagueground.onrender.com/"});


export const getProfile = (userName) => api.get(`/profile/${userName}`)
export const updateProfile = (userName) => api.post(`/profile/${userName}`)
export const getRanking = () => api.get('/ranking')
import axios from 'axios';

const ombd = axios.create({
    baseURL: "https://www.omdbapi.com/",
    timeout: 15000,
    params: {
        apikey: "fe06b769"
    }
});

export  {ombd};

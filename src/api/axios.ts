// api/axios.ts
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:8081/bbek/', // or your API base
  headers: {
    'Content-Type': 'application/json',
  },
});



export default instance;
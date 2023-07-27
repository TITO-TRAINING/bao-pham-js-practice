import axios from 'axios';

const INSTANCE = axios.create({
  baseURL: 'http://localhost:3000',
});

export default INSTANCE;

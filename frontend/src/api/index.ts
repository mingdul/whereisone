import axios from 'axios';

// 백엔드 서버 주소
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // 👈 백엔드 서버 주소
  timeout: 10000, // 10초 타임아웃
});

export default apiClient;
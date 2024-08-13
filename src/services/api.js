import axios from "axios";
  // chave api: 41b1f3e2d5344c88f4603f16bab7a13d
  // ?api_key=41b1f3e2d5344c88f4603f16bab7a13d
  
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  })

  export default api;
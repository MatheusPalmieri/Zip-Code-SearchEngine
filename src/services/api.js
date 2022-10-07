import axios from "axios";

// https://viacep.com.br/ws/88338200/json/
// https://viacep.com.br/ws/88338200/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;
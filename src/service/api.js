import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080`,
});

class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  post(url, object) {
    const requestUrl = `${this.apiUrl}${url}`;
    return api.post(requestUrl, object);
  }

  get(url) {
    const requestUrl = `${this.apiUrl}${url}`;
    return api.get(requestUrl);
  }

  put(url, object) {
    const requestUrl = `${this.apiUrl}${url}`;
    return api.put(requestUrl, object);
  }

  delete(url) {
    const requestUrl = `${this.apiUrl}${url}`;
    return api.delete(requestUrl);
  }
}

export default ApiService;

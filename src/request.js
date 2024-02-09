import axios from 'axios';

const API_URL = `http://192.168.212.57:8080`;

const api = axios.create({
  baseURL: API_URL,
});

const request = async payload => {
  let params = '';
  let data = '';
  if (payload.params) {
    params = `${payload.params}`;
  }
  if (payload.data) {
    data = payload.data;
  }

  switch (payload.method) {
    case 'get':
      return await api.get(`/${payload.endPoint}/${params}`);
    case 'post':
      return await api.post(`/${payload.endPoint}/${params}`, data);
    case 'patch':
      return await api.patch(`/${payload.endPoint}/${params}`, data);
    case 'delete':
      return await api.delete(`/${payload.endPoint}/${params}`);
  }
};

export default request;

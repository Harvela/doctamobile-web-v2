import axios from 'axios';

const backendUrl = process.env.API_URL || 'http://localhost:3000';

export const postApi = async (url: string, body: any) => {
  return axios.post(`${backendUrl}/api/${url}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
  });
};

export const patchApi = async (url: string, body: any) => {
  return axios.patch(`${backendUrl}/api/${url}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
  });
};

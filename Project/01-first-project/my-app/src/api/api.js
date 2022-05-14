import * as axios from 'axios';


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '5cb265e5-94b2-4e25-b7c1-89c20d7588fc',
   },
});

export const auth = () => {
   return instance.get('auth/me').then(response => response.data);
};

export const getUsers = (selectedPage, usersPerPage) => {
   return instance.get(`users?page=${selectedPage}&count=${usersPerPage}`).then(response => response.data);
};

export const follow = (userId) => {
   return instance.post(`follow/${userId}`).then(response => response.data);
};

export const unfollow = (userId) => {
   return instance.delete(`follow/${userId}`).then(response => response.data);
};

import Axios from 'axios';

const instance = Axios.create({
  timeout: 5000
});

// export function request(params, options = {}) {
//   return new Promise((resolve, reject) => {
//     instance
//       .request(params)
//       .then((result) => {
//         resolve(result);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

instance.interceptors.request.use((config) => {
  return config;
});
instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;

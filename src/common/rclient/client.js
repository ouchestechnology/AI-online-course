import axios from 'axios';

let config = {baseURL: settings.apiUrl,
  timeout: 60000,
  headers: {
    'Device-Type': '',
    'Device-Serial': '',
    'Device-Description': ''
  }
};
let instance = axios.create(config);

instance.interceptors.response.use((response) => {
  // Do something with response data
  
  return response;
}, (error) => {
  
  if(error.response.status == 401  && error.response.data.Data){
    
  }

  if(error.code === 'ECONNABORTED'){
      
      alert("Can't connect to Xend Network");
      
  }
  return Promise.reject(error);
});


export default instance;
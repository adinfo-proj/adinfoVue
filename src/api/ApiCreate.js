import axios from 'axios';

const instance = axios.create ({
  baseURL: 'http://dbfactory.kr:30000'
});

export default instance;
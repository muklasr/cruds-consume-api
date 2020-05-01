import axios from 'axios';

export default axios.create({
  baseURL: `http://wayangapi.herokuapp.com/api`
});

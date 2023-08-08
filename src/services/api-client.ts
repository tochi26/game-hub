import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rawg.io/api',
});

instance.defaults.params = {
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
};

export default instance;

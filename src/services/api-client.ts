import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'bacc85fd0c944d9daa20c38d575beb2a'
    }
})


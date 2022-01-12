import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'INSERT YOUR OWN CLIENT-ID KEY',
  },
});

// Get your own Client-ID key for Unsplash API using this link :  https://unsplash.com/documentation

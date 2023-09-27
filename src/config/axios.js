import axios from 'axios';

const instance = axios.create({
     // THE API (cloud function) URL
    baseURL: "https://us-central1-clone-fae3f.cloudfunctions.net/api"
              // "http://localhost:5001/clone-fae3f/us-central1/api"
})

export default instance;
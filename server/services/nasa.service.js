import axios from 'axios';

export class NasaService {
    constructor() {
        this.KEY = process.env.NASA_API_KEY || '';
        this.APOD_ADRESS = 'https://api.nasa.gov/planetary/apod';
        this.IMAGE_VIDEO_ADDRESS = 'https://images-api.nasa.gov';
    }

    getMediaOfTheDay() {
        return axios.get(`${this.APOD_ADRESS}?api_key=${this.KEY}`);
    }

    getMediaSearchResults(query) {
        return axios.get(`${this.IMAGE_VIDEO_ADDRESS}/search?q=${query}`);
    }


}

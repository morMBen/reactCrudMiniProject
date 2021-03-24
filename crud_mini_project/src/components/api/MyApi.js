import axios from 'axios';

const MyApi = async () => {
    const response = await axios.get('https://605b218e27f0050017c063ab.mockapi.io/cars')
    return response;
}
export default MyApi;
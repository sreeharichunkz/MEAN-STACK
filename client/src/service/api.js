import axios from 'axios';

export const getNews=async ()=>{
    const URL='https://localhost:8000';
    try{
        return await axios.get(`${URL}/news`);
    } catch(error){
        console.log('Error calling while getting news api ', error);
    }
}


import { data } from '../constants/data.js';
import News from '../model/new-schema.js';

export const getNews=async (request, response)=>{
    try {

        let data=News.find({});
        response.status(200).json(data);
    } catch(error){
        response.status(500).json({message:data.message})

    }


}
import {useEffect} from 'react';
import {Box} from '@mui/material';
import {getNews} from '../service/api';

const Articles=()=>{

    useEffect(()=>{
        dailyNews();


    }, []);

    const dailyNews=async () =>{
        let response=await getNews();
        console.log(response.data);
    }



    return(
        <Box>

        </Box>
    )
}
export default Articles;
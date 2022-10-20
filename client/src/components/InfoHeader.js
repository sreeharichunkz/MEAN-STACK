import {styled,Box,Typography} from '@mui/material';

const Container =styled(Box)`
background:#f44336;
color:#FFFFFF;
height:48;
display:flex;
marginBottom:30;
align-items:center;`

const Image =styled('Img')({
    height:34,

    '&:last-child':{
        margin:'0 50px 0px 20px'
    }
})

const Text=styled(Typography) `
font-size:14px;
font-weight:300;
margin-left:50px;
`

const InfoHeader =()=>{
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return(
        <Container>
            <Text>
                For best experience use inshots app on your smartphone
            </Text>
            <Box style={{display:'flex',marginLeft:'auto'}}>
                <Image src={appleStore} alt="applestore" />
                <Image src={googleStore} alt="googlestore" />
            </Box>
        </Container>


    )
}
export default InfoHeader
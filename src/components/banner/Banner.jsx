import { Box, Button, Stack, Typography, styled } from "@mui/material"
import "./Banner.css";
import { redirect } from "react-router-dom";

const TrainingButton = styled(Button)({
    backgroundColor: 'linear-gradient(0deg, rgba(34,195,192,1) 0%, rgba(3,96,75,1) 100%)',
    borderColor: '#108643',
});

const TutoButton = styled(Button)({
    backgroundColor: 'transparent',
    borderColor: '#108643',
    color: '#108643',
    fontSize: "20px",
    padding:"15px 20px",
    transition:"ease-in all 0.3s",
    '&:hover':{
        borderColor: '#f9f9f9',
        color:"#f9f9f9",
        letterSpacing: "1px",
        transition:"ease-in all 0.3s"
    }
})

const Banner = () => {

    const go = (url)=>{
        redi
    }
    
  return (
    <Box
    className='banner'
        sx={{
            width:"100%",
            height:{md:"68vh"},
            display:"flex",
            justifyContent:'center',
            alignItems:"center"
        }}
    >
        <Stack direction={'row'} sx={{display:"flex", justifyContent:"space-between", width:"80%"}} >
            <Box maxWidth={'50%'} pt={20}>
                <Typography color={"white"} variant="h3">
                    <span className="ronasdev">Ronasdev</span> <br />
                    Nous vous rendons la connaissance buvable 
                </Typography>
                <p className="principal">
                    Ouvrez une nouvelle porte vers le future numerique grâce à notre meilleure stratégies d'explications et de suivi dans nos défferentes formations
                </p>
                <Stack direction={'row'} gap={2}>
                    <Button onClick={(e)=> go('/formations')} variant="contained" className="trainingButton" sx={{
                            fontSize:"20px", padding:"15px 20px",transition: 'ease-in all 0.3s'
                        }} >
                        Découvrir les formations
                    </Button>
                    <TutoButton variant="outlined">Voir les tutoriels</TutoButton>
                </Stack>
            </Box>
            <div className="right">
                
            </div>
        </Stack>
    </Box>
  )
}

export default Banner
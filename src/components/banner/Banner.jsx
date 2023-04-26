import { Box, Button, Stack, Typography, styled } from "@mui/material"
import "./Banner.css";
import { Link } from "react-router-dom";


const TutoButton = styled(Button)({
    backgroundColor: 'transparent',
    borderColor: '#108643',
    color: '#108643',
    fontSize: "16px",
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

    
  return (
    <Box
    className='banner'
        sx={{
            width:"100%",
            height:{md:"78vh"},
            display:"flex",
            justifyContent:'center',
            alignItems:"center",
            overFow: "hidden",
        }}
    >
        <Stack direction={'row'} sx={{display:"flex", justifyContent:"space-between", width:"80%"}} >
            <Box maxWidth={'60%'} pt={5}>
                <Typography color={"white"} variant="h3">
                    <span className="ronasdev">Ronasdev</span> <br />
                    Nous vous rendons la connaissance buvable 
                </Typography>
                <p className="principal">
                    Ouvrez une nouvelle porte vers le future numerique grâce à nos
                    meilleures stratégies d'explications dans nos défferentes formations et notre coaching taillé sur mesure
                </p>
                <Stack direction={'row'} gap={2}>
                    <Link to={"/formations"} color="inherit">
                        <Button variant="contained" className="trainingButton" sx={{
                                fontSize:"16px", padding:"15px 20px",transition: 'ease-in all 0.3s'
                            }} >
                            Découvrir les formations
                        </Button>
                    </Link >
                    <Link to={'/tutoriels'} color="inherit">
                        <TutoButton variant="outlined">Voir les tutoriels</TutoButton>
                    </Link>
                </Stack>
            </Box>
            <div className="right">
                
            </div>
        </Stack>
    </Box>
  )
}

export default Banner
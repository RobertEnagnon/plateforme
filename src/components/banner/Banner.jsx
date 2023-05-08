import { Box, Button, Stack, Typography, styled } from "@mui/material"
import "./Banner.css";
import { Link } from "react-router-dom";


const TutoButton = styled(Button)({
    backgroundColor: 'transparent',
    borderColor: '#0F2027',
    color: '#0F2027',
    fontSize: "20px",
    padding:"15px 20px",
    whiteSpace:'nowrap',
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
            overflow: "hidden",
        }}
    >
        
        <Stack direction={'row'} sx={{display:"flex", justifyContent:"space-between", alignItems:'center', width:"80%", minHeight:{md:'78vh'}}}>
            <Box maxWidth={'65%'} >
                <Typography color={"white"} variant="h3">
                    <span className="ronasdev">Ronasdev</span> <br />
                    Nous vous rendons la connaissance buvable 
                </Typography>
                <p className="principal">
                    Ouvrez une nouvelle porte vers le future numerique grâce à nos
                    meilleures stratégies d'explications dans nos défferentes formations et notre coaching pratique, taillé sur mesure
                </p>
                <Stack direction={'row'} gap={2}>
                    <Link to={"/formations"} color="inherit">
                        <Button variant="contained" className="btnFirst" sx={{
                                 padding:"15px 20px"
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
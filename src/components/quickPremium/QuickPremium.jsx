import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import './QuickPremium.css'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '25px',
    textAlign: 'center',
    color: "#6d6875",
  }));

const QuickPremium = () => {
    const [premium, setPremium] = useState(3)
    const [premiumType, setPremiumType] = useState("mois")

    const handlePremium = (e)=>{
        const value = e.target.value === 'month' ? 3: 30;
        const type = e.target.value === 'month' ? "Mois": "An";
        setPremium(value)
        setPremiumType(type);
    }

  return (
    <Box  className="quickPremium"  >
        <Stack sx={{width:"50%", justifyContent:'center'}} direction={'column'}>
            <Box>
                <Typography variant='h4'>Devenir premium</Typography>
                <p>Devenir premium sur Ronasdev, c'est soutenir la création de nouveaux contenus 
                    chaque semaine, rejoindre nos canaux de partages privés et accéder à du contenu exclusif pour apprendre et 
                    s'améliorer (comme le téléchargement des vidéos et des sources, accès à des contenus exclusifs et aux codes de nos projets).
                </p>
            </Box>
            <Stack direction='column' > 

                <FormControl >
                    <FormLabel id="premium">{premium}€</FormLabel>
                    <RadioGroup onChange={handlePremium} row aria-labelledby="premium" name="premium" defaultValue="month" style={{display:"flex",justifyContent:"center"}}>
                        <FormControlLabel value="month" control={<Radio  size="large" sx={{color: "#108643",'&.Mui-checked': {color: "#ecf8f8",},}}/>} label="1 mois" />
                        <FormControlLabel value="year" control={<Radio size="large"sx={{color: "#108643",'&.Mui-checked': {color: "#ecf8f8",},}}/>} label="1 an" />
                    </RadioGroup>
                </FormControl>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent:'center', fontSize:'20px'}}>
                    <Grid item xs={6}>
                        <Item>Visionner les tutoriels <Typography variant='h5'>En Avance</Typography></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Voir les vidéos <Typography variant='h5'>premium</Typography></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><Typography variant='h5'>Télécharger</Typography>les vidéos</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><Typography variant='h5'>Télécharger</Typography>les codes sources</Item>
                    </Grid>
                    <Link to={"/premium"} color="inherit">
                            <Button variant="contained" className="btnFirst" sx={{
                                    padding:"15px 60px",margin: "20px 0"
                                }} >
                            Devenir Premium (<span>1 {premiumType}</span>)
                            </Button>
                        </Link >
                </Grid>
            </Stack>
        </Stack>
    </Box>
  )
}

export default QuickPremium
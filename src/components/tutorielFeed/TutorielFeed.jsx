import { Box, Stack, Typography,Tab } from '@mui/material'
import {TabContext,TabList}   from '@mui/lab'
import './TutorielFeed.css'
import { useState } from 'react';
import TutoFeedParts from '../tutoFeedParts/TutoFeedParts';

import LearningImg from '../../assets/images/learning_sketching.png'
import ProgrammingImg from '../../assets/images/Programming.png'


const TutorielFeed = () => {
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='tutorielFeed'>
        <Stack sx={{width:"70%", justifyContent:'center'}} direction={'column'}>
            <Typography variant='h4' className='title'>
                <span>Apprendre grâce à</span>  <br />
                <span>des tutoriels gratuits de découverte des technos et des pratiques sur ces dernières </span>
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1' }} mt={4}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',textAlign:'center' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{textAlign:'center'}}>
                            <Tab label="Vidéos de formations gratuits" value="1" />
                            <Tab label="Vidéos pratiques gratuites" value="2"  />
                        </TabList>
                    </Box>
                    <TutoFeedParts value={1} image={ProgrammingImg} description={`
                       Nous mettons à votre disposition des formations gratuites pour apprendre de A à Z des nouvelles technologies 
                       et langages ou pour découvrir des nouvels outils ? 
                    `} />
                    <TutoFeedParts value={2} image={LearningImg} description={`
                        Vous cherchez une formation complète pour apprendre de A à Z ou une vidéo pour découvrir un nouvel outil ? Vous devriez trouver votre bonheur
                    `} />

                </TabContext>
            </Box>
        </Stack>
    </Box>
  )
}

export default TutorielFeed
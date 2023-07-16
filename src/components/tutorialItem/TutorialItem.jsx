import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';


function TutorialItem({tutorial}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={tutorial.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={tutorial.imageUrl}
                alt={tutorial.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {tutorial.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Catégorie : {tutorial.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Niveau : {tutorial.level}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Durée : {tutorial.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
  )
}

export default TutorialItem
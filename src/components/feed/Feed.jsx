import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Strategy from "../Strategy/Strategy";
import "./Feed.css";
import TailorMade  from '../../assets/images/tailor-made-software.png';
import Mentoring  from '../../assets/images/mentoring.png';
import Community  from '../../assets/images/Community_re.png';

const Feed = () => {
  return (
    <Stack direction={'column'} gap={'2'} className="feed">
        <div className="top">
            <Typography className="title" variant="h4" sx={{textAlign:"center"}}>
                <span>Devenir programmeur grâce à</span>  <br />
                <span>notre soutien et notre suivi </span>
            </Typography>
            <p className="paragraph">
                Venez explorez l'art de la programmation avec nos formations en développement informatique,
                oû chaque cours est soigneusement conçu pour vous guider vers l'excellence technique et vous aider à 
                atteindre vos objectifs professionnels les plus ambitieux.
            </p>
        </div>
        <Stack direction="row" gap="1" className="bottom" sx={{maxWidth:"80%"}}  mt={5}>
            <Strategy src={TailorMade} title="Une formation taillée sur mesure" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vitae. ici</Strategy>
            <Strategy src={Mentoring} title="Un coaching hebdomadaire personnalisé" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vitae. ici</Strategy>
            <Strategy src={Community} title="Une communauté d'entraide" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vitae. ici</Strategy>
        </Stack>
    </Stack>
  )
}

export default Feed
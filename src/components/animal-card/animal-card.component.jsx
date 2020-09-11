import React from 'react';
import {Card, CardContent, CardMedia, Typography, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import IconComponent from '../icon/icon.component';
import noPhoto from '../../assets/images/no-photo.png';
import './animal-card.styles.css';

const AnimalCard = ({animal}) => {

    return (
        <Card className='card'>
            <CardContent>
                <CardMedia component='img' alt='animal image' heigh='140' image={animal.photos[0] ? animal.photos[0].medium : noPhoto} className='cardMedia' />
                <Typography gutterBottom className='nameText'>
                    {animal.name}
                </Typography>
                <Grid container direction='row' justify='center'>
                   <IconComponent type={animal.type}/>
                   <IconComponent type={animal.gender}/>
                   <IconComponent type={animal.contact.address.country}/>
                </Grid>
                <Link to={`/animal-page/${animal.id}`} className='link'>Find out more <span className='arrow'>&#x2192;</span> </Link>
            </CardContent>
        </Card>
    )
}

export default AnimalCard;
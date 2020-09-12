import React from 'react';
import {Typography, Card, CardContent} from '@material-ui/core';
import IconComponent from '../icon/icon.component';
import './about-container.styles.scss'

const AboutCountainer = ({animal}) => {
    // Main info about animal
    return (
        
         <div>

       { animal ? <section>
            
        <h1>{animal.name}</h1>
       
       <div className='info-breadcrumbs'>
       <Typography variant='body1' className='littleBox'>
         {animal.gender}
        </Typography>
        <Typography variant='body1' className='littleBox'>
             {animal.age}  
        </Typography>
        <Typography variant='body1' className='littleBox'>
           {animal.size}     
        </Typography>
        
        <Typography variant='body1' className='littleBox'>
         {animal.species}
        </Typography>
        </div>

        <div className='aboutContainer'> 
        <Card className='cardContainer'>
            <CardContent>
                <div className='iconContainer'>
                    <IconComponent type='Paw' className='cardIcon' />
                </div> 
        <h1 className='cardHeader'>About</h1>
        <Typography variant='body1' className='aboutItem'>
           Spayed/neutered:  <span className='aboutSpan'>{animal.attributes.spayed_neutered ? 'Yes' : 'No'}</span>  
        </Typography>
        <Typography variant='body1' className='aboutItem'>
           House trained:  <strong>{animal.attributes.house_trained ? 'Yes' : 'No'}</strong>  
        </Typography>
        <Typography variant='body1' className='aboutItem'>
          Special needs:  <strong>{animal.attributes.special_needs ? 'Yes' : 'No'}</strong>  
        </Typography>
        <Typography variant='body1' className='aboutItem'>
          Breed:  <strong>{animal.breeds.primary}</strong>  
        </Typography>
        </CardContent>
        </Card>
        </div>
        
       </section> : null }
        </div> 
        
        
        
    )
}

export default AboutCountainer;
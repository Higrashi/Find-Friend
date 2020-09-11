import React from 'react';
import {Typography, Card, CardContent} from '@material-ui/core';
import IconComponent from '../icon/icon.component';
import './org.styles.css';


const OrgContainer = ({org}) => {

    return (
        <div className='orgContainer'>

          { org ? <section>
          
          <div className='orgInfo'>
             <Card className='cardContainer'>
                <CardContent>
                <div className='iconContainer'>
                     <IconComponent type='House' className='cardIcon' />
                     </div> 
            <h1 className='org-h1'>Organization</h1> 
            <Typography variant='body1' className='aboutItem'>
                  Name: <strong>{org.name}</strong> 
                  </Typography>  
                  <Typography variant='body1' className='aboutItem'>
                     Phone:  <strong>{ org.phone ? org.phone : "None" }</strong> </Typography>
                  <Typography variant='body1' className='aboutItem'>
                   Email:     <strong> <a href={`mailto:${org.email}`} className='orgLink'>{org.email}</a>   </strong> 
                    </Typography> 
                    </CardContent></Card>
             </div>  
       
            
             <div className='orgInfo'>
             <Card className='cardContainer'>
                <CardContent>
                <div className='iconContainer'>
                     <IconComponent type='Visit' className='cardIcon' />
                     </div> 
            <h1>Adress</h1> 
            <Typography variant='body1' className='aboutItem'>
                  Country: <strong>{org.address.country}</strong> 
                  </Typography>
                  <Typography variant='body1' className='aboutItem'>
                     State:  <strong>{ org.address.state}</strong> </Typography>
                
                  <Typography variant='body1' className='aboutItem'>
                     City:  <strong>{ org.address.city}</strong> </Typography>
                  <Typography variant='body1' className='aboutItem'>
                   Postcode: <strong> {org.address.postcode} </strong> 
                    </Typography>
                    </CardContent>
                    </Card>    
             </div>  
        
             </section> : null }
    </div>
    )
}

export default OrgContainer
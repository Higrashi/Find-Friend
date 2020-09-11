import React from 'react';
import {Container, Grid} from '@material-ui/core';
import NoImage from '../../assets/images/no-image.jpg';
import './photo-box-mobile.styles.scss';

const PhotoBoxMobile = ({photos, onClick}) => {

    return (
        <div className='photo-box-mobile'>
           
            {
                photos[0] ? 
                <Container>
                    <img src={photos[0].medium} className='main-photo-mobile' onClick={onClick} id={0}/>
                    </Container>
                    : 
                <img src={NoImage} alt="no-image" className='no-page-photo' />
            } 

        {
                photos[1] ? 
                <Container className='photo-mobile-row'>
                    {
                        photos.map((photo, index) => {
                          return  index != 0 ?  <img src={photo.medium} className='photo-mobile' onClick={onClick} id={index}/> : null
                        //   return  <img src={photo.medium} className='photo-mobile'/>
                        })
                    }
                 
                    </Container>
                    : 
                      null
            } 
        </div>
    )
}

export default PhotoBoxMobile;
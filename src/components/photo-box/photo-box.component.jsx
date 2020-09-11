import React from 'react';
import NoImage from '../../assets/images/no-image.jpg'
import './photo-box.styles.scss';

const PhotoBox = ({photos, onClick}) => {

    

    return (
        <div className='photo-box'>

            {
                 photos[0] ? 
                 <div className='photo-box-container' > 
                     {photos.map((photo, index) => {
                             return <img src={photo.medium} alt="animal-photo" className='page-photo' onClick={onClick} id={index}/>
                         })
                     }
                     </div> :  <img src={NoImage} alt="no-image" className='no-page-photo' />
            }
            
        </div>
    )
}

export default PhotoBox;
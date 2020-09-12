import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import {ReactComponent as PinIcon} from '../../assets/icons/pin.svg'
import './google-map.styles.css'

const GoogleMap = ({location}) => {

    // Google map component, show up only if there is location from geocode

     // Location state 
     const [defLocation,setDefLocation] = useState({
         lat: location.lat,
         lng: location.lng
     }) 

    return (
        <div className='mapContainer'>
            {
                location ?
                <GoogleMapReact 
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
                defaultCenter={defLocation}
                defaultZoom={11}
            >
               <PinIcon lat={location.lat} lng={location.lng} className="pinIcon" /> 
            </GoogleMapReact> : null
            }
            
        </div>
    )
}

export default GoogleMap;
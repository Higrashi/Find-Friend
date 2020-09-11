import React,{useState, useEffect} from 'react';
import {getAnimal, getOrganization} from '../../api/api';
import {getLocation} from '../../api/geocode';
import {useWindowDimensions} from '../../components/window-hook/window-dimension-hook';
import {Container, Grid} from '@material-ui/core';
import Spinner from '../../components/spinner/spinner.component';
import PhotoBox from '../../components/photo-box/photo-box.component';
import PhotoBoxMobile from '../../components/photo-box-mobile/photo-box-mobile.component';
import Modal from '../../components/modal/modal.component';
import AboutContainer from '../../components/about-container/about-container.component';
import OrgContainer from '../../components/org/org.component';
import GoogleMap from '../../components/google-map/google-map.component';

import './animal-page.styles.css';


const AnimalPage = (props) => {
    let [animal, setAnimal] = useState()
    let [id, setId] = useState()
    let [org, setOrg] = useState()
    let [location, setLocation] = useState({})
    let [modal, setModal] = useState({
        active: false,
        src: ''
    })
    let animalID = props.match.params.id;
    const {width} = useWindowDimensions();
    console.log('This is ID --->',props.match.params.id)
    useEffect(() => {
        const fetchAnimal = async () => {
            const fetchedAnimal = await getAnimal(animalID);
            setAnimal(fetchedAnimal.data.animal)
            setId(fetchedAnimal.data.animal.organization_id)
        }
        fetchAnimal()
        console.log(id, org) 
    },[])

    
    useEffect(() => {
        const getOrg = async () => {
                
            try {
              let resp = await getOrganization(id)
              setOrg(resp.data.organization)
              console.log(id, org)
            } catch (err) {
              console.log(err)
            }
             
    }
      getOrg()
      console.log('data===>',org)
    },[id])

    useEffect(() => {
        
            if(org) {
                const getAddres = async () => {
                   try {
                    const loc = await getLocation(org.address.address1)
                    setLocation(loc.results[0].geometry.location)
                     } catch(err) {
                         console.log(err)
                     }
                  
                }
                
                getAddres()
            }
        
           
        
      
     
       
    },[org])
    console.log(animal)
   
    const handlePhoto = (e) => {
        let imgId = e.target.id
        
       
     
        setModal({ active: true, src: animal.photos[imgId].full})
        
    }

    const handleClose = () => {
        setModal(() =>{
            return {
                active: false,
                src: ''
            }
        })
    }
   
    return (
        <Container maxWidth='lg'>
            <Modal active={modal.active} src={modal.src} onClose={handleClose} />
            <div className='animalPage'>

            <Grid container direction='row'  className='mainGrid'>
                {
                    !animal ?
                        <Spinner /> : null
                }

            {
                animal ? 
                <Grid item lg={3} md={3} sm={12} xs={12}>
                   
                   {
                       width > 1000 ? <PhotoBox photos={animal.photos} onClick={handlePhoto} /> : 
                       <PhotoBoxMobile photos={animal.photos} onClick={handlePhoto} />
                   }
                  
                       
                    
                   </Grid>  : null
                }

                <Grid item lg={9} md={9} sm={12} xs={12} className='infoContainer'>
                    
                   
                   <AboutContainer animal={animal} /> 
                        
                    <OrgContainer org={org}/>
                        
                       
                     {
                         location.lat ?
                         <GoogleMap location={location} /> :
                         null
                     }   
                 
                    
                   
                </Grid>

            </Grid>
        </div>
        </Container>
        
    )
}

export default AnimalPage;
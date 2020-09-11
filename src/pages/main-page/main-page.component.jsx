import React from 'react';
import CatImage from '../../assets/images/main-logo.jpg';
import IconComponent from '../../components/icon/icon.component';
import IconInfo from '../../components/icon-info/icon-info.component';
import {Card, CardContent} from '@material-ui/core';
import './main-page.styles.scss';

const MainPage = () => {

    
    return (
        <div className='main-page'>
            
            <div className="logo-container">
                <div className="main-image-container">
                    <div className="image-box">

                        </div>
                </div>
               

                <div className="text-box">
                <div className="text-info">
                    <div className="main-icon-box">
                        <IconComponent type='Pawgreen' />
                    </div>
                  
                    <h1>Find Friend</h1>
                    <p>Find animals that search a new home among over 150,000 profiles and nearly 11,000 animal shelters and adoption organizations across from the USA, Canada, and Mexico</p>   
                   <IconInfo type='App' text='Daily updated profiles'/>
                   <IconInfo type='DogGreen' text='Find out important information about animals'/>
                   <IconInfo type='VisitGreen' text='Learn about shelters and adoption organizations'/>
                    
                   
                    
                    </div>
                     </div>
                
            </div>

           <div className="bottom-info">
               <div className="bottom-text">
                   <h1>About this app</h1>
                   <p>This app use information from databases of Petfinder organization. If you want find out more use <a href="https://www.petfinder.com/" target='_blank' className='main-petfinder-link'>this link</a></p>    
               </div>
           </div>
        </div>
    )
}

export default MainPage;
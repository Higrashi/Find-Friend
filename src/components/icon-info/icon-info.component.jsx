import React from 'react';
import IconComponent from '../icon/icon.component';

import './icon-info.styles.css';


const IconInfo = ({type, text}) => {

    return (
        <div className='small-icon-box'>
            <div className="icon-info-container">
                <IconComponent type={type} width='15px'/>
            </div>

    <span className='small-icon-span'>{text}</span>  
        </div>
    )
}

export default IconInfo;
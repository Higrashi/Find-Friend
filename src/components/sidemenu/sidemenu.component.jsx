import React, {useState} from 'react';
import {InputLabel,MenuItem,FormControl,Select,Button} from '@material-ui/core';
import {useWindowDimensions} from '../window-hook/window-dimension-hook';
import IconComponent from '../icon/icon.component';
import "./sidemenu.styles.scss";

function SideMenu ({onChange, query, onSubmit, type}) {

    // Side menu open/close state
    const [isCliked, setIsclicked] = useState(!false);
    // current screen width 
    const {width} = useWindowDimensions();
    // Side menu open/close handler
    const handleClick = () => {
     setIsclicked(!isCliked);
    }

    // handle search submit
    const handleSubmit = () => {
        onSubmit()
        setIsclicked(!isCliked);
    }
 

    return (
        <div className="side-menu">

        
           
        <div className={`side-nav ${isCliked ? 'sidenav-active' : ''}`} >
        <a href='#' className="close-btn" onClick={handleClick}>&times;</a>

        
            <div>

            {
                type ?
                <FormControl >
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.type}
                    onChange={onChange}
                    className='select-box'
                    name='type'
                >
                  
                    <MenuItem value='Cat'>Cat</MenuItem>
                    <MenuItem value='Dog'>Dog</MenuItem>
                    <MenuItem value='Horse'>Horse</MenuItem>
                    <MenuItem value='Bird'>Bird</MenuItem>
                    <MenuItem value='Rabbit'>Rabbit</MenuItem>
                    <MenuItem value='Small &amp; Furry'>Small &amp; Furry</MenuItem>
                    <MenuItem value='Scales, Fins &amp; Other'>Scales, Fins &amp; Other</MenuItem>
                    <MenuItem value='Barnyard'>Barnyard</MenuItem>

                    
                </Select>
            </FormControl> :
            null
            }

            <FormControl >
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.gender}
                    onChange={onChange}
                    className='select-box'
                    name='gender'
                >
                  
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    
                </Select>
            </FormControl>

            <FormControl >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.age}
                    onChange={onChange}
                    className='select-box'
                    name='age'
                >
                   
                    <MenuItem value='baby'>Baby</MenuItem>
                    <MenuItem value='young'>Young</MenuItem>
                    <MenuItem value='adult'>Adult</MenuItem>
                    <MenuItem value='senior'>Senior</MenuItem>
                    
                </Select>
            </FormControl>

            <FormControl >
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.size}
                    onChange={onChange}
                    className='select-box'
                    name='size'
                >
                  
                    <MenuItem value='small'>Small</MenuItem>
                    <MenuItem value='medium'>Medium</MenuItem>
                    <MenuItem value='large'>Large</MenuItem>
                    <MenuItem value='xlarge'>xLarge</MenuItem>
                    
                </Select>
            </FormControl>

          
            </div> 
            
        
            <Button variant="contained" onClick={handleSubmit} className='sidemenu-btn'>
                 Submit
                </Button>
            
         </div> 
        
        <div className={width > 1000 ? `side-menu-button` : 'side-menu-button-mob'} onClick={handleClick}>
        
           
            <IconComponent type={width > 1000 ? `Search` : "SearchBlack"} className='filter-icon'/>
            
            </div> 
   

      
       
          
        </div>
    )
}



export default SideMenu;
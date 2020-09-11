import React from 'react';

import {ReactComponent as CatIcon} from '../../assets/icons/cat.svg';
import {ReactComponent as DogIcon} from '../../assets/icons/dog.svg';
import {ReactComponent as HorseIcon} from '../../assets/icons/animal.svg';
import {ReactComponent as RatIcon} from '../../assets/icons/rat.svg';
import {ReactComponent as RabbitIcon} from '../../assets/icons/rabbit.svg';
import {ReactComponent as BirdIcon} from '../../assets/icons/bird.svg';
import {ReactComponent as BarnIcon} from '../../assets/icons/barn.svg';
import {ReactComponent as LizardIcon} from '../../assets/icons/lizard.svg';
import {ReactComponent as MaleIcon} from '../../assets/icons/male.svg';
import {ReactComponent as FemaleIcon} from '../../assets/icons/gender.svg';
import {ReactComponent as UnknownIcon} from '../../assets/icons/circle.svg';
import {ReactComponent as UsaFlag} from '../../assets/icons/usa-flag.svg';
import {ReactComponent as CanadaFlag} from '../../assets/icons/canada-flag.svg';
import {ReactComponent as MexicoFlag} from '../../assets/icons/mexico-flag.svg';
import {ReactComponent as FilterIcon} from '../../assets/icons/filter.svg';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';
import {ReactComponent as SearchIconBlack} from '../../assets/icons/search-black.svg';
import {ReactComponent as PawIcon} from '../../assets/icons/paw.svg';
import {ReactComponent as HouseIcon} from '../../assets/icons/house.svg';
import {ReactComponent as VisitIcon} from '../../assets/icons/visit.svg';
import {ReactComponent as PawGreen} from '../../assets/icons/paw-green.svg';
import {ReactComponent as DogGreen} from '../../assets/icons/dog-green.svg';
import {ReactComponent as AppIcon} from '../../assets/icons/app.svg';
import {ReactComponent as VisitGreen} from '../../assets/icons/visit-green.svg';
import './icon.styles.css';




const IconComponent = ({type, width}) => {
  const iconTypes = {
    Cat: CatIcon,
    Dog: DogIcon,
    Horse: HorseIcon,
    Bird: BirdIcon,
    Rabbit: RabbitIcon,
    Barnyard: BarnIcon,
    SmallFurry: RatIcon,
    ScalesFinsOther: LizardIcon,
    Male: MaleIcon,
    Female: FemaleIcon,
    Unknown: UnknownIcon,
    US: UsaFlag,
    MX: MexicoFlag,
    CA: CanadaFlag,
    Filter: FilterIcon,
    Search: SearchIcon,
    SearchBlack: SearchIconBlack,
    Paw: PawIcon,
    House: HouseIcon,
    Visit: VisitIcon,
    Pawgreen: PawGreen,
    DogGreen: DogGreen,
    App: AppIcon,
    VisitGreen: VisitGreen
} 


  let Icon;
  Icon = iconTypes[type.replace(/\s/g, "").replace(/&/g,"").replace(/,/g,"")] 
  

  
  
    return (
      <div>
        <Icon className='animal-icon' style={ width ? {width: width} : null }/>  
      </div>
      
    )
}

export default IconComponent;
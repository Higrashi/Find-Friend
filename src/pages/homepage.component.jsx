import React,{useEffect, useState} from 'react';
import {getOptionalAnimal, getTypes} from '../api/api';
import {Container, Grid} from '@material-ui/core';
import SideMenu from '../components/sidemenu/sidemenu.component';
import AnimalCard from '../components/animal-card/animal-card.component';
import PaginationBox from '../components/pagination/pagination.component';
import Spinner from '../components/spinner/spinner.component';

import './homepage.styles.css';

const Homepage = () => {

    const [animals, setAnimals] = useState([]);
    const [pages, setPages] = useState(0);
    const [query, setQuery] = useState({
        type: '',
        gender: '',
        age: '',
        size: ''
    });
    
    useEffect(() => {

     const getAnimals = async () => {
        let animals = await getOptionalAnimal(1, query)
        setAnimals(animals.data.animals)
        setPages(animals.data.pagination.total_pages) 
    }

    getAnimals()
     
    },[])

    const handlePagination = async (e, num) => {
        
        setAnimals([])
        window.scrollTo(0,0)
        let nextAnimals = await getOptionalAnimal(num, query)
       
        setAnimals(nextAnimals.data.animals)
    }
    
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log(e.target)
        setQuery((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async () => {
        console.log(query)
        setAnimals([])
        window.scrollTo(0,0)
        let filter = await getOptionalAnimal(1,query)
        setAnimals(filter.data.animals)
        setPages(filter.data.pagination.total_pages)
       
    }
    const typesOfAnimals = getTypes()
    console.log('Types of animals ====>',typesOfAnimals)
    return (
        <Container maxWidth='lg'>
            
             <div className='homepage'>
             <SideMenu onChange={handleChange} query={query} onSubmit={handleSubmit} type='all'/>
                 <Grid container direction='row' justify='center' className='gridContainer'>
                {
                    animals[0] ?
                        animals.map(animal => {
                            return  <AnimalCard animal={animal} key={animal.id} />
                        }) : <Spinner /> }
                </Grid>
                
                <PaginationBox pages={pages} onChange={handlePagination} />        

             
               
            </div>
        </Container>
       
    )
}

export default Homepage;
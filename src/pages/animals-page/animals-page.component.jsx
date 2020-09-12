import React, {useState,useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import AnimalCard from '../../components/animal-card/animal-card.component';
import PaginationBox from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import SideMenu from '../../components/sidemenu/sidemenu.component';
import {getOptionalAnimal} from '../../api/api';
import './animals-page.styles.css';

const AnimalsPage = ({match}) => {
    // Get animal type from match   
    let matchParam = match.params.type;
    let animalType = '';   
    // If match not equal to all, then make animal type equal to cat or dog
    if(matchParam != 'all') {
        animalType = matchParam.charAt(0).toUpperCase() + matchParam.slice(1);  
    }     
    
    // State to keep 20 animals profiles
    const [animals, setAnimals]  = useState([]);
    // State to keep track of pages
    const [pages, setPages] = useState(0);
    // State to keep track of query changes
    const [query, setQuery] = useState({
        type: '',
        gender: '',
        age: '',
        size: ''
       
    });
    // On Component animalType change or query state change make query to Petfinder API
    useEffect(() => {

        setAnimals([]);
        const newQuery = {type: animalType, gender: '',age: '',size: ''};
        
        setQuery((prevState) => {
            return {
                ...prevState,
                type: animalType
            }
        })
        const getAnimals = async () => {
            let animals = await getOptionalAnimal(1, newQuery);
            setAnimals(animals.data.animals);
            setPages(animals.data.pagination.total_pages); 
        }

        getAnimals();
    },[animalType])

 
    // Set current Page
    const handlePagination = async (e, num) => {
        setAnimals([]);
        window.scrollTo(0,0);
        let nextAnimals = await getOptionalAnimal(num,query);
        setAnimals(nextAnimals.data.animals);
    }
    // Handle search params changes
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        setQuery((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }
    // Get data with search params
    const handleSubmit = async () => {
        setAnimals([]);
        window.scrollTo(0,0);
        let filter = await getOptionalAnimal(1,query);
        setAnimals(filter.data.animals);
        setPages(filter.data.pagination.total_pages);
       
    }

     
    

    return (
        <div className='catsPage'>
            
           
            <Container maxWidth='lg'>
            <SideMenu onChange={handleChange} query={query} onSubmit={handleSubmit} type={matchParam != 'all' ? null : 'all'} />
                <Grid container direction='row' justify='center' className='gridContainer'>
                    {
                        animals[0] ?
                        animals.map(animal => {
                            return <AnimalCard animal={animal} key={animal.id} />
                        }) : <Spinner />
                    }
                </Grid>
                <PaginationBox pages={pages} onChange={handlePagination} />
            </Container>
        </div> 
    )
}

export default AnimalsPage;
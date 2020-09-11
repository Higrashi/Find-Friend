import React, {useState,useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import AnimalCard from '../../components/animal-card/animal-card.component';
import PaginationBox from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import SideMenu from '../../components/sidemenu/sidemenu.component';
import {getOptionalAnimal} from '../../api/api';
import './animals-page.styles.css';

const AnimalsPage = ({match}) => {
    
    // This will be page instead cat-page and dogs-page

    // Get animals type to make query
    
    // State to keep 20 animals profiles
    const [cats, setCats]  = useState([]);
    // State to keep track of pages
    const [pages, setPages] = useState(0);
    // State to keep track of query changes
    const [query, setQuery] = useState({
        type: 'animalType',
        gender: '',
        age: '',
        size: ''
       
    });
    // On Component mount make query to Petfinder API
    useEffect(() => {
        const getAnimals = async () => {
            let animals = await getOptionalAnimal(1, query)
            setCats(animals.data.animals)
            setPages(animals.data.pagination.total_pages) 
        }

        getAnimals()
    },[])

    // Handle hange of param from match
    // useEffect(() => {

    //     setQuery(() => {
    //         return {
    //            type: animalType,
    //            gender: '',
    //            age: '',
    //            size: ''
    //         }
    //     })
    //     const newQuery = { type: animalType, gender: '', age: '', size: ''}
    //     setCats([])
    //     const getAnimals = async () => {
    //         let animals = await getOptionalAnimal(1, newQuery)
    //         setCats(animals.data.animals)
    //         setPages(animals.data.pagination.total_pages) 
    //     }

    //     getAnimals()
    // },[animalType])
   
    // Set current Page
    const handlePagination = async (e, num) => {
        setCats([])
        window.scrollTo(0,0)
        let nextAnimals = await getOptionalAnimal(num,query)
       
        setCats(nextAnimals.data.animals)
    }
    // Handle search params changes
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
    // Get data with search params
    const handleSubmit = async () => {
        console.log(query)
        setCats([])
        window.scrollTo(0,0)
        let filter = await getOptionalAnimal(1,query)
        setCats(filter.data.animals)
        setPages(filter.data.pagination.total_pages)
       
    }

    // console.log('This is match ', animalType)
    // console.log('This is Query ', query)
    

    return (
        <div className='catsPage'>
            
           
            <Container maxWidth='lg'>
            <SideMenu onChange={handleChange} query={query} onSubmit={handleSubmit} />
                <Grid container direction='row' justify='center' className='gridContainer'>
                    {
                        cats[0] ?
                        cats.map(animal => {
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
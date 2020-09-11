import React, {useState,useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import AnimalCard from '../../components/animal-card/animal-card.component'
import SideMenu from '../../components/sidemenu/sidemenu.component'
import PaginationBox from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import {getOptionalAnimal} from '../../api/api';
import './dogs-page.styles.css';

const DogsPage = () => {
    //State to keep 20 animals profiles
    const [dogs, setDogs]  = useState([])
     // State to keep track of pages
    const [pages, setPages] = useState(0)
     // State to keep track of query changes
    const [isClicked, setIsClicked] = useState(false)
    const [query, setQuery] = useState({
        type: 'Dog',
        gender: '',
        age: '',
        size: ''
    })
    // On Component mount make query to Petfinder API
    useEffect(() => {
        const getAnimals = async () => {
            let animals = await getOptionalAnimal(1, query)
            setDogs(animals.data.animals)
            setPages(animals.data.pagination.total_pages) 
        }

        getAnimals()
    },[])
    // Set current Page
    const handlePagination = async (e, num) => {
        setDogs([])
        window.scrollTo(0,0)
        let nextAnimals = await getOptionalAnimal(num, query)
       
        setDogs(nextAnimals.data.animals)
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
        setDogs([])
        window.scrollTo(0,0)
        let filter = await getOptionalAnimal(1,query)
        setDogs(filter.data.animals)
        setPages(filter.data.pagination.total_pages)
       
    }

   
    
    return (
        <div className='dogsPage'>
            <SideMenu onChange={handleChange} query={query} onSubmit={handleSubmit}/>
             <Container maxWidth='lg'>
                <Grid container direction='row' justify='center' className='gridContainer'>
                    {
                        dogs[0] ?
                        dogs.map(animal => {
                            return <AnimalCard animal={animal} key={animal.id} />
                        }) : <Spinner />
                    }
                </Grid>
                <PaginationBox pages={pages} onChange={handlePagination} />
            </Container>
        </div> 
    )
}

export default DogsPage;
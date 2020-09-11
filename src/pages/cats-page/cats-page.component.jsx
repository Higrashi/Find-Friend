import React, {useState,useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import AnimalCard from '../../components/animal-card/animal-card.component';
import PaginationBox from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import SideMenu from '../../components/sidemenu/sidemenu.component';
import {getOptionalAnimal} from '../../api/api';
import './cats-page.styles.css';

const CatsPage = ({match}) => {
    //State to keep 20 animals profiles
    const [cats, setCats]  = useState([]);
    // State to keep track of pages
    const [pages, setPages] = useState(0);
    // State to keep track of query changes
    const [query, setQuery] = useState({
        type: 'Cat',
        gender: '',
        age: '',
        size: ''
       
    })
    // On Component mount make query to Petfinder API
    useEffect(() => {
        const getAnimals = async () => {
            let animals = await getOptionalAnimal(1, query)
            setCats(animals.data.animals)
            setPages(animals.data.pagination.total_pages) 
        }

        getAnimals()
    },[])
    
    // Set current Page
    const handlePagination = async (e, num) => {
        setCats([])
        window.scrollTo(0,0)
        let nextAnimals = await getOptionalAnimal(num,query)
       
        setCats(nextAnimals.data.animals)
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
        setCats([])
        window.scrollTo(0,0)
        let filter = await getOptionalAnimal(1,query)
        setCats(filter.data.animals)
        setPages(filter.data.pagination.total_pages)
       
    }

    console.log('This is match ', match)
    
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

export default CatsPage;
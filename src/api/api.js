import {Client} from '@petfinder/petfinder-js';

let client = new Client({apiKey: process.env.REACT_APP_PETFINDER_API_KEY, secret: process.env.REACT_APP_PETFINDER_SECRET_KEY})

export const getAnimals = async (page) => {

    if(!page) {
        return await client.animal.search()
    } else {
        return await client.animal.search({page: page})
    }

  
       
}

// Get animal by id
export const getAnimal = async (id) => {

    try {
        return await client.animal.show(id)
    } catch (err) {
        console.log('Opps, some err', err)
    }

   
}

// Get animals by specific request
export const getOptionalAnimal = async (page, query) => {
    if(page) {
        try {
            const animals = await client.animal.search({page: page, ...query})
            return animals
        } catch (err) {
            console.log(err)
        }
    } else {
        try {
            const animals = await client.animal.search({...query})
            return animals
        } catch (err) {
            console.log(err)
        }
    }
   
}

// Get data of organixation where the animal is contained
export const getOrganization = async (name) => {
    if(name) {
       const response = await client.organization.show(name);
       return response
    }
    
}

// Get animals types
export const getTypes = async () => {
    const response = await client.animalData.types()
    return response

}
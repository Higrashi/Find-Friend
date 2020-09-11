import {Client} from '@petfinder/petfinder-js';
// const petfinderApi = process.env.REACT_APP_PETFINDER_API;
// const petfinderSecret = process.env.REACT_APP_PETFINDER_SECRET;
let client = new Client({apiKey: "msoH5wpzdE229wIRzF4M4PUM61SsKRf8wXzLdGVvPeFLGUvRPb", secret: process.env.REACT_APP_PETFINDER_KEY})

export const getAnimals = async (page) => {

    if(!page) {
        return await client.animal.search()
    } else {
        return await client.animal.search({page: page})
    }

  
       
}

export const getAnimal = async (id) => {

    try {
        return await client.animal.show(id)
    } catch (err) {
        console.log('Opps, some err', err)
    }

   
}

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

export const getOrganization = async (name) => {
    if(name) {
       const response = await client.organization.show(name);
       return response
    }
    
}

export const getTypes = async () => {
    const response = await client.animalData.types()
    return response

}
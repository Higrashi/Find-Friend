import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage("en")
Geocode.setRegion("us")

// Get address from organization data and make it readable for Google Maps

export const getLocation = async (adress) => {
    if(adress) {
        const resp  = await Geocode.fromAddress(adress);
        return resp
    }
   
}
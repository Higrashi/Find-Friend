import Geocode from 'react-geocode';
// const googleApi = process.env.REACT_APP_GOOGLE_MAPS_KEY;
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage("en")
Geocode.setRegion("us")

export const getLocation = async (adress) => {
    if(adress) {
        const resp  = await Geocode.fromAddress(adress);
        return resp
    }
   
}
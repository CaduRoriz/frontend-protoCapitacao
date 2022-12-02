import axios from "axios";

const cepCoords = require("coordenadas-do-cep");
  

export default async function getAdress(cep:string) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(( { data } ) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export async function getCoords(cep:string){

        try{
           const info = await cepCoords.getByCep(cep);

           return {
              lat: info.lat, 
              lon: info.lon, 
           }
        } catch (err) {
           console.log(err)
           return null
        }
     
    
}




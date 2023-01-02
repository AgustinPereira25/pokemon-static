import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: { "Accept-Encoding": "gzip,deflate,compress" } //Necesario para que funcione con version de Axios.
    //Otra opcion: utilizar misma version de Axios que en el curso (yarn add axios@0.25.0 )
});

export default pokeApi;
import { ToastAndroid } from "react-native"
import Axios from "../../configs/axios/Axios.config"

const PokemonList = async (
    limit = 20,
    currentPage = 1,
) => {    
    let offset = (currentPage - 1) * limit;
    try {
        const response = await Axios.get(
            `pokemon?limit=${limit}&offset=${offset}`,
            // {
            //     headers: {
            //         'Authorization': `Bearer ${ JSON.parse(token) }`
            //     }
            // }
        )
        return response.data.results
    } catch (error) {
        // ToastAndroid.show("Terdapat gangguan di server, mohon coba lagi nanti")
        console.log(error)
        return {}
    }        
}

const ImagePokemon = async (name) => {
    
    try {
        const response = await Axios.get(
            `pokemon/${name}`,
            // {
            //     headers: {
            //         'Authorization': `Bearer ${ JSON.parse(token) }`
            //     }
            // }
        )
        return response.data.sprites
    } catch (error) {
        // ToastAndroid.show("Terdapat gangguan di server, mohon coba lagi nanti")
        console.log(error)
        return {}
    }        
}

const DetailPokemon = async (name) => {
    
    try {
        const response = await Axios.get(
            `pokemon/${name}`,
            // {
            //     headers: {
            //         'Authorization': `Bearer ${ JSON.parse(token) }`
            //     }
            // }
        )
        
        return response.data
    } catch (error) {
        // ToastAndroid.show("Terdapat gangguan di server, mohon coba lagi nanti")
        console.log("fetching :",error)
        return {}
    }        
}

const SearchPokemon = async (pokemonName) => {
    
    try {
        const response = await Axios.get(
            `pokemon/${pokemonName}`,
            // {
            //     headers: {
            //         'Authorization': `Bearer ${ JSON.parse(token) }`
            //     }
            // }
        )
        return response.data
    } catch (error) {
        // ToastAndroid.show("Terdapat gangguan di server, mohon coba lagi nanti")
        console.log(error)
        return {}
    }        
}
// https://pokeapi.co/api/v2/pokemon/${pokemonName}


export {
    PokemonList,
    ImagePokemon,
    DetailPokemon,
    SearchPokemon
}
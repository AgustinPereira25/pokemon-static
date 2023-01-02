
const toggleFavorite = ( id: number ) => {

    console.log('toggleFavorite llamado')

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = ( id: number ): boolean => {

    //Esta linea sirve para detectar si se ejecutó en el lado del backend ya que no hay localStorage, entonces devuelve false.
    if(typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    return favorites.includes(id);
}

const pokemons = ():number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons,
}
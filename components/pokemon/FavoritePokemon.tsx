import { FavoriteCardPokemon } from "./"

interface Props{
    favoritePokemons: number[]
}

export const FavoritePokemon: React.FC<Props> = ({favoritePokemons}) => {
    // console.log(favoritePokemons)
  return (
    <div className="grid p-5 grid-cols-2 gap-3 sm:grid-cols-4 ">
        {
        favoritePokemons.map( id => (
            <FavoriteCardPokemon key= { id } id={ id } />
        ))
        } 
    </div>
  )
}

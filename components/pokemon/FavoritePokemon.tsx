import { Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./"

interface Props{
    favoritePokemons: number[]
}

export const FavoritePokemon: React.FC<Props> = ({favoritePokemons}) => {
    // console.log(favoritePokemons)
  return (
    <Grid.Container gap={2} direction='row' justify="flex-start">
        {
        favoritePokemons.map( id => (
            <FavoriteCardPokemon key= { id } id={ id } />
        ))
        } 
    </Grid.Container>    
  )
}

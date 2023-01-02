import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemon } from "../../components/pokemon";


const FavouritePage: NextPage= () => {

    //el <number[]> en useState es para que TS sepa el tipo y me ayude con todo lo demás.
    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

    useEffect(() => {
      setfavoritePokemons(localFavorites.pokemons)
    
    }, [])
    
    return(
        <Layout title="Pokémons - Favoritos">

            {
                favoritePokemons.length === 0
                ? ( <NoFavorites />)
                : (
                    <FavoritePokemon favoritePokemons={favoritePokemons}/>
                    // <Grid.Container gap={2} direction='row' justify="flex-start">
                    //    {
                    //     favoritePokemons.map( id => (
                    //         <Grid xs={6} sm={3} md={2} xl={1} key={ id }>
                    //             <Card hoverable clickable css={{padding:'10px'}}>
                    //                 <Card.Image 
                    //                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    //                     width={'100%'}
                    //                     height={ 140 }
                                        
                    //                 />
                    //             </Card>
                    //         </Grid>
                    //     ))
                    //    } 

                    // </Grid.Container>
                
                )
            }
            
        </Layout>
        
    );
} 

export default FavouritePage
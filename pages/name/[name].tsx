import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Pokemon, PokemonListResponse, SmallPokemon } from '../../interfaces';
import { pokeApi } from '../../api';
import { localFavorites } from '../../utils';
import confetti from 'canvas-confetti';
import { Layout } from '../../components/layouts';
import { getPokemonInfo } from '../../utils';
interface Props{
    pokemon: Pokemon;
}
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    // console.log({pokemon})

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

    const onToggleFavourite = () => {
        // console.log('ID:',pokemon.id);
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorites(!isInFavorites)

        if( isInFavorites ) return;
        
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    }
    
    // console.log(pokemon)
    return (
        <Layout title = {pokemon.name}>
            <div className="grid flex grid-cols-3 gap-3 px-5">
                {/* <div className="flex flex-col justify-center hover:-translate-y-1 rounded-xl border-2 border-gray-200">
                    <Image 
                        src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />
                </div> */}

                <div className="flex col-span-3">
                    <div className="rounded-xl border-2 border-black dark:border-gray-200">
                        <div className="flex flex-row justify-between px-4 pt-3">

                            <p className='pr-2 pb-3 sm:pb-1 text-lg font-medium tracking-normal capitalize'> {pokemon.name} </p>
                            <button
                                onClick={ onToggleFavourite }
                            >
                                <svg className={isInFavorites ? "fill-red-600 stroke-red-600 stroke-1" : "fill-transparent stroke-red-600 stroke-1" } xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" stroke='red' viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                </svg>
                            </button>                            
                        </div>

                        {/* <Card.Body> */}
                            <div className="grid grid-cols-2 md:grid-cols-4">
                            {/* <Container direction='row' display='flex' gap={ 0 }> */}
                                <Image 
                                    src={ pokemon.sprites.front_default }
                                    alt= { pokemon.name }
                                    width= { 160 }
                                    height= { 160 }
                                    
                                />
                                <Image 
                                    src={ pokemon.sprites.back_default }
                                    alt= { pokemon.name }
                                    width= { 160 }
                                    height= { 160 }
                                    
                                />
                                <Image 
                                    src={ pokemon.sprites.front_shiny }
                                    alt= { pokemon.name }
                                    width= { 160 }
                                    height= { 160 }
                                    
                                />
                                <Image 
                                    src={ pokemon.sprites.back_shiny }
                                    alt= { pokemon.name }
                                    width= { 160 }
                                    height= { 160 }
                                    
                                />

                            </div>
                            {/* </Container> */}

                        {/* </Card.Body> */}
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    // const pokemons151 = [...Array(151)].map((value, index) => `${index+1}`)
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemons151: SmallPokemon[] = data.results;

    return {
        paths: pokemons151.map( ( pokemon ) => ({
            params: { name: `${ pokemon.name }` } //El ID siempre debe ser STRING.
        })),
        fallback: 'blocking'
    }

    //OTRA SOLUCION POSIBLE
    /*
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);

    return {
        paths: pokemonNames.map( ( name ) => ({
            params: { name: name } //El ID siempre debe ser STRING.
        })),
        fallback: false
    }
    */
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name }  = params as {name: string};
    
    const pokemon = await getPokemonInfo(name)

    if (!pokemon){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
      props: {
        pokemon: pokemon
      },
      revalidate: 86400,
    }
  }

  export default PokemonByNamePage

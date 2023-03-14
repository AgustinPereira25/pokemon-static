import React from 'react'
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Props{
    id: number
}
export const FavoriteCardPokemon: React.FC<Props> = ( { id } ) => {
    // console.log(id)
    const router = useRouter();
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${ id }`)
    }
    
  return (
    <div 
        className='flex flex-col py-7 rounded-lg border-black dark:border-gray-200 border-2 justify-center hover:cursor-pointer hover:-translate-y-1 hover:scale-95 hover:bg-slate-900 duration-300'
        key={ id }
        onClick={ onFavoriteClicked }        
    >
        <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt='image'
            width={ 120 }
            height={ 120 }
            // className='group-hover:opacity-50'
        />
    </div>
  )
}

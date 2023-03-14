import Image from "next/image";

export const NoFavorites = () => {
  return (
            // <Container css={{
            //     display:'flex',
            //     flexDirection: 'column',
            //     height: 'calc(100vh - 100px)',
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     alignSelf: 'center'
            // }}>
            <div className="flex flex-col w-full items-center justify-center h-[calc(100vh-70px)]">
                <p className='text-3xl text-white font-medium'> No hay favoritos</p>
                <Image
                    className="opacity-10"
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                    width={ 250 }
                    height= { 250 }
                    alt='Favourite'
                />
            </div>
            // </Container>
  )
}

import Image from "next/image"
import NextLink from "next/link"
import Switcher from "./Switcher"
 
export const Navbar = () => {

//   console.log(theme)
  return (
    <div className="flex w-full h-13 items-center justify-between px-6 dark:bg-black">
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la app"
            width={70}
            height={70}
        />
        <NextLink href="/" passHref legacyBehavior>
            <p className="cursor-pointer text-lg text-black font-semibold dark:text-slate-200">Pókemon</p>
            
        </NextLink>
        
        <div className="flex flex-1" />
        <NextLink href="/favorites" passHref legacyBehavior>
            <p className="pr-3 text-lg text-black font-semibold cursor-pointer dark:text-slate-200">Favoritos</p>
        </NextLink>
        <div className="">
          <Switcher/>
        </div>
    </div>
    
  )
}

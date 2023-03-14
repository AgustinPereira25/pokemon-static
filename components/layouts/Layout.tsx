import React from "react"
import Head from "next/head"
import { Navbar } from "../ui"

interface Props{ 
    children: React.ReactNode, 
    title?:string 
}

const origin = (typeof window === 'undefined') ? '' : window.origin

export const Layout: React.FC<Props> = ({children, title}) => {

    // console.log({origin })
  return (
    <>
        <Head>
            <title> { title || 'Pokemon App' }  </title>
            <meta name="author" content="Agustin Pereira" />
            <meta name="description" content={`Información sobre el pokémon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Ésta es la página sobre ${ title }`} />
            <meta property="og:image" content= {`${origin}/img/banner.png`} />
        </Head>
        
        <Navbar />

        <main className="dark:bg-black dark:text-slate-200">
            { children }
        </main>
    </>
  );
}

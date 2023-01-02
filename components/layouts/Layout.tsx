import Head from "next/head"
import React from "react"
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

        <main style={{
            padding:'0px 20px'
        }}>
            { children }
        </main>
    </>
  );
}

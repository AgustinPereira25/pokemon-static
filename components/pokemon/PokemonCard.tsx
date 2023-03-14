import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";
import Image from "next/image";

interface Props{
    pokemon: SmallPokemon;
}

export const PokemonCard: React.FC<Props> = ({pokemon}) => {

    const router = useRouter();
    const onClick = () => {
        // router.push(`/pokemon/${pokemon.id}`);
        router.push(`/name/${pokemon.name}`);

    }


  return (
    <div 
        className="flex flex-col pt-5 pb-2 hover:cursor-pointer hover:-translate-y-1 rounded-xl border-2 border-black dark:border-gray-200"
        onClick={ onClick }
    >
        <Image 
            src={ pokemon.img }
            alt="imagen pokemon"
            height={ '100px' }
            width={ '100px' }
        />
        <div className="flex flex-row px-4 justify-between">
            <p className="font-sans text-base capitalize">{ pokemon.name }</p>
            <p className="font-sans text-base capitalize">#{ pokemon.id }</p>
        </div>
    </div>
  )
};

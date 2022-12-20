import Cardpokemon from "./Cardpokemon";
import './Pokemonlist.css';

const Pokemonlist = ({pokemondata}) => {

    console.log(pokemondata);

    return ( 
        <>
            <div className="pokemonlist">
                {pokemondata?.map?.((pokemon) => {
                    return <Cardpokemon name={pokemon.name} key={pokemon.name} />;
                })}
            </div>
        </>
     );
}

Pokemonlist.defaultProps = {
    pokemons: Array(4).fill(''),
}
 
export default Pokemonlist;
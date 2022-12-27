import Cardpokemon from "./Cardpokemon";
import './Pokemonlist.css';

const Pokemonlist = ({pokemons}) => {

    console.log(pokemons);

    return ( 
        <>
            <div className="pokemonlist">
                {pokemons?.map?.((pokemon) => {
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
import Cardpokemon from "./Cardpokemon";
import './Pokemonlist.css';

const Pokemonlist = ({pokemons}) => {
    return ( 
        <>
            <div className="pokemonlist">
                {pokemons.map((pokemon) => {
                    return <Cardpokemon />;
                })}
            </div>
        </>
     );
}

Pokemonlist.defaultProps = {
    pokemons: Array(4).fill(''),
}
 
export default Pokemonlist;
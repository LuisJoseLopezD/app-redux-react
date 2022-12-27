import React, { useEffect, useState } from 'react';
import Searcher from './components/Searcher';
import Pokemonlist from './components/Pokemonlist';
import { getPokemon } from './api';
import { Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { setPokemos as setPokemonsActions  } from './actions';

const App = ({pokemons, setPokemons}) => {

    useEffect(() => {

        const fetchPokemons = async () => {
            const pokemonRes = await getPokemon();
            setPokemons(pokemonRes);
        };

        fetchPokemons();

    }, [])

    return (
        <div className="App">
            <Col span={8} offset={8}>
                <Searcher />
                <Pokemonlist pokemons={pokemons} />
            </Col>
        </div>
    );
}

// es una función que recibe nuestro estado y retorna propiedades que se utilizan en el componente
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});

// es una función que despacha las funciones de redux y retorna también un objeto
const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

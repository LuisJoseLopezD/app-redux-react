import React, { useEffect, useState } from 'react';
import Searcher from './components/Searcher';
import Pokemonlist from './components/Pokemonlist';
import { getPokemon } from './api';
import { Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

// Redux
import { setPokemons  } from './actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {


    // REDUX
    // se usa para seleccionar un estado del redux
    const pokemons = useSelector(state => state.pokemons);
    // se usa para ejecutar o cambiar ese estado
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchPokemons = async () => {
            const pokemonRes = await getPokemon();
            dispatch(setPokemons(pokemonRes));
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


export default App;

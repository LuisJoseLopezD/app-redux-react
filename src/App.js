import React, { useEffect, useState } from 'react';
import Searcher from './components/Searcher';
import Pokemonlist from './components/Pokemonlist';

import { getPokemon } from './api';

import { Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const App = () => {

    const [pokemondata, setPokemondata] = useState([]);

    useEffect(() => {

        const fetchPokemons = async () => {
            const pokemonRes = await getPokemon();
            setPokemondata(pokemonRes);
        };

        fetchPokemons();
    }, [])

    return (
        <div className="App">
            <Col span={8} offset={8}>
                <Searcher />
                <Pokemonlist pokemondata={pokemondata} />
            </Col>
        </div>
    );
}

export default App;

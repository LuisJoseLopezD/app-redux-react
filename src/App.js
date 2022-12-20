import React from 'react';
import Searcher from './components/Searcher';
import Pokemonlist from './components/Pokemonlist';

import { Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Col span={8} offset={8}>
                <Searcher />
                <Pokemonlist />
            </Col>
        </div>
    );
}

export default App;

// funciones que realizan una acción

import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})
// funciones que realizan una acción

import { SET_POKEMONS } from "./types";

export const setPokemos = (payload) => ({
    type: SET_POKEMONS,
    payload,
})
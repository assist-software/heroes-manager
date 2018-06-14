import list from './../assets/heroes.json';

import {
    HERO_ADD,
    HERO_REMOVE,
    HERO_REMOVE_ALL,
    HERO_UPDATE,
    HEROES_FILTER
} from '../actions/heroes.actions';

const heroesReducerDefaultState = {
    list,
    filter: ''
}

export default (state = heroesReducerDefaultState, action) => {
    switch (action.type) {
        case HERO_ADD:
            return {
                ...state,
                list: [...state.list, {
                    ...action.hero, id: state.list.reduce((prev, next) => prev && prev.id > next.id ? prev : next, { id: 0 }).id + 1
                }],
            }
        case HERO_UPDATE:
            debugger;
            return {
                ...state,
                list: [
                    ...list.filter(hero => hero.id != action.hero.id),
                    { ...action.hero }
                ]
            }
        case HERO_REMOVE: {
            const index = state.list.indexOf(
                state.list.find(h => h.id === action.id),
            )

            return {
                ...state,
                list: [
                    ...state.list.slice(0, index),
                    ...state.list.slice(index + 1),
                ],
            }
        }
        case HERO_REMOVE_ALL:
            return {
                ...state,
                list: state.list.filter(item => item.type !== action.heroType),
            }
        case HEROES_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}

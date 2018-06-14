import list from './../assets/heroes.json'

// Heroes Reducer

const heroesReducerDefaultState = {
    list,
    filter: ''
}

export default (state = heroesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_HERO':
            var s = {
                ...state,
                list: [...state.list, {
                    ...action.hero, id: state.list.reduce((prev, next) => prev && prev.id > next.id ? prev : next, { id: 0 }).id + 1
                }],
            }
            console.log(s);
            return s;
        case 'UPDATE_HERO':
            return {
                ...state,
                list: [
                    ...list.filter(hero => hero.id != action.hero.id),
                    { ...action.hero }
                ]
            }
        case 'REMOVE_HERO': {
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
        case 'DELETE_HEROES':
            return {
                ...state,
                list: state.list.filter(item => item.type !== action.heroType),
            }
        case 'FILTER_HEROES':
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}

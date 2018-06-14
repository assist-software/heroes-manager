import { createStore, combineReducers } from 'redux';
import heroes from '../reducers/heroes.reducer';

export default () => {
    const store = createStore(
        combineReducers({
            heroes,
        })
    )
    return store
}

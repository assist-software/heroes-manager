import { connect } from 'react-redux';
import Heroes from './Heroes.component';
import { heroRemoveAllAction } from '../../actions/heroes.actions';

const filterByType = (state, ownProps) => state.heroes.list.filter(hero => hero.type === ownProps.type);

const filterBySearch = (list, state) => list.filter(hero => {
    return (hero.name || '').toUpperCase().indexOf(state.heroes.filter.toUpperCase()) != -1
        || (hero.alterEgo || '').toUpperCase().indexOf(state.heroes.filter.toUpperCase()) != -1
});

const mapStateToProps = (state, ownProps) => ({
    heroes: filterBySearch(filterByType(state, ownProps), state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDeleteHeroes: () => dispatch(heroRemoveAllAction(ownProps.type)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Heroes)

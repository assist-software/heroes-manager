import { connect } from 'react-redux';
import { heroRemoveAction } from '../../actions/heroes.actions';
import Hero from './Hero.component';

const mapStateToProps = (state, ownProps) => ({
    hero: state.heroes.list.find(hero => hero.id == ownProps.id)
});

const mapDispatchToProps = dispatch => ({
    handleDeleteHero: (id) => dispatch(heroRemoveAction(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hero);
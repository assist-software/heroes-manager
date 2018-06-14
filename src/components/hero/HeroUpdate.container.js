import { connect } from 'react-redux';
import { heroUpdateAction } from '../../actions/heroes.actions';
import HeroUpdate from './HeroUpdate.component';

const mapStateToProps = (state, ownProps) => ({
    hero: state.heroes.list.find((hero) => hero.id == ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    handleUpdateHero: (hero) => dispatch(heroUpdateAction(hero))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeroUpdate);
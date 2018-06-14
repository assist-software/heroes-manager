import React from 'react';
import { connect } from 'react-redux';
import { heroAddAction } from '../../actions/heroes.actions';

/*
* This bad boy Class Component
* It has lifecycle methods or "lifecycle hooks"
* Lifecycle: componentDidMount componentWillUnmount
*/
class HeroAdd extends React.Component {

    /*
    * This is the component state
    * We can change the state using the "setState" method
    */
    state = {
        error: undefined,
        type: 'good',
        age: undefined
    };

    /*
    * This is a component method
    * It starts with the word "handle" because it handles a user input/interaction
    * It's a callback that is being called when user performs an action
    * Think about ng-click in Angularjs
    * or
    * $('.myElement').on('click', function(){}) in jQuery
    */
    handleAddHero = (event) => {
        event.preventDefault();

        if (!event.target.elements.hero) {
            this.setState(() => ({ ...this.state, error }));
        }

        // START MISSION 1.1
        const name = event.target.elements.hero.value.trim();
        const image = event.target.elements.image.value.trim();
        const { type } = this.state;

        this.props.dispatch(heroAddAction({ name, type, image }))

        // START MISSION 1.2
        event.target.elements.hero.value = '';
        event.target.elements.image.value = '';
    };

    // START MISSION 1.5
    handleHeroTypeChange = (event) => {
        this.setState({ type: event.target.checked ? 'bad' : 'good' });
    }

    /*
    * Sorry, you should know this one :P
    */
    render() {
        return (
            <div className="c-add-hero">
                <form className="c-form" onSubmit={this.handleAddHero}>

                    { /* MISSION 1.3 */}

                    <fieldset className="c-form__fieldset">

                        <legend className="c-form__legend">
                            Add a new hero
                        </legend>

                        <div className="c-input-group">
                            <label className="c-input-group__label" htmlFor="hero">
                                Name
                            </label>
                            <input
                                id="hero"
                                className="c-input-group__input"
                                type="text"
                                name="hero"
                            />
                        </div>

                        <div className="c-input-group">
                            <label className="c-input-group__label" htmlFor="image">
                                Image url
                            </label>
                            <input
                                id="image"
                                className="c-input-group__input"
                                type="text"
                                name="image"
                            />
                        </div>

                        { /* MISSION 1.5 */}

                        <button className="c-form__submit c-button c-button--primary">
                            Add a {this.state.type} Hero
                        </button>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default connect()(HeroAdd);
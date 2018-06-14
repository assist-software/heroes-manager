import React, { Fragment } from 'react';

class EditHero extends React.Component {
    state = this.props.hero;

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const hero = this.state;

        // START MISSION 1.4
        return (
            <Fragment>
                {

                    /* START MISSION 1.6 */
                    <form className="c-edit-hero c-form"
                        onSubmit={e => { e.preventDefault(); this.props.handleUpdateHero(this.state) }}>

                        <div className="c-edit-hero__header">
                            {hero.image && <div className="c-edit-hero__image" style={{ backgroundImage: `url(${hero.image})` }}></div>}
                            {!hero.image && <div className="c-edit-hero__image" style={{ backgroundImage: 'url(https://cdn0.iconfinder.com/data/icons/people-12/24/Anonymous-2-512.png)' }}></div>}
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
                                value={this.state.image || ''}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="c-input-group">
                            <label className="c-input-group__label" htmlFor="name">
                                Name
                                    </label>
                            <input
                                id="name"
                                className="c-input-group__input"
                                name="name"
                                value={this.state.name || ''}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="c-input-group">
                            <label className="c-input-group__label" htmlFor="alterEgo">
                                Alter Ego
                                    </label>
                            <input
                                id="alterEgo"
                                className="c-input-group__input"
                                name="alterEgo"
                                placeholder="Change hero alter ego"
                                value={this.state.alterEgo || ''}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button className="c-button c-button--primary c-form__submit">
                            Save
                        </button>

                    </form>
                }
            </Fragment>
        );
    }
}

export default EditHero;

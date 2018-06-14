import React from 'react';
import { connect } from 'react-redux';
import { herosFilterAction } from '../../actions/heroes.actions';

const Search = ({ dispatch }) => {

    // START MISSION 1.7
    const onSubmitForm = (event) => {
        event.preventDefault();
        dispatch(herosFilterAction(event.target.elements.filter.value));
    }

    return (
        <form className="c-form c-search" onSubmit={onSubmitForm}>

            <div className="c-input-group">
                <label className="c-input-group__label" htmlFor="search-hero">
                    Search hero
                </label>
                <input
                    id="search-hero"
                    className="c-input-group__input"
                    name="filter"
                    placeholder="Search a hero by name"
                />
            </div>

            <button
                type="submit"
                className="c-form__submit c-button c-button--primary">
                Search
            </button>

        </form>
    );
}

export default connect()(Search);
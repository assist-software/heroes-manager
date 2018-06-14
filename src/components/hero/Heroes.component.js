import React from 'react';
import HeroContainer from './Hero.container';

const Heroes = props => {
    return (
        <div className="c-heroes">
            <h2 className="c-heroes__title">
                {props.type} Heroes
            </h2>

            <button
                className="c-heroes__remove-all c-button"
                onClick={props.handleDeleteHeroes}
            >
                Remove all {props.type} heroes
            </button>

            {props.heroes.length === 0 && (
                <p className="c-heroes__error">
                    No {props.type} heroes found
                </p>
            )}

            <div className="c-heroes__container">
                {props.heroes.map(hero => (
                    <HeroContainer
                        cardType={props.cardType}
                        key={hero.id}
                        id={hero.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Heroes;


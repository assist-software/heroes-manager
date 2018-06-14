import React from 'react'
import HeroesContainer from '../hero/Heroes.container';

const Team = (props) => {
    const { type } = props;

    return (
        <section className="c-team">
            <HeroesContainer type={type} cardType={props.cardType} />
        </section>
    );
}

export default Team;
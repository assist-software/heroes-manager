import React, { Fragment } from 'react';
import HeroTeam from './HeroTeam.component';
import HeroSearch from './HeroSearch.component';

const Teams = () => {
    return (
        <main className="c-dashboard">
            <HeroSearch />
            <section className="c-dashboard__content">
                <HeroTeam type="good" />
                <HeroTeam type="bad" />
            </section>
        </main>
    );
}

export default Teams;
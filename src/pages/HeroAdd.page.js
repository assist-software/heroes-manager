import React from 'react';
import HeroAdd from '../components/hero/HeroAdd.component';
import HeroTeam from '../components/hero/HeroTeam.component';

const AboutPage = props => {
    return (
        <section className="c-hero-add-container">
            <div className="c-hero-add-container__aside">
                <HeroAdd />
            </div>
            <div className="c-hero-add-container__main">
                <HeroTeam type="good" cardType="small" />
                <HeroTeam type="bad" cardType="small" />
            </div>
        </section>
    );
}

export default AboutPage;

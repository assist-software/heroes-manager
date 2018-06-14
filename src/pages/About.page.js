import React from 'react';

const AboutPage = (props) => {
    const aboutPageTitle = 'Title';
    return (
        <section>
            {
                aboutPageTitle === 'About page title' ?
                    <h2>The About page has a cool title!</h2>
                    : <h3>The About page doesn't have a cool title yet!</h3>
            }
        </section>

    );
}

export default AboutPage;

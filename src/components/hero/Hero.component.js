import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

/*
* Remember HeroAdd.component guy?
* This one is his brother
* This component is dumb as they come
* It doesn't have lifecyles, but the legend says that because of that
* this type of component is much faster.
*
* Also we have the "props" magical creature here
* Just read the damn docs for this one, will ya:
* https://reactjs.org/docs/components-and-props.html
*/
const Hero = (props) => {
    return (
        !props.hero ? <span>Hero was deleted, rerouting...</span> : <article className={`c-hero c-hero--${props.cardType}`}>
            {
                props.cardType !== 'small' && <div>
                    {
                        props.hero.image &&
                        <div
                            className="c-hero__image"
                            style={{ backgroundImage: `url(${props.hero.image})` }}>
                        </div>
                    }
                    {
                        !props.hero.image &&
                        <div
                            className="c-hero__image"
                            style={{ backgroundImage: 'url(https://cdn0.iconfinder.com/data/icons/people-12/24/Anonymous-2-512.png)' }}>
                        </div>
                    }
                </div>
            }

            <div className="c-hero__info">
                <h2 className="c-hero__title">
                    {props.hero.name}
                </h2>
                {
                    !props.isDetailed ? null :
                        <h3 className="c-hero__subtitle">
                            Aka: {props.hero.alterEgo}
                        </h3>
                }

                { /* START MISSION 1.8 */ }
                <Link className="c-hero__edit c-button" to={`heroes/${props.hero.id}`} key={props.hero.id}>
                    Edit
                </Link>

                <button
                    className="c-hero__remove c-button"
                    onClick={(event) => {
                        event.preventDefault();
                        props.handleDeleteHero(props.hero.id);
                        props.isDetailed ? props.history.goBack() : null
                    }}
                >
                    Remove
                </button>
            </div>


        </article>
    );
};

export default withRouter(Hero);

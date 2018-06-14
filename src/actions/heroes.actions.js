export const HERO_ADD = 'HERO_ADD';
export const HERO_REMOVE = 'HERO_REMOVE';
export const HERO_REMOVE_ALL = 'HERO_REMOVE_ALL';
export const HERO_UPDATE = 'HERO_UPDATE';
export const HEROES_FILTER = 'HEROS_FILTER';

export const heroAddAction = (hero) => ({
    type: HERO_ADD,
    hero,
})

export const heroRemoveAction = (id) => ({
    type: HERO_REMOVE,
    id,
})

export const heroRemoveAllAction = (heroType) => ({
    type: HERO_REMOVE_ALL,
    heroType
})

export const heroUpdateAction = (hero) => ({
    type: HERO_UPDATE,
    hero
})

export const herosFilterAction = (filter) => ({
    type: HEROES_FILTER,
    filter
})
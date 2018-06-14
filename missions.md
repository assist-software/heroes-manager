# MISSIONS

Your missions, should you chose to accept them!

##### DOCS:

[https://reactjs.org/docs/](https://reactjs.org/docs/)

[https://redux.js.org/glossary](https://redux.js.org/glossary)

# ACT I (Child's play)

### MISSION 1.1

    CODENAME: Save the ... out of it

    STORY:
    We need to have the ability to add new heroes in our platform.
    The dude that started the work on this feature left it in the air.
    He's an ashole... We need your help to complete this functionality.

##### TODO:

- Add a `HTML input tag` to save the alter ego.
- Add a `HTML input tag` to save the bio.
- Add the newly added information to `heroAddAction` method.

##### TIPS:

- Take a look at `src/assets/heroes.json` to see the exact attributes of a **hero**. It matters!
- Make sure to take a look at the `name` attribute for the HTML `<input>` tag.

...

...

...

---

### MISSION 1.2

    CODENAME: Kill them all at once

    STORY:
    Quote from client: "You see what happens, you added a new HTML input tag, now you have to clean its value.
    If we have 100 inputs, how can we reset all of them in one go?"

    Our client thinks he knows coding, so he asked us to make sure there are no extra lines of codes.
    He saw the way we are reseting the input values and said that he could do it in one line!

##### TODO:

- Rewrite the `handleAddHero` method so that we could reset all the inputs using one line of code.

##### TIPS:

- We coud use an array method.
- Ask the client for solution.
- Give up now before it's to late, abandon the ship!

...

...

...

---

### MISSION 1.3

    CODENAME: No alerts, WTF...

    STORY:
    Client wants a nice UI. He needs to know when his action are being executed and when there is an error.

##### TODO:

- For add hero form make two inputs required
- Display an error on top of the form when those fields are empty
- Display a success alert when a hero was saved successfully

##### TIPS:

- None

...

...

...

---

### MISSION 1.4

    CODENAME:
    This doesn't seem right

    STORY:
    I will be short on this one. We fucked up, just go to http://localhost:8080/heroes/1000 and see for yourself.
    Now this is just lazy work! Please fix it

##### TODO:

- Make sure to display something else when we don't have a hero with a certain id in order to avoid the console errors.

##### TIPS:

- Take a look at `About.page.js`, see what is going on in `render` method

...

...

...

---

### MISSION 1.5

    CODENAME:
    Good or Bad

    STORY:
    There are good and bad heroes in our world. We need a way to differentiate them.

##### TODO:

- Create an input(**radio** or **checkbox**) that will allow us to select the hero type: **good** or **bad**
- Add a method to our `input` and use it to get the value.
- After we save the **hero type** in a variable we should update the state with the new value.

##### TIPS:

- When we create a method we can use the **event** object inside of it
- setState example:

```code
    const myCustomAge = myValue < 50 ? 'young' : 'old' ;
    this.setState((prevState) => {
        return {heroAge: myCustomAge};
    });
```

- Do we really need to save first the **hero type** in a variable or can we pass it directly to our state?
- Think about ES6 arrow function and how cand we make our method cleaner. Perhaps we can write it in one line?
- More info about **setState**: [https://reactjs.org/docs/react-component.html#setstate](https://reactjs.org/docs/react-component.html#setstate)

...

...

...

---

### MISSION 1.6

    CODENAME:
    Easy peasy

    STORY:
    We do hate inline stuff!

##### TODO:

- Convert the inline `onSubmit` functionality fom `src/components/hero/HeroUpdate.component.js` into a separate method inside the component.

##### TIPS:

- None

...

...

...

---

### MISSION 1.7

    CODENAME:
    Fuck it, we'll do it live

    STORY:
    The client hates to make too many actions in order to filter the heroes.
    Writing and then hitting the search button seems to hard for him.
    We need to show results while the client is typing. That would be the best!

##### TODO:

- Change the filter functionality, so that it would filter the heroes on **every key press**.

##### TIPS:

- [https://reactjs.org/docs/events.html#form-events](https://reactjs.org/docs/events.html#form-events)

...

...

...

---

### MISSION 1.8

    CODENAME:
    Long live the hack

    STORY:
    A hacker managed to split our application in tow,
    he did find that button and he was able to delete the whole pack of heroes. It was a disaster!
    Thank good we had a database backup.

    On our "hero-add" page we have the hero list.
    We are using the same "Hero.component.js" component in there.
    If we search for ".c-hero__remove" or ".c-hero__edit" class we can see it was hidden using only css.
    This is just some shity work from a lazy developer!
    We want to remove the dangerous buttons completely from DOM.

##### TODO:

- Tale a look at `src/components/hero/Heroes.component.js`
- "HeroContainer" has the `cardType` attribute
- In "src/components/hero/Hero.component.js" inspect the "props" param that is being passed to Hero component
- Make use of `cardType` to remove conditionally all the unwanted `HTML nodes`
  .
- **For extra self confidence:**
  : There is also two buttons with the class `.c-heroes__remove-all`. Can you find those buttons and remove them from `DOM` when we are on `hero-add`
  page ?

##### TIPS:

- Everything you need is in `Heroes.component.js`

...

...

...

# ACT II (Nightmare mode activated)

---

### MISSION 2.1

    ESTIMATION: 30 min
    CODENAME: A new episode every time

    STORY:
    Uncomment the code to follow the process of adding a new page / route called 'New episode' to display a random hero every time the page is accessed.

##### TODO:

- Add a new container component to map a random hero in the `heroes` store to the hero prop of the `Hero.component`.
- Add a new route & link to display the newly-created component.

...

...

...

---

## MISSION 2.2

    ESTIMATION: 30 min
    CODENAME: Arch Enemy

    STORY:
    Every hero has an arch enemy. There should be a possibility to keep track of it

##### TODO:

- Add the `archEnemy` input field to the `HeroAdd` & `HeroUpdate` components.
- Add the `archEnemy` property to the `hero` store.
- Adjust the add hero & edit hero cases in the `heroes` reducer in order to reflect the newly-added `archEnemy` field.

...

...

...

## MISSION 2.3

    ESTIMATION: 30 min
    CODENAME: Arch enemy pairs

    STORY:
    So we all know SpiderMan is the arch enemy of Green Goblin - display the arch enemy pairs' list

##### TODO:

- Add a new `ArchEnemyList` presentation component to simply display the properties of the list in it's props - a list of `hero name` and `hero archEnemy`.
- Add a new `ArchEnemyList` container component to bind the presentation component created aboce, to the `heroes` store.
- Display the Enemies pairs in the home route.

...

...

...

### MISSION 2.4

    ESTIMATION: 60 min
    CODENAME: Speak on the behalf of a hero

    STORY:
    Every hero has possibility to say something. So we need to add an input to each hero card and a submit button.
    When submitted, the message should be displayed in a designated area for the heroes' messages.

##### TODO:

- Add a new action file `message.actions` with a single action - `addMessage` (properties: `herName`, `message`).
- Add a new reducer `messages`, combine it with the global store - handle inside it the `addMessage` action to push the object with the `heroName` and `message` properties to the `messages store`'s state.
- Add a new `MessageBoard` presentation component - just list inside it the props - a list of `heroName` & `message`.
- Add a new `MessageBoard` container component - map `message` store to props of the `MessageBoard` presentation component.
- Render the `MessageBoard` container component in the heroes page.
- Add a new `input` to the hero presentation component and a `button` to emit an event that this hero has just sent a new message.
- Update `mapDispatchToProps` of the `hero` container component to dispatch the `addMessage` action when the event is emitted by the button in the above step.

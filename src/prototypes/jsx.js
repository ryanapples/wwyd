console.log('app.js is running');

// app object w/ title/subtitle
const app = {
    title: 'WWKD',
    subtitle: "Do know what to do? Leave your fate up to Kanye.",
    options: []
};

// function called on event obj
const onFormSubmit = (e) => {
    // stops full page refresh
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const onRemoveAll = (e) => {
    // options is set back to empty arr on remove btn click
    // re-render app
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    alert(selectedOption);
};

const appRoot = document.getElementById('app');

// JSX - JavaScript XML
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
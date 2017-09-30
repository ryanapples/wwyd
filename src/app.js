/* 
Component is a class itself hence the extension of Header
React requires capitalized first letter. If lower, it will not render comp.
*/

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>WWKD?</h1>
                <h2>Leave your fate up to Kanye.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <p>Option component placeholder</p>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>App Option component </p>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));
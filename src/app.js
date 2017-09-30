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

const jsx = (
    <div>
        <Header />
        <Action />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));
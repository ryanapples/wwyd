/* 
Component is a class itself hence the extension of Header
React requires capitalized first letter. If lower, it will not render comp.
*/

class IndecisionApp extends React.Component {
    render() {
        const title = 'WWKD';
        const subtitle = 'Leave your fate up to Kanye.';
        const options = ['item 1', 'item 2', 'item 3'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
            <div>
                {
                    this.props.options.map((option) => <p key={option}>{option}</p>)
                }
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option TEST
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                App Option component  
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
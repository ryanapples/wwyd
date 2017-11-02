/* 
Component is a class itself hence the extension of Header
React requires capitalized first letter. If lower, it will not render comp.
*/

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); // bind event handlers to correct instance
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handlePick() {
        this.setState((prevState) => {
            const randomNum = Math.floor(Math.random() * prevState.options.length);
            const option = prevState.options[randomNum];
            alert(option);
        });
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
    }
    render() {
        const subtitle = 'No clue? No problem.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            <Option />
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }  
    }
    handleAddOption(e) {
        e.preventDefault();

        // trim will truncate leading and trailing spaces
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
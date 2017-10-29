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
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

// Add Remove All button
// Setup handleRemoveAll

class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
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
                {this.props.optionText}
            </div>
        )
    }
}

// define method - handleAddOption
// selects value typed -> if value, then alert

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        // trim will truncate leading and trailing spaces
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }                        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
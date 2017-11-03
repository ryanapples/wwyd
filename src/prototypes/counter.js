class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        console.log('CDM');
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        // returns true if NaN, have to invert that
        // ensures if it IS a number, then do something
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevProp, prevState) {
        console.log('CDU');
        // check to see if count actually has changed
        if (prevState.state !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        console.log('handleReset');
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));
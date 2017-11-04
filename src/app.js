import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';

ReactDOM.render(<Indecision/>, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Ryan'
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'Ryan';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);


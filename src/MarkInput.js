import React, { Component } from 'react';
import './App.css';
let marked = require('marked')
class MarkInput extends Component {

state = {
    rawMarkdown: marked("I am a __god__")
}

    render(){
        let markDown = marked("I am a __god__");
        return (
            <div>
                {{markDown}}
                </div>
        )
    }
}

export default MarkInput

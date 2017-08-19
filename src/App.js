import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
let marked = require('marked')
class App extends Component {

state ={
  markdown: `### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)
#### Project Walkthrough Video
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/N7Mrj0WrvnM/0.jpg)](http://www.youtube.com/watch?v=N7Mrj0WrvnM)

### Original Project from [FreeCodeCamp](https://www.freecodecamp.org/challenges/build-a-markdown-previewer)

### User Stories
- I can type GitHub-flavored Markdown into a text area.
- I can see a preview of the output of my markdown that is updated as I type.

### Install Instructions
- npm install
- yarn start
`
}
//Updates the state to markdown value which is called on change of formcontrol
updateMarkdown = function(markdown){
  this.setState({markdown})
}

  render() {
    let {markdown} = this.state;
    // marked.sanitize = true;

    return (
      <div className="App container">
  <div>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Markdown Input</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" value={markdown} onChange={(event)=> this.updateMarkdown(event.target.value)}/>
    </FormGroup>
  </div>
  <div>
    <h1>Markdown Output</h1>
    {/*Converts string version of html into actual html  */}
    <div dangerouslySetInnerHTML= {{__html:marked(markdown)}}>
     
    </div>
  </div>
      </div>
    );
  }
}

export default App;

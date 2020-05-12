import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char'
class App extends Component {
  state = {
    userInput : ''
  }
  inputChangeHandler = (e) =>{
      this.setState({
        userInput :e.target.value
      })
  }
  removeCharacter = (i) =>{
    debugger;
    //const _userInput = [...this.state.userInput.split('')];
    
    const _text = this.state.userInput.split(''); //Converting string to array 
    _text.splice(i,1)
    const _updatedText = _text.join('') // Joining array as string
    this.setState({
      userInput:_updatedText
    })
  }
  render() {
    const charList = this.state.userInput.split('').map((ch,index) =>
      <Char character={ch} key={index} click={() => this.removeCharacter(index)}/>
      )
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/>
        <input 
        type="text" 
        onChange={(event) => this.inputChangeHandler(event)} 
        value={this.state.userInput} 
        
        />
        <p >{this.state.userInput}</p>
        <Validation length= {this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css'
import {CardList} from './Component/Card-List/card-list.component'
import {SearchBox} from './Component/Search box/searc-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters : [],
      searchField :''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())//convert to JSON from promise
    .then((users) => this.setState({monsters : users}))
  }

  handlechange = (e) => this.setState({searchField : e.target.value})

  render() {
    const {monsters, searchField} = this.state;

    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    }) 

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder = 'search monsters'
        handlechange = {this.handlechange} /* we dont use () because render method will invoke this if we add () */
        />
        <CardList monster_array = {filteredMonster}> </CardList>
      </div>
    )
  }
}

export default App;

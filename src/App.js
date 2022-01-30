import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

constructor(){
  super();

  this.state = {
     monsters:[],
     searchField: ''
  };

  //this.handleChange = this.handleChange.bind(this)   αν θελουμε να βαλουμε μια μεθοδο ΔΙΚΗ ΜΑΣ που να μπορει να αλλαζει το state
}

componentDidMount(){

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(user=> this.setState({monsters: user}));
}

handleChange = (e) => {
  this.setState({searchField:e.target.value})
}


render(){
  const {monsters,searchField} = this.state;    //ουσιαστικα παιρνουμε απο το state μονο τα στοιχεια που ειναι μεσα στα brackets
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">

      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        handleChange = {this.handleChange}
      />
      <CardList monsters = {filteredMonsters}/>

    </div>
  );
}
}
export default App;

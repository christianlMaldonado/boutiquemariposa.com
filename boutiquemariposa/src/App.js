import React from 'react';
import './App.css';
import {Welcome} from './Welcome';
//import {Homescreen} from '/Homescreen'

// Creating React Component to extend all across pages
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {site: 'ready'}
    this.startSite = this.startSite.bind(this);
    this.enterHome = this.enterHome.bind(this);
  }

  //web console should display console.log
  componentDidMount(){
    console.log('mounted')

    document.addEventListener('siteStateChanged', () => {
      console.log('changed')
  })
}

  startSite() {
    this.startSite({site: 'enterHome'});
  }

  enterHome() {
    this.setState({site: 'enterHome'})
    document.dispatchEvent(new CustomEvent('startSite'));
  }

  render() {
    let screen;
  if (this.state.site === 'ready') {
    screen= (
      <Welcome startGame={this.startGame} />
    )
  }

    return (
      <div className="App">
      {screen}
      </div> 
    )
  }
}

export default App;
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
import Footer from './components/footer'
import Admin from './components/admin';
import Upload from './components/upload';
import 'tachyons';


class App extends Component{
  constructor(){
    super();
    this.state = {
      admin:false
    }
  }
  
  onChangeAdmin = () => {
    this.setState({admin: true});
  };

  render(){
  return (
    <BrowserRouter>
      <div className="App grid-container">
        <div className="grid-nav">
          <Navbar/>
        </div>
        <div className="grid-main"> 
                <Route exact path='/' component ={Home}/>
                <Route path='/about' component ={About}/>
                <Route path='/contact' component ={Contact}/>
                <Route path='/courses' component ={Courses}/>
                { this.state.admin === false ?
                <Route path='/admin' render = {(props)=> <Admin  onChangeAdmin={this.onChangeAdmin}/>}/>
              :<Route path='/admin' component ={Upload}/>}
        </div>
        <div className="grid-foot">
          <Footer/>
        </div>   
      </div>
    </BrowserRouter>
  );
}
}

export default App;

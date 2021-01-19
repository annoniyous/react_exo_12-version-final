import React, { Component } from 'react'
import Article from './components/Article'
import './App.css'

export class App extends Component {
  state ={
    nombreArticle : 0
    
  }


  add = () =>{
    this.setState({
      nombreArticle : this.state.nombreArticle + 1
    })

  }
  render() {
    return (
      <div>
        <h1>{this.state.nombreArticle < 2 ? "il n'y a pas assez d'article (il faut minimum 2 article)" : `il y a ${this.state.nombreArticle} article`}</h1>
        <h2>{this.state.nombreArticle} dans l'app</h2>
    <button onClick={this.add}>ajouter un article</button>
    <Article nombre = {this.state.nombreArticle} prenom ="youssef"/>
    
      </div>
    )
  }
}

export default App

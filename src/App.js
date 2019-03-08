import React, { Fragment , Component,useState,useContext } from "react";
import Movielist from './Movielist'
import MovieCon from "./Store";

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = { movies:false};

  
  componentDidMount() {
    this._getMovies();
  }

 

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?limit=25&`&minimum_rating=8"
    )
      .then(movie => movie.json())
      .then(json => json.data.movies)
      
  };

  render() {
    console.log(this.state)
    
    return ( <div className="App" >
        {this.state.movies ?
            <>
              
              
            <MovieCon.Provider value={this.state.movies}>
              <Movielist />
            </MovieCon.Provider>
            
            </>
            : <h1 Style="color: white; text-align: center; margin-top:400px">Loading...</h1>
        }
          </div>
    )
  }
}

export default App;

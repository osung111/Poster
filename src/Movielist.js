import React,{useContext,useState} from 'react';
import MovieCon from "./Store";

 import Movie from './Movie'
 import Coverflow from 'react-coverflow';
 import './Movielist.css'
 import View from'./View';

function Movielist() {
    const movies = useContext(MovieCon);
    
    const [Vtitle,setTitle] = useState('')
    
    
    // var Vtitle = '1';

    // const setTitle =(title) =>{
    //   Vtitle = title
    // }

   
   
    
    
    const list = Object.keys(movies).map( n =>{
            
        return  <Movie
        setTitle={setTitle}
        title={movies[n].title_english}
        poster={movies[n].large_cover_image}
        key={movies[n].id}
        
      /> 
    })
    


    return (<div className="Big">
                <div className="board">
                
                <View  title={Vtitle} />
              </div>
                
                
                <div className="List" >
                <Coverflow width="20" height="290"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
    enableHeading
  >             
                {list}
                
                </Coverflow>
                </div>
            </div>
            )
}


export default Movielist;
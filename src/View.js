import React,{useContext} from 'react';
import MovieCon from "./Store";
import m from './m.jpg';
import './View.css';
import LinesEllipsis from 'react-lines-ellipsis'

const View  = ({title}) => {

      let data = new Array

    
    
    const dump = useContext(MovieCon)
      if(title != '') 
    {
        data.push(dump.filter(data2 =>  data2.title_english === title ) )
        const Rdata  = data[0][0]
         return <View2 Rdata={Rdata} />
    }
   
    return <img src={m} width="100%" height="100%" />
}

const View2 = ({Rdata}) =>{

  return(
    <div className="View2" >
          <div className="poster">
              <img src={Rdata.medium_cover_image} className="poster2" width="80%" />
          </div>
         <div className="info"> 
            <div className="title"> {Rdata.title} </div>
            <div className="info2" > 
              <div className="rating"> 평점 : {Rdata.rating}</div>
              <div className="genres"> 장르 : {Rdata.genres}</div>
              <div className="summary"> 
                <span>줄거리:</span> <br/> 
                    <LinesEllipsis
                        text={Rdata.summary}
                        maxLine='14'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
            </div>
           </div> 
         </div> 
    </div>
  )
}

export default View;
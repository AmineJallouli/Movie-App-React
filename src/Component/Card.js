import React, { Component } from 'react';



class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            display:false
         }
    }
    render() {
        return (
            <div  className="list">
{this.props.listMovie.filter((el)=>el.name.toUpperCase().includes(this.props.searchInput.toUpperCase()) && el.rating<=this.props.searchStar).map(el=>{
    return(
        <div key={el.id} className='movie'>
          <p>{"".padEnd(el.rating,"★")}</p>
          <img  src={el.image}  alt="img-movie"></img>
          <p className='name-movie'>{el.name}</p>
        </div>
        
        )})}

    </div>
         );
    }
}
export default Card;
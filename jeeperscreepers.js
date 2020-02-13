import JeepersCreepersImage, {} from "../components/jeepers.jpg"
import React, { Component } from 'react';
import StarRating from '../components/StarRating'





class JeepersCreepers extends Component{
  render(){

    const pageLayout = {
      marginTop: '120px',
      display: 'flex',
      justifyContent: 'space-evenly'
    }

    const imageStyle ={
        marginLeft: '120px',
        marginRight: '120px',
        height: '450px',
        width: '950px'
    }

    return (
     
      <div style={pageLayout}>

        <img style={imageStyle} src={JeepersCreepersImage} alt="Pineapple Express"/>

        <div>

        <StarRating/>
        
        <h2> Jeepers Creepers </h2>

        
        <h5>2001|1h 43m|Victor Salva</h5>

        <h5>Cast: Gina Philips, Justin Long, Jonathan Breck</h5>

        <br></br>
                <p>
                    <strong>Movie Decription</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
        </div>
       
     
    </div>

    );
  }
}

export default JeepersCreepers;
import SimpsonsImage, {} from "../components/simpsons.jpg"
import React, { Component } from 'react';
import StarRating from '../components/StarRating'




class Simpsons extends Component{
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

        <img style={imageStyle} src={SimpsonsImage} alt="Simpsons Movie"/>

      <div>
            <StarRating/>

            <h2> Simpsons Movie </h2>

            <h5>2007|1h 28m|David Silverman</h5>

            <h5>Cast: Dan Castellaneta, Julie Kavner, Nancy Cartwright</h5>

            <br></br>
                    <p>
                        <strong>Movie Decription</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
       </div>
       
     
      </div>

    );
  }
}

export default Simpsons;
import BoratImage, {} from "../components/borat.jpeg"
import React, { Component } from 'react';
import StarRating from '../components/StarRating'





class Borat extends Component{
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

        <img style={imageStyle} src={BoratImage} alt="Borat"/>

            <div>

                <StarRating/>

                <h2> Borat </h2>

                
                <h5>2006|1h 26m|Larry Charles</h5>

                <h5>Cast: Sacha Baron Cohen, Ken Davitian</h5>

                <br></br>
                        <p>
                            <strong>Movie Decription</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
            </div>
            
     
     </div>

    );
  }
}

export default Borat;

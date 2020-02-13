import ParanormalActivityImage, {} from "../components/paranormal.jpeg"
import React, { Component } from 'react';
import StarRating from '../components/StarRating'





class Pa extends Component{
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

            <img style={imageStyle} src={ParanormalActivityImage} alt="Paranormal Activity"/>

            <div>

                <StarRating/>

                <h2> Paranormal Activity </h2>

                <h5>2007|1h 26m|Oren Peli</h5>

                <h5>Cast: Katie Featherstone, Micah Slout</h5>

                <br></br>

                        <p>
                            <strong>Movie Decription</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
            </div>
       
     
        </div>

    );
  }
}

export default Pa;

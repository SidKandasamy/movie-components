import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa'


const StarRating = () => {

    const [rating, setRating] = useState(null);//star always set to null rating
    const [hover, setHover] = useState(null);

    const starStyle ={

        float: 'right',
        marginRight: '35px'
    }

    return (
    
    <div style={starStyle}>
    {[...Array(5)].map((star, i)=>{

        const ratingValue = i +1; //setting value of each star as map method goes through the array

        return(  
            
            <label>
            
                <input
                style={{display:'none'}} 
                type="radio" name="rating" value={ratingValue} 
                onClick={()=>setRating(ratingValue)}
                />  
                
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#D4AF37" : "e4e5e9"} size={30} //hover takes importance
                            onMouseEnter={()=> setHover(ratingValue)} 
                            onMouseLeave={()=> setHover(null)}   
                        />
                        
            </label>


        );
       
    })}
    
    </div>

    )
}

export default StarRating

// onClick={()=>setRating={ratingValue}} sets rating to the new state once been clicked
import React from "react";
import './CSS/Homepage.css';
import InterestBanner from '../../assets/Images/BlueBanner.png';
import {NavLink} from 'react-router-dom';
const Recommendation =(props)=>{
    return(
        <div className="Interest-banner">
            <img src={InterestBanner} alt="interestbanner"/>
            <p>Get Topic Recommendation <br/>according to your Interest    </p>
            <NavLink to="/home/Interest/Preference">
                <button>Choose Interest</button>
            </NavLink>
        </div>
      
           
     
    );
}
export default Recommendation;
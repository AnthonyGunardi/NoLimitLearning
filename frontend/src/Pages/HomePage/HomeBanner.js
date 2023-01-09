import React,{Component} from "react";
import {Link} from 'react-router-dom';
import './CSS/HomeBanner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner from '../../assets/Images/banner.jpg'

class HomepageBanner extends Component{
    render(){
        let text=null;
        let Banner=null;

        if(this.props.img){
            Banner=( <div className="BannerSection">
                     <img className="BannerImage" 
                     src={banner} alt="banner1"/>
                    </div>);
        }
        if(this.props.img === null){
            
            text = (
                    
                    <div className="Teacher-banner">
            
                        <p className="Teacher-text">NO LIMIT LEARNING</p> 
                       <Link to="teacher"> <button className="createCourse">
                            Create New Topic</button></Link>
                        
                    </div>
            );
        }
    
    return(
        <>
           
           {Banner}
            {text}
        </>
     
    );
  }
}
export default HomepageBanner;
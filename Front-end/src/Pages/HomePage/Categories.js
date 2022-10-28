import React from "react";
import './CSS/CategoriesCard.css';
import {NavLink} from 'react-router-dom'
const Categories =(props)=>{
    return(
        <div className="CategoryDevider">
                <div className="Categories-main">
                
                <h3 className="Categories-heading"> Categories </h3>
            <div className="ListOfCourses">
                  <NavLink to='/home/all' activeClassName="active-category" >All Topics</NavLink>
                  <NavLink to='/home/Web Development' activeClassName="active-category">Learning Topic 1 </NavLink>
                  <NavLink to='/home/Programming Languages' activeClassName="active-category">Learning Topic 2</NavLink>
                  <NavLink to='/home/ML' activeClassName="active-category">Learning Topic 3</NavLink>
                  <NavLink to='/home/Cloud Development' activeClassName="active-category">Learning Topic 4 </NavLink>
                  <NavLink to='/home/Data Science' activeClassName="active-category">Learning Topic 5</NavLink>
                  <NavLink to='/home/preferences' className="recommended" activeClassName="active-category">Recommended!</NavLink>
                
            </div>
                </div>
                <div className="Course-Devider">
                </div>
                
                <div className='CategoriesSlider'>
                  <NavLink to='/home/all' activeClassName="Sactive-category">All Topics</NavLink>
                  <NavLink to='/home/Web Development' activeClassName="Sactive-category">Learning Topic 1 </NavLink>
                  <NavLink to='/home/Programming Languages' activeClassName="Sactive-category">Learning Topic 2</NavLink>
                  <NavLink to='/home/ML' activeClassName="Sactive-category">Learning Topic 3</NavLink>
                  <NavLink to='/home/Cloud Development' activeClassName="active-category">Learning Topic 4</NavLink>
                  <NavLink to='/home/Data Science' activeClassName="active-category">Learning Topic 5</NavLink>
                  <NavLink to='/home/preferences' className="recommended" activeClassName="active-category">Recommended!</NavLink>
            </div>
        </div>
     
    );
}
export default Categories;
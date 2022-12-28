import React from 'react';
import './CSS/mdi/appicon/appicon.css'
import './CSS/mdi/materialdesignicons.min.css'
import './CSS/fixed-footer-menu.css'

const Footer =(props)=>{
    return (
      <div class="footer-menu circular">
        <ul>
            <li >
                <a href="http://localhost:3000/menu" >      
                    <i class="mdi mdi-home"></i>
                    <span>Home</span>
                </a>    
            </li>
            <li >
                <a href="http://localhost:3000/leaderboard" >      
                    <i class="mdi mdi-account-group"></i>
                    <span>Leaderboard</span>
                </a>    
            </li>
            <li >
                <a href="http://localhost:3000/menu" >      
                    <i class="mdi mdi-forum"></i>
                    <span>Chat</span>
                </a>    
            </li>
        </ul>
      </div>
   );
}
export default Footer;
import React from 'react';
import "./Dashboard.css"
const Dashboard = () => {
    return (
          <div className="wrapper">
            <nav className = "navbar">
            <div className="navdiv">
            <div className="logo">CHATbot</div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Profile</a></li>
              </ul>
              </div>
            </nav>
            <div className="hero">
                <h1><span className = "welcome">Welcome to</span><br></br><br /><span className='heroText'>chatBOT</span></h1>
            </div>
          </div>
    )
}
export default Dashboard;

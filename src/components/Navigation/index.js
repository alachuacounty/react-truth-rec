import React from 'react';
import "./index.css";

import logo from "../../img/truth-logo.png";

class Navigation extends React.Component{
    

    render(){

        return(
            <div>
              <p> Hello, {this.props.name} </p>

              <div class="nav">
                                
                    <div class=" grid-item logo">
                        <a href="index.html">
                            <img class="logo-img" src={logo} alt="truth logo"/>
                        </a>
                    </div>
                    <div class=" grid-item elements">
                        <ul class="element-children">
                            <li class="menu"><a href={this.props.links[0].link}>{this.props.links[0].title}</a></li>
                            <li id = "explore" class="menu"><a href={this.props.links[1].link}>{this.props.links[1].title}</a></li>
                            <li class="menu"><a href="reparations.html">Reparations</a></li>
                            <li class="menu"><a href="events.html">Events</a></li>
                            <li class="menu"><a href="contact.aspx">Contact</a></li>
                        </ul>
                    </div>
                    <div class="hamburger-menu">
                        <a href="#" class="openModalBtn">
                            <span class="bar one"></span>
                            <span class="bar two"></span>
                            <span class="bar three"></span>
                        </a>
                    </div>

                    <div class="grid-item subnav">
                        <ul class="sub-elements">
                            <li><a href="resources.html">Resources</a></li>
                            <li><a href="timeline.html">Timeline</a></li>
                            <li><a href="map.html">Map</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        );
    }
}


export default Navigation;



/*
<div class="nav">
            
<div class=" grid-item logo">
    <a href="index.html">
        <img class="logo-img" src="img/truth-logo.png" alt="truth logo"/>
    </a>
</div>
<div class=" grid-item elements">
    <ul class="element-children">
        <li class="menu"><a href="about.html">About</a></li>
        <li id = "explore" class="menu"><a href="resources.html">Explore History</a></li>
        <li class="menu"><a href="reparations.html">Reparations</a></li>
        <li class="menu"><a href="events.html">Events</a></li>
        <li class="menu"><a href="contact.aspx">Contact</a></li>
    </ul>
</div>
<div class="hamburger-menu">
    <a href="#" class="openModalBtn">
        <span class="bar one"></span>
        <span class="bar two"></span>
        <span class="bar three"></span>
    </a>
</div>

<div class="grid-item subnav">
    <ul class="sub-elements">
        <li><a href="resources.html">Resources</a></li>
        <li><a href="timeline.html">Timeline</a></li>
        <li><a style="display:none;" href="map.html">Map</a></li>
    </ul>
</div>

</div>

*/
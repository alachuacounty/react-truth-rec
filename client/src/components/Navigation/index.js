import React from 'react';
import "./index.css";
import logo from "../../img/truth-logo.png";

class Navigation extends React.Component{
    

    render(){

        return(
              <section class="nav">
                                
                    <div class=" grid-item logo">
                        <a href="/">
                            <img class="logo-img" src={logo} alt="truth logo"/>
                        </a>
                    </div>
                    <div class=" grid-item elements">
                        <ul class="element-children">
                            <li class="menu"><a href={this.props.links[0].link}>{this.props.links[0].title}</a></li>
                            <li id = "explore" class="menu"><a href={this.props.links[1].link}>{this.props.links[1].title}</a></li>
                            <li class="menu"><a href={this.props.links[2].link}>{this.props.links[2].title}</a></li>
                            <li class="menu"><a href={this.props.links[3].link}>{this.props.links[3].title}</a></li>
                            <li class="menu"><a href={this.props.links[4].link}>{this.props.links[4].title}</a></li>
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
                            <li><a href={this.props.links[5].link}>{this.props.links[5].title}</a></li>
                            <li><a href={this.props.links[6].link}>{this.props.links[6].title}</a></li>
                            <li><a href={this.props.links[7].link}>{this.props.links[7].title}</a></li>
                        </ul>
                    </div>

                </section>

        );
    }
}

export default Navigation;



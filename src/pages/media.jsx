import React from 'react';
import shadows from "../img/shadows.png";
import boDidley from "../img/bo-diddley.png";
import baseballPlayers from "../img/baseball-league.png";
import verdellWashington from "../img/verdell.png";
import cottonClub from "../img/cotton-club.png";
import '../css/TruthRec.css';
import "../css/media-gallery.css";
import { render } from "@testing-library/react";


class MediaPage extends React.Component{

render(){

return(
<section id="main" class="main">
            <div class="grid-item intro">
                <h1>Historical Media Gallery</h1>
            </div>
         


            <div class="grid-item video-title">
                <h1>Videos</h1>
            </div>

 
            <section class="video-content">

      
                <article class="shadow-plantations-card">
                    <a data-toggle="modal" data-target="#myModal1">
                    <div class="image-top-left">
          

                            <img data-toggle="modal" src={shadows} class="resource" alt="in the shadows image"/>
                   

                    </div>

                    <div class="card-text">
                        <p><strong>In the Shadows of Plantations</strong></p>
                        <p>30:00</p>
                    </div>
                </a>
                    
                </article>

                <article class="bo-diddley-card">
                    <a data-toggle="modal" data-target="#myModal2">
                    <div class="image-top-left">

                            <img src={boDidley} class="resource" alt="image of Bo Diddley Memorial 2008"/>
                    

                    </div>

                    <div class="card-text">
                        <p><strong>Bo Diddley Memorial 2008</strong></p>
                        <p>08:21</p>
                    </div>
                </a>
                </article>


                <article class="baseball-card">
                    <a data-toggle="modal" data-target="#myModal3">
                    <div class="image-top">

                            <img src={baseballPlayers} class="resource" alt="image of baseball players"/>
                 

                       
                    </div>

                    <div class="card-text">
                        <p><strong>Negro Baseball League Players visit Alachua County</strong></p>
                        <p>09:22</p>
                    </div>
                </a>
                </article>


                <article class="verdell-washington-card">
                    <a data-toggle="modal" data-target="#myModal4">
                    <div class="image-top">

                            <img src={verdellWashington} class="resource" alt="image of Verdell Washington" />


                       
                    </div>

                    <div class="card-text">
                        <p><strong>Alachua County Talks: Verdell Washington Robinson</strong></p>
                        <p>25:01</p>
                    </div>
                </a>
                </article>


                <article class="cotton-club-card">
                    <a data-toggle="modal" data-target="#myModal6">
                    <div class="image-top">

                            <img src={cottonClub} class="resource" alt="image of chari person of cotton club museum"/>


                     
                    </div>

                    <div class="card-text">
                        <p><strong>Cotton Club Museum and Cultural Center</strong></p>
                        <p>28:30</p>
                    </div>
                </a>
                </article>
            </section>

        

        </section>


    
)


}



}

export default MediaPage
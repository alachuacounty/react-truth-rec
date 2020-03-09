import React from "react";
import '../css/TruthRec.css';
import "../css/links.css";

class LinksPage extends React.Component{

    render(){


return(

    <div>
<div class="main-content">
        <div class="intro">
        <h1 class="title">Links</h1>
    </div>
<hr></hr>
        <div>
            <p><a href="https://oral.history.ufl.edu/" target="blank"><strong>Samuel Proctor Oral History Program</strong></a></p>
             <p>SPOHP is an award-winning, social-justice research center engaged in experiential learning initiatives all over the world.</p>
        </div>
        <hr></hr>
        <div>
            <p><a href="https://eji.org/" target="blank"><strong>Equal Justice Initiative - EJI</strong></a></p>
            <p>The Equal Justice Initiative is committed to ending mass incarceration and excessive punishment in the United States, to challenging racial and economic injustice, and to protecting basic human rights for the most vulnerable people in American society.</p>

        </div> 
        <hr></hr>
        <div class="fourth">
            <p><a href="http://www.alachuaclerk.org/archive/CFDocs/TransSearchsolr.cfm" target="blank"><strong>Alachua County Ancient Records Transcription Search</strong></a></p>
            <p>Search the volunteer provided transcriptions of Alachua County's Record Book images.</p>
        </div>
        
    </div>

    </div>
)


    }


}


export default LinksPage;
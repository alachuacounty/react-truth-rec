import React from 'react';
import "../css/TruthRec.css";
import "../css/members.css";

class MembersPage extends React.Component{
    render(){
        return(
         <section class="main" id="main-section">
       <h2 class="title">Community Remembrance Project Committe</h2>
       <p class="note">Meetings are held every 2nd and 4th Wednesday of each month at 10 a.m.
        For meeting details, please contact Latoya Gainey at <span>lgainey@alachuacounty.us</span> or <span>call 352-264-6900</span></p>
     
       <div class="main-committee">
        <article class="committee-info one">
            <p class="committee-name">Charles S. Chestnut, IV</p>
            <p class="comittee-position">Chair</p>
        </article>

        <article class="committee-info two">
            <p class="committee-name"> Carl Smart</p>
            <p class="comittee-position">County Staff Liaison</p>
            <p class="committee-email"><span>Email:</span> csmart@alachuacounty.us</p>
        </article>

        <article class="committee-info three">
            <p class="committee-name"> Jackie Davis</p>
            <p class="comittee-position">Community Liaison:</p>
           
            <p class="committee-email"><span>Email:</span> jackie07davis@gmail.com</p>
        </article>
       </div>


       <div class="sub-committee">
           <h2 class="sub-title">Other sub committees throughout the area</h2>
          <article class="committee-info sub-row first">
              <p class="area">ALACHUA/NEWNANSVILLE AREAS</p>
            <p class="committee-name">Team Leader: Commissioner Shirley Brown</p>
            <p class="committee-email"><span>Email:</span> sh_brown@cityofalachua.org</p>
        </article>

        <article class="committee-info sub-row second">
            <p class="area">ARCHER AREA</p>
          <p class="committee-name">Team Leader: Lizzie Jenkins</p>
          <p class="committee-email"><span>Email:</span> lizzieprj@aol.com</p>
      </article>

       <article class="committee-info sub-row third">
              <p class="area">GAINESVILLE AREA</p>
            <p class="committee-name">Team Leader: Evelyn Foxxe</p>
            <p class="committee-email"><span>Email:</span> foxxe1948@gmail.com</p>
        </article>

        <article class="committee-info sub-row fourth">
            <p class="area">HAWTHORNE/WALDO AREA</p>
            <p class="committee-name">Team Leader: Pop Herring</p>
        </article>

        <article class="committee-info sub-row fifth">
            <p class="area">HIGH SPRINGS AREA</p>
            <p class="committee-name">Team Leader: Veloria Kelly</p>
            <p class="committee-email"><span>Email:</span> veloriak21@gmail.com</p>
        </article>

        <article class="committee-info sub-row sixth">
            <p class="area">MICANOPY AREA</p>
            <p class="committee-name">Team Leader: Melanie Barr</p>
            <p class="committee-email"><span>Email:</span> mvbarr@bellsouth.net</p>
        </article>

        <article class="committee-info sub-row seventh">
            <p class="area">MONTEOCHA/GORDON/ LACROSSE AREAS</p>
            <p class="committee-name">Team Leader: Ayoka Sowa La</p>
            <p class="committee-email"><span>Email:</span> niisowala51@gmail.com</p>
        </article>

        <article class="committee-info sub-row eighth">
            <p class="area">NEWBERRY AREA</p>
            <p class="committee-name">Team Leader: Mayor Jordan Marlowe</p>
            <p class="committee-email"><span>Email:</span> Jordan.Marlowe@ci.newberry.fl.us</p>
        </article>
         
       </div>
      
    </section>
     
    )
        }
}

export default MembersPage;

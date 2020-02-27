import React from "react";
import '../css/TruthRec.css';
import "../css/about.css";
import { render } from "@testing-library/react";


class AboutPage extends React.Component{

render(){

return(

    <section class="main">
    <h1 class="title">Alachua County Truth and Reconciliation Initiative.</h1>
    <div class="meat-content">
         <p>Concerning the Truth and Reconciliation process, the Board passed the following:</p>

         <ol class="motions">
             <li>The County Commission hereby initiates its Truth and Reconciliation process, 
                 the goal of which is to set an example for how local government can recall its role in our history of racial injustice, 
                 and repair what it can through official apologies and appropriate reparations.</li>

             <li>The County will research its history of voter suppression, segregation in housing and public accommodations, discrimination in hiring and economic opportunity, 
                 participation in leased prison labor to fund county government and build/maintain public facilities, differences in the provision of government services, 
                 and any other government actions or inactions that deserve to be remembered.
            </li>

             <li>The County will cooperate in and co-sponsor one or more symposiums or conferences where “truth and reconciliation” is the topic, 
                 and where experts with experience in similar processes are invited to provide insights.
            </li>

             <li>The County will facilitate town hall meetings where people can tell their story and react to historical findings.</li>

             <li>The County will co-sponsor and assist in one or more public reading projects, such as the Gainesville Mayor’s Book Club. </li>

             <li>The County will create an online archive of documents, images and recordings, related to this project. 
                 This may be done in cooperation with the County’s constitutional officers, the Library District, the University of Florida, and local historic museums. 
                 As much as possible, original documents and interviews with those directly affected will be collected rather than relying on secondhand accounts and historical interpretations. 
                 The County website will provide the County’s role but should provide hyperlinks to the other resources from the other entities participating in the process.</li>

             <li>By letter from the Chair, other public and private institutions will be invited to participate in a similar process for their organization, 
                 with a goal to complete the research phase by 2020.</li>

             <li>The County will formally request that the memorial slab of Alachua County victims of lynching be transferred to County government: 
                 <ol class="a">
                 <li>As soon as the EJI requirements have been met for this truth and reconciliation process</li>
                <li>  Determined through a public process where and how the monument will be displayed </li>
                <li>  Have raised sufficient public and private funds required to properly display and interpret the monument. </li>
                <li>  Explore how those names not on the EJI Memorial will be properly memorialized in Alachua County and Montgomery Alabama. </li>
                <li>  Explore the possibility of collecting jars of soil from or near the lynching sites as well as providing some to the display in Montgomery Alabama. </li>
                <li>  Explore the possibility of road signs near the sites that would direct those interested in the matter to the information. </li>
                </ol>
             </li>
             <li>This motion will be provided as a referral to all County advisory boards, with a request for them to provide a short-written recommendation for the scope of their participation, 
                 any areas of inquiry that they believe should be included, or any proposed revisions to this process.
            </li>

             <li>The County Manager an Attorney are requested to return with their analysis of the public and private resources needed to complete the tasks suggested in this motion, 
                 and any further revisions including legal liabilities, for further consideration by the Board of County Commissioners as an item on a regular agenda during an evening meeting. 
                 The County Manager will discuss with the University of Florida their willingness to participate in the process and any cost associated with their efforts. 
                 The County Manager shall explore how to send County employees on a trip to view the EGI Museum in Alabama and report back to the Board with how that would work. 
                 There should be an interim report in January informing the Board of the Manager’s efforts and suggestions.
            </li>
         </ol>
    </div>
</section>

)


}


}


export default AboutPage;

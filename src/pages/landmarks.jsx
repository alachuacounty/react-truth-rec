import React from 'react';
import '../css/TruthRec.css';
import "../css/landmarks.css";
class LandmarksPage extends React.Component {

    render(){


        return(


<section class="main" id="main-section">
            <div class="title">
                <h1>Landmarks</h1>
            </div>

            <div class="first-intro">
                <h2>State Historical Marker Locations</h2>
                <p>The history of Alachua County’s settlement includes many contributions by, and struggles of, the
                    African American community. State Historic Markers focused on the resilience of the community
                    including those commemorating Josiah T. Walls, the Serenola Settlement, and the lynching history
                    of Newberry.
                </p>
                </div>
            <div class="markers">
                <article class="walls-sign">
                    <div class="image-top">
                        <a data-toggle="modal" data-target="#NewberryLynchingMarker">
                            <img src="img/landmark-img/Newberry-Lynching-Marker.jpg" class="resource" alt="Newberry Lynching Marker" />
                        </a>
                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#NewberryLynchingMarker"><strong>Newberry Lynching
                                        Marker</strong></a></p>

                        </div>
                    </div>
                </article>
                <article class="walls-sign">
                    <div class="image-top">
                        <a data-toggle="modal" data-target="#Josiah">
                            <img src="img/landmark-img/walls.png" class="resource" alt="Walls Lankdmark Image" />
                        </a>
                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#Josiah"><strong>Josiah T. Walls</strong></a></p>

                        </div>
                    </div>


                </article>


                <article class="serenola">
                    <div class="image-top">
                        <a href="#img2">
                            </a><a data-toggle="modal" data-target="#Serenola">
                                <img src="img/landmark-img/serenola.png" class="resource" alt="Image pf Serenola Landmark" />
                            </a>
                        

                   
                        <a href="#_" class="lightbox" id="img3">
                            <img src="img/landmark-img/serenola.png" alt="Image of Serenola Landmark" />
                        </a>
                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#Serenola"><strong>Serenola Plantation</strong></a>
                            </p>

                        </div>
                    </div>


                </article>
                <p>Other Florida State Historic Markers in Alachua County that discuss African American history include the Bland Community; Douglass High School; Alachua County Training School; and the Archer School Gymnasium. In Gainesville markers include Mt. Carmel Baptist Church; Chestnut Funeral Home; Shady Grove Primitive Church and Porters Quarters; The Home of A. Quinn Jones, Sr., Educator; The Ball Park; Mt. Pleasant United Methodist Church; and Mt. Pleasant Cemetery.  There are also markers in the County that mention the work of enslaved persons at Historic Haile Homestead at Kanapaha Plantation; Daniel Scott Plantation; and the Moses Elias Levy marker (near Micanopy).</p>
            
            </div>

            <div class="second-intro">
                <h1>National Register Sites</h1>
                <p>National Register (NR) Sites for our African American History are A Quinn Jones House, Liberty Hill
                    School House, Shady Grove Primitive Baptist Church and Pleasant Street Historic District.</p>
            </div>

            <div class="register-sites">
                <article class="quinn">
                    <div class="image-top">

                        <a data-toggle="modal" data-target="#quinn">
                            <img src="img/landmark-img/quinn-jones.png" class="resource" alt="Image of Quinn Jones Landmark" />
                        </a>


                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#quinn"><strong>A. Quinn Jones House</strong></a></p>
                        </div>
                    </div>


                </article>

                <article class="liberty">
                    <div class="image-top">

                        <a data-toggle="modal" data-target="#liberty">
                            <img src="img/landmark-img/liberty-hill.png" class="resource" alt="Image of Liberty Hill Landmar" />
                        </a>



                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#liberty"><strong>Liberty Hill School
                                        House</strong></a></p>

                        </div>
                    </div>


                </article>

                <article class="shady-grove">
                    <div class="image-top">

                        <a data-toggle="modal" data-target="#shady-grove">
                            <img src="img/landmark-img/shady-grove.png" class="resource" alt="Image of Shady Grove Baptist Church" />
                        </a>




                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#shady-grove"><strong>Shady Grove Primitive Baptist
                                        Church</strong></a></p>

                        </div>
                    </div>

                </article>
                <article class="pleasant">
                    <div class="image-top">

                        <a data-toggle="modal" data-target="#pleasant">
                            <img src="img/landmark-img/pleasant-street.png" class="resource" alt="image of baseball players" />
                        </a>



                        <div class="shadow-text">
                            <p><a data-toggle="modal" data-target="#pleasant"><strong>Pleasant Street Historic
                                        District</strong></a></p>

                        </div>
                    </div>


                </article>
            </div>
    </section>

        );




    }




}

export default LandmarksPage;
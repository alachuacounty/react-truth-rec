import React from "react";
import '../css/TruthRec.css';
import "../css/contact.css";

var hiddenStyle = { display: 'none'};

function validate() { alert("not overwriiten");};

class ContactPage extends React.Component {

    componentDidMount() {
        var field1 = document.getElementById("firstName");
        var field2 = document.getElementById("lastName");
        var field4 = document.getElementById("inputEmail");
        var field5 = document.getElementById("inputMessage");

        var validationMessages = document.getElementsByClassName("form-validation");


        function isValid_Name(field) {

            return field.value !== "";
        }


        function isValid_Email() {


            if (field4.value === "") {
                validationMessages[3].innerText = "* Required";
                return false;
            }
            var email = field4.value;

            const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

            if (!expression.test(email.toLowerCase())) {
                validationMessages[3].innerText = "Please specify a valid email address.";
                return false;
            }




            return true;
        }

        function showFirstNameErrorMsg() {

            if (field1.value === "") {
                validationMessages[0].style["display"] = "inline-block";
            }
            else {
                validationMessages[0].style["display"] = "none";
            }

        }
        function showLastNameErrorMsg() {

            if (field2.value === "") {
                validationMessages[1].style["display"] = "inline-block";
            }
            else {
                validationMessages[1].style["display"] = "none";
            }

        }

        function showEmailErrorMsg() {
            if (!isValid_Email()) {
                validationMessages[3].style["display"] = "inline-block";
            }
            else {
                validationMessages[3].style["display"] = "none";
            }

        }


        function validate_form() {

            alert("trying client side validatin");

            var invalid = false;

            field1 = document.getElementById("firstName");
            field2 = document.getElementById("lastName");
            field4 = document.getElementById("inputEmail");
            field5 = document.getElementById("inputMessage");


            if (!isValid_Email()) {
                invalid = true;
                showEmailErrorMsg();
                field4.focus();
            }
            if (!isValid_Name(field2)) {
                invalid = true;
                showLastNameErrorMsg();
                field2.focus();
            }

            if (!isValid_Name(field1)) {
                invalid = true;
                showFirstNameErrorMsg();
                field1.focus();
            }


            field1.addEventListener("change", showFirstNameErrorMsg);
            field2.addEventListener("change", showLastNameErrorMsg);
            field4.addEventListener("change", showEmailErrorMsg);

            if (!invalid) {
                //flipcard();
            }

            return !invalid;

        }


        /*var prm = Sys.WebForms.PageRequestManager.getInstance();

        prm.add_endRequest(function () {
            // re-bind your jQuery events here


            field1 = document.getElementById("firstName");
            field2 = document.getElementById("lastName");
            field4 = document.getElementById("inputEmail");
            field5 = document.getElementById("inputMessage");

            field1.addEventListener("change", showFirstNameErrorMsg);
            field2.addEventListener("change", showLastNameErrorMsg);
            field4.addEventListener("change", showEmailErrorMsg);
        });*/


        validate = validate_form;



    }

    render(){
        return (
            <section id="contact-main" class="contact-main">
                <div id="contact-main">
                    <h1 class="title">Contact Us</h1>
                    <div class="contact-story">
                        <h3><strong>Send Us Your Story</strong></h3>
                    </div>                   
                    <div class="form">
                        <form method="post" action="validate_form()" id="contactform">
                              <div id="UpdatePanel1">
	
                                        <ul class="form-style-1">
                                            <li>
                                                <label>Full Name <span class="required">*</span></label>
                                                <input name="firstName" maxLength="125" id="firstName" type="text" class="field-divided" placeholder="First" required="required"/>
                                                <span id="firstNameMsg" class="form-validation" aria-live="polite" aria-label="First Name"> * Required </span>
                                                <input name="lastName" maxLength="125" id="lastName" type="text" class="field-divided" placeholder="Last" required="required"/>
                                                <span id="lastNameMsg" class="form-validation" aria-live="polite" aria-label="Last Name"> * Required  </span>

                                            </li>
                                            <li>
                                                <label htmlFor="inputEmail">Email <span class="required">*</span></label>
                                                <input name="inputEmail" maxLength="256" id="inputEmail" type="email" class="field-long" placeholder="Email" required="required"/>
                                                <span id="EmailMsg" class="form-validation" aria-live="polite" aria-label="Email"> Please specify a valid email address.  </span>
                                            </li>
                                            <li>
                                                <label htmlFor="inputMessage">Your Message <span class="required">*</span></label>
                                                <textarea name="inputMessage" rows="3" cols="20" id="inputMessage" class="field-long field-textarea" placeholder=""></textarea>

                                            </li>
                                            <li>
                                                <input type="submit" name="contact_submit" value="Send Message" onClick={validate} id="contact_submit" class="btn learn-button text-white"/>
                                            </li>
                                            <li style={hiddenStyle}>
                                                <label htmlFor="userComment">Comment </label>
                                                <input name="userComment" autoComplete="off" id="userComment" type="text" class="form-control" placeholder="Your Comment" aria-label="Please leave this field empty"/>
                                            </li>
                                        </ul>                                 
                                </div>
                       </form>
                    </div>
             </div>  
            </section>
        );
    }

}


export default ContactPage;
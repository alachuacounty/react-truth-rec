import React from "react";
import '../css/TruthRec.css';
import "../css/contact.css";

var hiddenStyle = { display: 'none'};

function validate() { 
    alert("not overwriiten");
};



class ContactPage extends React.Component {


    constructor (props) {
        super(props);
        this.state = {
          firstName: '',
          lastName:'',  
          inputEmail: '',
          inputMessage: '',
          userComment:'',
          fnameValid: false,
          lnameValid:false,
          emailValid:false,
          msgValid:false,
          formValid:false
        }

        //Binding submit event with constructor

        //this.validate = this.handleUserInput;


      }
    
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) } );
      }

      validateField(fieldname, value){
          // determine which field and call appropriate validate function 

          switch(fieldname){
              case 'firstName': this.isValid_firstName(value);
                                break;
              case 'lastName': this.isValid_lastName(value);
                                break;
              case 'inputEmail': this.isValid_Email(value);
                                break;
              case 'inputMessage': this.isValid_Message(value);
                                break;
              default:
                  break;
          }

          //set form valid to enable/disable form submission

          let formValid = this.state.lnameValid && this.state.fnameValid && this.state.emailValid && this.state.msgValid;

          this.setState({[this.state.formValid]: formValid});

      }



    isValid_firstName = (value) => {


        let valid = value !== "";

        this.setState({[this.state.fnameValid]: valid},
        ()=> { this.updateErrorMsg(0,valid) });
     
    }
  
    isValid_lastName(value) {


        let valid = value !== "";

        this.setState({[this.state.lnameValid]: valid},
        ()=> { this.updateErrorMsg(1,valid) });

    }

    isValid_Email(value){
        
        //TODO set state valid for email
        //regex match stuff here
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        
        let valid = (value === "" || !expression.test(value.toLowerCase()) ) ?false:true;

        this.setState({[this.state.emailValid]: valid},
            ()=> { this.updateErrorMsg(2,valid) });
    
    }


    isValid_Message(value) {

        
        let valid = value !== "";

        this.setState({[this.state.msgValid]: valid},
        ()=> { this.updateErrorMsg(3,valid) });

    }

    updateErrorMsg(index, validity) {

        console.log(index + ":: "+validity);

        const validationMessages = document.getElementsByClassName("form-validation");

        if (!validity) {
            validationMessages[index].style["display"] = "inline-block";
        }
        else {
            validationMessages[index].style["display"] = "none";
        }

    }

  
  
    render(){
        return (
            <section id="contact-main" class="main">
                <div id="main-content">
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
                                                <input name="firstName" maxLength="125" id="firstName" type="text" class="field-divided" placeholder="First" required="required" onChange={this.handleUserInput} value={this.state.firstName} />
                                                <span id="firstNameMsg" class="form-validation" aria-live="polite" aria-label="First Name"> * Required </span>
                                                <input name="lastName" maxLength="125" id="lastName" type="text" class="field-divided" placeholder="Last" required="required" onChange={this.handleUserInput} value={this.state.lastName}/>
                                                <span id="lastNameMsg" class="form-validation" aria-live="polite" aria-label="Last Name"> * Required  </span>

                                            </li>
                                            <li>
                                                <label htmlFor="inputEmail">Email <span class="required">*</span></label>
                                                <input name="inputEmail" maxLength="256" id="inputEmail" type="email" class="field-long" placeholder="Email" required="required" onChange={this.handleUserInput} value={this.state.email}/>
                                                <span id="EmailMsg" class="form-validation" aria-live="polite" aria-label="Email"> Please specify a valid email address.  </span>
                                            </li>
                                            <li>
                                                <label htmlFor="inputMessage">Your Message <span class="required">*</span></label>
                                                <textarea name="inputMessage" rows="3" cols="20" id="inputMessage" class="field-long field-textarea" placeholder="" onChange={this.handleUserInput} value={this.state.inputMessage}></textarea>
                                                <span id="MessageMsg" class="form-validation" aria-live="polite" aria-label="Message"> * Required </span>
                                            </li>
                                            <li>
                                                <input type="submit" name="contact_submit" value="Send Message" id="contact_submit" class="btn learn-button text-white" disabled={!this.state.formValid}/>
                                            </li>
                                            <li style={hiddenStyle}>
                                                <label htmlFor="userComment">Comment </label>
                                                <input name="userComment" autoComplete="off" id="userComment" type="text" class="form-control" placeholder="Your Comment" aria-label="Please leave this field empty" onChange={this.handleUserInput} value={this.state.userComment}/>
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
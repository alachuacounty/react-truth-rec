var field1 = document.getElementById("firstName");
var field2 = document.getElementById("lastName");
var field4 = document.getElementById("inputEmail");
var field5 = document.getElementById("inputMessage");

var validationMessages = document.getElementsByClassName("form-validation");


function isValid_Name(field) {

    return field.value != "";
}


function isValid_Email() {


    if (field4.value == "") {
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

    if (field1.value == "") {
        validationMessages[0].style["display"] = "inline-block";
    }
    else {
        validationMessages[0].style["display"] = "none";
    }

}
function showLastNameErrorMsg() {

    if (field2.value == "") {
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
        flipcard();
    }

    return !invalid;

}


var prm = Sys.WebForms.PageRequestManager.getInstance();

prm.add_endRequest(function () {
    // re-bind your jQuery events here


    field1 = document.getElementById("firstName");
    field2 = document.getElementById("lastName");
    field4 = document.getElementById("inputEmail");
    field5 = document.getElementById("inputMessage");

    field1.addEventListener("change", showFirstNameErrorMsg);
    field2.addEventListener("change", showLastNameErrorMsg);
    field4.addEventListener("change", showEmailErrorMsg);
});





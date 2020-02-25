import React from 'react';
import "./index.css";

class Footer extends React.Component{

render(){


return(

<footer id="footer" class="footer">
<a class="alachua-info" href="#"> {this.props.footertext}</a>
</footer>


)


}

}


export default Footer;

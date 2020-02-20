import React from 'react';
import "./index.css";

class Footer extends React.Component{

render(){


return(




<div>

<p>Hello, {this.props.name}</p>

<footer id="footer" class="footer">
<a class="alachua-info" href="#"> {this.props.footertext}</a>
</footer>

</div>

)


}

}


export default Footer;

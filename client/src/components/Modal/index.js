import React from 'react';
import "./index.css";

class Modal extends React.Component{

    componentDidMount() {

        var toggle = document.getElementsByClassName('openModalBtn')[0];
        var modal = document.getElementById('modal');
        function openModal() {
           
            modal.classList.toggle("modalVisible");
                     
        }
        toggle.onclick = openModal;
        var closeModalBtn = document.getElementById('closeModalBtn');
        function closeModal() {

            modal.classList.toggle("modalVisible");
        }
        closeModalBtn.onclick = closeModal;
      }


    render(){

        return(
            <div id="modal">
                <div id="closeModalBtn">         
                    <a class="on" href="#">
                        <span class="bar one"></span>
                        <span class="bar two"></span>
                        <span class="bar three"></span>
                    </a> 
                </div>
                <ul class="modal-children">
                    <li class="menu1"><a href={this.props.links[0].link}>{this.props.links[0].title}</a></li>
                    <li class="menu2"><a href={this.props.links[1].link}>{this.props.links[1].title}</a></li>
                    <li class="menu3"><a href={this.props.links[2].link}>{this.props.links[2].title}</a></li>
                    <li class="menu4"><a href={this.props.links[3].link}>{this.props.links[3].title}</a></li>
                    <li class="menu5"><a href={this.props.links[4].link}>{this.props.links[4].title}</a></li>
                </ul> 
            </div>

        );
    }
}

export default Modal;

